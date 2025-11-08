import mysql from 'mysql2/promise.js'

 const pool = mysql.createPool({
   host: process.env.HOST,
   user: process.env.USER,
   password: process.env.DATABASE,
 })

 export default pool;