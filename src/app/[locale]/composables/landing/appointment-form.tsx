'use client'

import { z } from 'zod'
import { LandingContent } from './types'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { Form } from '@/components/ui/shadcnui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/shadcnui/input'
import { Textarea } from '@/components/ui/shadcnui/textarea'
import { InputField } from '@/components/common/input-field'
import { LoadingButton } from '@/components/ui/shadcnui/loading-button'

const appointmentFormSchema = z.object({
  fullName: z.string().trim().min(2),
  email: z.string().trim().email(),
  phone: z.string().trim().min(7),
  message: z.string().trim().min(10),
})

type AppointmentFormFields = z.infer<typeof appointmentFormSchema>

interface AppointmentFormProps {
  content: LandingContent['contact']
}

export const AppointmentForm = (props: AppointmentFormProps) => {
  const { content } = props
  const form = useForm<AppointmentFormFields>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  const submitMutation = useMutation({
    mutationFn: async (payload: AppointmentFormFields) => {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = (await response.json()) as
        | { success: true }
        | { error?: string; fieldErrors?: Partial<Record<keyof AppointmentFormFields, string[]>> }

      if (!response.ok) {
        if ('fieldErrors' in data && data.fieldErrors) {
          for (const [fieldName, messages] of Object.entries(data.fieldErrors)) {
            const message = messages?.[0]
            if (!message) continue
            form.setError(fieldName as keyof AppointmentFormFields, { message })
          }
        }
        throw new Error('REQUEST_FAILED')
      }

      return data
    },
    onSuccess: () => {
      form.reset()
    },
  })

  const onSubmit = form.handleSubmit(async (values) => {
    submitMutation.reset()
    await submitMutation.mutateAsync(values)
  })

  return (
    <Form {...form}>
      <form className="space-y-1" onSubmit={onSubmit}>
        <InputField
          control={form.control}
          name="fullName"
          label={content.fullNameLabel}
          required
          render={(field) => <Input {...field} placeholder={content.fullNamePlaceholder} />}
        />

        <InputField
          control={form.control}
          name="phone"
          label={content.phoneLabel}
          required
          render={(field) => <Input {...field} placeholder={content.phonePlaceholder} dir="ltr" />}
        />

        <InputField
          control={form.control}
          name="email"
          label={content.emailLabel}
          required
          render={(field) => <Input {...field} placeholder={content.emailPlaceholder} dir="ltr" />}
        />

        <InputField
          control={form.control}
          name="message"
          label={content.messageLabel}
          required
          render={(field) => (
            <Textarea {...field} placeholder={content.messagePlaceholder} className="min-h-36" />
          )}
        />

        <div className="flex flex-col gap-3 pt-2">
          <LoadingButton
            type="submit"
            size="lg"
            loading={submitMutation.isPending}
            loadingText={content.submittingText}
            className="bg-emerald-600 text-white hover:bg-emerald-700"
          >
            {content.submitLabel}
          </LoadingButton>

          {submitMutation.isSuccess && (
            <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
              {content.successMessage}
            </p>
          )}

          {submitMutation.isError && !submitMutation.isPending && (
            <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:bg-red-500/10 dark:text-red-300">
              {content.errorMessage}
            </p>
          )}
        </div>
      </form>
    </Form>
  )
}
