import mysql from "mysql2/promise"

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "tarrafal",
    database: "servidor_local"
})

export default db