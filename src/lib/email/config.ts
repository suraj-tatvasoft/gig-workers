import nodemailer from 'nodemailer'

import { serverEnv } from '@/lib/config/serverEnv'

export const transporter = nodemailer.createTransport({
  host: serverEnv.SMTP_HOST,
  port: Number(serverEnv.SMTP_PORT),
  secure: true,
  auth: {
    user: serverEnv.SMTP_USER,
    pass: serverEnv.SMTP_PASS,
  },
})

export const fromEmail = serverEnv.FROM_EMAIL
