import dotenv from "dotenv"
import pg from "pg"

dotenv.config()

const {Poll} = pg

const configDatabase = {
    connectionString: process.env.DATABASE_URL,
}

if(process.env.NODE_ENV === "production") configDatabase.ssl = true;

export const db = new Poll(configDatabase)