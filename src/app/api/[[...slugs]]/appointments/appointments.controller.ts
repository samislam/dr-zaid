import { Elysia } from 'elysia'
import { VALIDATION_ERR } from '@/constants'
import { appointmentsService } from './appointments.service'
import { createAppointmentInquirySchema } from './appointments.schemas'

export const appointmentsController = new Elysia({ prefix: '/appointments' }).post(
  '/',
  async ({ body, set }) => {
    const parsed = createAppointmentInquirySchema.safeParse(body)

    if (!parsed.success) {
      set.status = 400
      return {
        error: VALIDATION_ERR,
        fieldErrors: parsed.error.flatten().fieldErrors,
      }
    }

    await appointmentsService.createAppointmentInquiry(parsed.data)

    set.status = 201
    return {
      success: true,
    }
  }
)
