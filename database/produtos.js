import conexao from "./conexao.js"

async function Catalogar(codigo, nome, marca, preco, imagem) {

    const comando = "INSERT INTO produtos VALUES($1, $2, $3, $4::DECIMAL, $5);"

    const resultado = conexao.query(comando, [ codigo, nome, marca, preco, imagem ])

    return resultado
}

async function Listar() {

    const comando = "SELECT * FROM produtos;"

    const resultado = conexao.query(comando)

    return resultado
}

async function Procurar(codigo){
    const comando = "SELECT * FROM produtos WHERE codigo = $1;"

    const resultado = conexao.query(comando, [codigo])

    return resultado
}

async function Excluir(codigo){
    const comando = "DELETE FROM produtos WHERE codigo = $1"
    const resultado = conexao.query(comando, [ codigo ])
    return resultado
}

async function AtualizarNome(codigo, novoNome){
    const comando = "UPDATE produtos SET nome = $1 WHERE codigo = $2"
    const resultado = conexao.query(comando, [ novoNome, codigo ])
    return resultado
}

async function AtualizarPrecoImagem(codigo, novoPreco, novoImagem){
    const comando = "UPDATE produtos SET preco = $1, imagem = $2 WHERE codigo = $3"
    const resultado = conexao.query(comando, [ novoPreco, novoImagem, codigo ])
    return resultado
}

export default { Catalogar, Listar, Excluir, Procurar, AtualizarNome }