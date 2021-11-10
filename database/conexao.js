import pg from "pg"

const conexao = new pg.Client({
    host: "localhost",
    user: "postgres",
    password: "admin",
    database: "projectweb",
    port: 5432
})

conexao.connect()

export default conexao