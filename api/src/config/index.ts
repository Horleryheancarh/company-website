import dotenv from "dotenv";
import { Secret } from "jsonwebtoken";

export const PORT = process.env.PORT || 4000;
export const jwtSecret: Secret = process.env.JWT_SECRET || "lorem dipsum";
