import Image from 'next/image'
import Link from 'next/link'
import appConfig from '@/config/app.config'
import whatsappIcon from '@/media/whatsapp-icon.png'

const normalizeWhatsappPhone = (phone: string) => phone.replace(/[^\d]/g, '')

export const WhatsappFab = () => {
  const phone = appConfig.contactInfo?.whatsappPhone
  if (!phone) return null

  const normalizedPhone = normalizeWhatsappPhone(phone)
  const href = `https://wa.me/${normalizedPhone}`

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed right-4 bottom-4 z-40 rounded-full bg-white p-2 shadow-lg ring-1 shadow-slate-900/15 ring-slate-200 transition-transform hover:scale-105 sm:right-6 sm:bottom-6 dark:bg-slate-900 dark:ring-white/10"
    >
      <Image src={whatsappIcon} alt="WhatsApp" className="h-12 w-12" priority />
    </Link>
  )
}
