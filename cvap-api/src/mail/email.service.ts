/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { EmailRequest } from '../models/email-request';
import { ConfigService } from '@nestjs/config';
import * as SendGrid from '@sendgrid/mail';

@Injectable()
export class EmailService {
  constructor(private readonly configService: ConfigService) {
    const key = this.configService.get<string>('SEND_GRID_KEY') || '';
    SendGrid.setApiKey(key);
  }

  public sendEmail(request: EmailRequest): void {
    const email = {
        to: request.email, // list of receivers
        from: '', // sender address
        subject: 'Testing ✔', // Subject line
        text: 'welcome', // plaintext body
        html: './templates/email-template.hbs', // HTML body content
        context: {
          email: request.email,
          description: request.description,
        },
      }
    SendGrid.send(email)
    // this.mailerService.sendMail({
    //   to: request.email, // list of receivers
    //   from: 'prezgonzlez.por@gmail.com', // sender address
    //   subject: 'Testing Nest MailerModule ✔', // Subject line
    //   text: 'welcome', // plaintext body
    //   html: './templates/email-template.hbs', // HTML body content
    //   context: {
    //     email: request.email,
    //     description: request.description,
    //   },
    // })
    .then((x) => {
      console.log(x);
    })
    .catch((e) => {
      console.error(e);
    });
  }
}
