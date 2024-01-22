import mysql from "mysql";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "./Variables";

const database = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

database.connect((err) => {
  if (err) throw err;
  console.log("db connection succeeded");
});

export default database;
