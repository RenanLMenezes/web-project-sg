import conexao from "./conexao.js"

async function Catalogar(codigo, nome, marca, preco, imagem) {

    const consulta = "INSERT INTO produtos VALUES($1, $2, $3, $4::DECIMAL, $5);"

    const resultado = conexao.query(consulta, [ codigo, nome, marca, preco, imagem ])

    return resultado
}

async function Listar() {

    const consulta = "SELECT * FROM produtos;"

    const resultado = conexao.query(consulta)

    return resultado
}

export default { Catalogar, Listar }