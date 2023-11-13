/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { EmailRequest } from '../models/email-request';

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) { }

  public async sendEmail(request: EmailRequest) {
    const template = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Information</title>
      </head>
      <body>
        <p>Hey ${request.email},</p>
        <p>Please click below to confirm your email</p>
        <p>
          ${request.description}
        </p>
        <p>If you did not request this email you can safely ignore it.</p>
      </body>
      </html>
    `;
    return this.mailerService.sendMail({
      to: request.email,
      subject: 'Email',
      html: template
    });
  }
}
