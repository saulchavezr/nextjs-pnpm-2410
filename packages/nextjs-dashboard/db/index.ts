import { Resource } from "sst";

import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle({ 
  connection: { 
    host: Resource.NextjsDB.host,
    port: Resource.NextjsDB.port,
    database: Resource.NextjsDB.database,
    user: Resource.NextjsDB.username,
    password: Resource.NextjsDB.password,
  }
});
