import { Pool } from "pg";

const connectionDB = new Pool({
  user: "postgres",
  host: "localhost",
  database: "gamevault",
  password: "fernanda22",
  port: 5432,
});

connectionDB.connect();
export default connectionDB;
