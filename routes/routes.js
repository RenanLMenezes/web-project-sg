import express from "express"
import { v4 as uuidv4 } from "uuid"
import produtos from "../database/produtos.js"

const router = express.Router()

// ROTAS GET
router.get("/", function(req, res) {

    produtos.Listar().then(function(resultados) {

        console.log(resultados.rows)

        res.render("index.pug", { prod: resultados.rows })

    })
})

router.get("/excluir/:codigo", function(req, res) {
    produtos.Excluir(req.params.codigo)
    res.redirect("back")
})

router.get("/produto/:codigo", function(req, res) {

    produtos.Procurar(req.params.codigo)
    .then(function(resultado) {
        res.render("produto.pug", { produto: resultado.rows[0]})
    })

    
})

router.get("/catalogar", function(req, res) {
    res.render("catalogar.pug")
})

//ROTAS POST
router.post("/produto", function(req, res) {

    console.log(req.body)

    produtos.Catalogar(
        uuidv4(),
        req.body.nome,
        req.body.marca,
        parseFloat(req.body.preco),
        req.body.imagem
    )
        .then(function(resultado) {
            console.log(resultado)
        })

    res.redirect("/catalogar")
})

export default router