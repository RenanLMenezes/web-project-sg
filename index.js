import express from "express"
import routes from "./routes/routes.js"

const app = express()

app.set("view engine", "pug")
app.set("views", "./views")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"))

app.use(routes)

app.listen(3000, function() {
    console.log("SERVIDOR NO AR | http://localhost:3000/")
})