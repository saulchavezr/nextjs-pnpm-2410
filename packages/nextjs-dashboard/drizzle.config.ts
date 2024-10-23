import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { Resource } from "sst";

export default defineConfig({
  out: './drizzle',
  schema: './db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    host: Resource.NextjsDB.host,
    port: Resource.NextjsDB.port,
    database: Resource.NextjsDB.database,
    user: Resource.NextjsDB.username,
    password: Resource.NextjsDB.password,
    ssl: false
  },
});