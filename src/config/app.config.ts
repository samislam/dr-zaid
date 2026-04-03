import ms from 'ms'
import path from 'node:path'
import { concat } from 'concat-str'
import logo from '@/media/logo.png'
import { LOCALE_COOKIE } from '@/constants'
import { createAppConfig } from '@/utils/create-app-config'

export default createAppConfig({
  appLogo: logo,
  defaultTheme: 'light',
  defaultLanguage: 'ar',
  fallbackLanguage: 'en',
  languages: ['en', 'ar', 'tr'],
  appName: 'Dr-zaid dentist | Damascus - Syria',
  appDescription: concat("@Dr-zaid ra'yyan's official website | الدكتور أحمد زيد الرعيان"),
  uploadDir: path.resolve(process.cwd(), 'storage', 'uploads'),
  i18nRoutingDef: {
    localePrefix: 'always', // defaults to have no URL prefix (no /en/users, just /users)
    localeCookie: {
      name: LOCALE_COOKIE,
      secure: false,
      sameSite: 'lax',
      maxAge: ms('1y'),
    },
  },
})
