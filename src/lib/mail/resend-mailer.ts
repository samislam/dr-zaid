import { Resend } from 'resend'
import { serverEnv } from '@/server/server-env'
import { CreateAppointmentInquiryFields } from '@/app/api/[[...slugs]]/appointments/appointments.schemas'

const getResendClient = () => {
  if (!serverEnv.RESEND_API_KEY) return null
  return new Resend(serverEnv.RESEND_API_KEY)
}

const getReplyTo = (email: string) => serverEnv.MAIL_REPLY_TO ?? email

export const canSendDoctorNotificationEmail = () =>
  Boolean(serverEnv.RESEND_API_KEY && serverEnv.MAIL_FROM && serverEnv.DOCTOR_NOTIFICATION_EMAIL)

export async function sendDoctorAppointmentNotification(payload: CreateAppointmentInquiryFields) {
  if (!canSendDoctorNotificationEmail()) return

  const resend = getResendClient()
  if (!resend) return

  const subject = `New appointment request from ${payload.fullName}`
  const text = [
    'A new appointment request was submitted.',
    '',
    `Full name: ${payload.fullName}`,
    `Phone number: ${payload.phone}`,
    `Email address: ${payload.email}`,
    '',
    'Message:',
    payload.message,
  ].join('\n')

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
      <h2 style="margin-bottom: 16px;">New appointment request</h2>
      <p><strong>Full name:</strong> ${payload.fullName}</p>
      <p><strong>Phone number:</strong> ${payload.phone}</p>
      <p><strong>Email address:</strong> ${payload.email}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${payload.message}</p>
    </div>
  `

  await resend.emails.send({
    from: serverEnv.MAIL_FROM!,
    to: serverEnv.DOCTOR_NOTIFICATION_EMAIL!,
    replyTo: getReplyTo(payload.email),
    subject,
    text,
    html,
  })
}
