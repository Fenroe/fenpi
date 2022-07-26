import { body, validationResult } from 'express-validator'
import { getMessageSubject, getMessagePlaintext, getMessageHtml } from '../utils'
import { createTransport } from 'nodemailer'

const sendEmail = [
  body('topic').isString().notEmpty(),
  body('name').isString(),
  body('emailAddress').isString(),
  body('heading').isString(),
  body('text').isString().notEmpty(),
  async (req: any, res: any, next: Function) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        console.log(errors)
        throw new Error('Validation failed')
      }
      const { topic, name, emailAddress, heading, text } = req.body
      const origin = req.get('origin')
      const messageSubject = getMessageSubject(name, origin)
      const messagePlaintext = getMessagePlaintext(topic, name, emailAddress, heading, text, origin)
      const messageHtml = getMessageHtml(topic, name, emailAddress, heading, text, origin)
      const message = {
        from: process.env.SENDING_ADDRESS,
        to: process.env.RECEIVING_ADDRESS,
        subject: messageSubject,
        text: messagePlaintext,
        html: messageHtml
      }
      const transport = {
        service:'gmail',
        auth: {
            user: process.env.TRANSPORT_USER,
            pass: process.env.TRANSPORT_PASSWORD
        },
        debug: false,
        logger: true
      }
      const transporter = createTransport(transport)
      await transporter.sendMail(message)
      return res.status(201).send({ message: 'Email was sent' })
    } catch (err) {
      return next(err)
    }
  }
]

export default sendEmail
