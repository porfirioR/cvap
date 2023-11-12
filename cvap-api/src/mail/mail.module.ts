/* eslint-disable @typescript-eslint/no-unused-vars */
import { Global, Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { EmailService } from './email.service';

@Global()
@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async () => ({
        transport: {
          host: 'smtp-relay.brevo.com',
          port: 587,
          ignoreTLS: true,
          secure: false,
          auth: {
            user: '',
            pass: '',
          },
        },
        defaults: {
          from: '',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [EmailService],
  exports: [EmailService],
})
export class MailModule {}
