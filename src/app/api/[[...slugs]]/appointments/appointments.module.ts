import { Elysia } from 'elysia'
import { appointmentsController } from './appointments.controller'

export const appointmentsModule = new Elysia({ name: 'appointments.module' }).use(
  appointmentsController
)
