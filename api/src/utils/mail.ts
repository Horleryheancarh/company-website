import nodemailer from "nodemailer";
import { google } from "googleapis";
import { mail } from "../config";
import { IMailArg } from "../types";

const OAuth2Client = new google.auth.OAuth2(
  mail.clientId,
  mail.clientSecret,
  mail.redirectUrl
);
const accessToken = await OAuth2Client.getAccessToken();

export const sendMail = async ({ to, subject, html }: IMailArg) => {
  try {
    console.log(accessToken);
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: "OAuth2",
        user: mail.user,
        clientId: mail.clientId,
        clientSecret: mail.clientSecret,
        refreshToken: mail.refreshToken,
        accessToken
      },
    });

    return transporter.sendMail({
      from: 'admin@web.com',
      to,
      subject,
      html,
    });
  } catch (error) {
    console.log(error);
  }
}

export const contact = async ( subject: string, data: object ) => {
  
}
