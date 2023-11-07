/* eslint-disable @typescript-eslint/no-unused-vars */
import { Global, Module } from '@nestjs/common';
import { EmailService } from './email.service';

@Global()
@Module({
  imports: [
    // MailerModule.forRootAsync({
    //   imports: [ConfigModule], // import module if not enabled globally
    //   useFactory: async (config: ConfigService) => ({
    //     // transport: config.get("MAIL_TRANSPORT"),
    //     // or
    //     transport: {
    //       host: config.get('MAIL_HOST'),
    //       port: config.get('PORT'),
    //       ignoreTLS: true,
    //       secure: true,
    //       auth: {
    //         user: config.get('MAIL_USER'),
    //         pass: config.get('MAIL_PASSWORD'),
    //       },
    //     },
    //     defaults: {
    //       from: `"No Reply" <${config.get('MAIL_FROM')}>`,
    //     },
    //     template: {
    //       dir: join(__dirname, 'templates'),
    //       adapter: new HandlebarsAdapter(),
    //       options: {
    //         strict: true,
    //       },
    //     },
    //   }),
    //   inject: [ConfigService],
    // }),
  ],
  providers: [EmailService],
  exports: [EmailService],
})
export class MailModule {}
