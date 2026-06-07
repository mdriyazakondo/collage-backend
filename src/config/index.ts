import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const config = {
  DATA_BASE_UIR: process.env.DATA_BASE_UIR,
  PORT: process.env.PORT,
};
