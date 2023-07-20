const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Simara Conceição',
        imagem: 'https://simaraconceicao.com/wp-content/uploads/2021/05/WhatsApp-Image-2021-03-09-at-15.56.22-1200x826.jpeg',
        minibio: 'Desenvolvedora e intrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://www.mmaglobal.com/files/styles/speaker/public/speakers/iana_chan.jpg?itok=vDkDgEoN',
        minibio:'Fundadora da Programaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://www.fundacaotelefonicavivo.org.br/wp-content/uploads/2022/11/10-ninadahora1200x628desktop.png?x31273',
        minibio: 'Hacker antirracista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
} 

app.use(router.get('/mulheres', mostraMulheres) )
app.listen(porta, mostraPorta)