import { prismaClient } from '@/lib/prisma/prisma-client'
import { CreateAppointmentInquiryFields } from './appointments.schemas'

export class AppointmentsService {
  async createAppointmentInquiry(payload: CreateAppointmentInquiryFields) {
    return prismaClient.appointmentInquiry.create({
      data: payload,
    })
  }
}

export const appointmentsService = new AppointmentsService()
