import mysql from "mysql"
import dotenv from "dotenv"
dotenv.config()
export const db = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    port: 3306
})

// host:"sql.freedb.tech",
// user:"freedb_bidesh_2001",
// password:"&!Cw7QA@4s4xm3m",
// database:"freedb_inventory_i"