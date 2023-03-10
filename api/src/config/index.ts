import dotenv from "dotenv";
import { Secret } from "jsonwebtoken";

export const PORT = process.env.PORT || 4000;
export const jwtSecret: Secret = process.env.JWT_SECRET || "lorem dipsum";
export const mail = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
  user: process.env.GOOGLE_USER,
};