const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Luana Rosa',
        imagem: 'https://img.freepik.com/vetores-gratis/amigas_1450-182.jpg?w=740&t=st=1689700937~exp=1689701537~hmac=612d0ce1b28d858ccd57a60d7bb595c4eda4a1cf57a9ba6ce39a0c11419f44cf',
        minibio: 'Desenvolvedora e estudante'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
} 

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)