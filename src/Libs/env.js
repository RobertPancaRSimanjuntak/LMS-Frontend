import dotenv from "dotenv";
dotenv.config({
  path: ".env.local",
});

export const { API_URL } = process.env;