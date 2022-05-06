import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "44671363f8f4ea",
        pass: "1174f709fd8676"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: "Jotav Dev <contato@jotavdev.com>",
            to: "jvitornas95@gmail.com",
            subject,
            html: body
        });

    };
}