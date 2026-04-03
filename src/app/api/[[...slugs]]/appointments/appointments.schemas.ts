import { z } from 'zod'

export const createAppointmentInquirySchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(7).max(40),
  message: z.string().trim().min(10).max(2000),
})

export type CreateAppointmentInquiryFields = z.infer<typeof createAppointmentInquirySchema>
