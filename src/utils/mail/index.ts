import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: process.env.USER_MAIL,
        pass: process.env.PASS_MAIL
    }
});

export interface SendMailProps {
    to: string;
    subject: string;
    text?: string;
    html: string;
}

function sendMail(props: SendMailProps): Promise<SMTPTransport.SentMessageInfo> {
   
    return transporter.sendMail({
        from: 'Tabnews <franklinteixeira205@gmail.com>',
        ...props,
    });
}

const mail = {
    sendMail,
};

export default mail;