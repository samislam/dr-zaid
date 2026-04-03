import { prismaClient } from '@/lib/prisma/prisma-client'
import { sendDoctorAppointmentNotification } from '@/lib/mail/resend-mailer'
import { CreateAppointmentInquiryFields } from './appointments.schemas'

export class AppointmentsService {
  async createAppointmentInquiry(payload: CreateAppointmentInquiryFields) {
    const appointmentInquiry = await prismaClient.appointmentInquiry.create({
      data: payload,
    })

    try {
      await sendDoctorAppointmentNotification(payload)
    } catch (error) {
      console.error('Failed to send appointment notification email', error)
    }

    return appointmentInquiry
  }
}

export const appointmentsService = new AppointmentsService()
