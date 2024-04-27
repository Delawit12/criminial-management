import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.SERVER_PORT || 8888;
export const HOST = process.env.SERVER_HOST || localhost;
export const JWT_SECRET = process.env.JWT_SECRET;
