import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from 'src/mail/email.service';
import { EmailRequest } from '../models/email-request';

@Controller('mail')
export class MailController {
  constructor(private emailService: EmailService) {}

  @Post()
  sendEmail(@Body() emailRequest: EmailRequest): string {
    this.emailService.sendEmail(emailRequest);
    return '';
  }
}
