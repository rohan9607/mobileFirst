import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class EmailService {
    constructor(private mailerService: MailerService) {}

  async sendEmail(to: string, subject : string, data: any, template_key : string) {
    try {
      const result = await this.mailerService.sendMail({
        to: to,
        //from: '"Support Team" <support@example.com>', // override default from
        subject: subject,
        template: `../src/templates/${template_key}`, // `.hbs` extension is appended automatically
        context: data
      });
      // console.log("result: ", result)
      return {
        status: true,
        message: "Email sent successfully"
      }
    } catch(error) {
      console.error('Error sending email:', error);
    }
    
  }

}