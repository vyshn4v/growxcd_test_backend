import "dotenv/config";
export const NODE_SERVER_PORT: string | undefined =
  process.env.NODE_SERVER_PORT;
export const DB_HOST: string | undefined = process.env.DB_HOST;
export const DB_USER: string | undefined = process.env.DB_USER;
export const DB_NAME: string | undefined = process.env.DB_NAME;
export const DB_PASSWORD: string | undefined = process.env.DB_PASSWORD;
export const DB_PORT: number | undefined = Number(process.env.DB_PORT);

