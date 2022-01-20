import pg from "pg";
import * as config from "../config.js";

//connection string comes from heroku. Environment variable DATABASE_URL
const pool = new pg.Pool({
  connectionString: config.url,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}
