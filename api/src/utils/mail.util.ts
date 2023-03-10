import nodemailer from "nodemailer";
import { google } from "googleapis";
import { mail } from "../config";
import { IMailArg } from "../types";

const redirectURL = "https://developers.google.com/oauthplayground";
const OAuth2Client = new google.auth.OAuth2(
  mail.clientId,
  mail.clientSecret,
  redirectURL
);

export const sendMail = async ({ to, subject, html }: IMailArg) => {
  const accessToken = await OAuth2Client.getAccessToken();

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: "OAuth2",
        user: mail.user,
        clientId: mail.clientId,
        clientSecret: mail.clientSecret,
        refreshToken: mail.refreshToken,
        accessToken: accessToken.token
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


