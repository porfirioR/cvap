import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from 'src/mail/email.service';
import { EmailRequest } from '../models/email-request';

@Controller('mail')
export class MailController {
  constructor(private emailService: EmailService) {}

  @Post()
  async sendEmail(@Body() emailRequest: EmailRequest) {
    return await this.emailService.sendEmail(emailRequest);
  }
}
