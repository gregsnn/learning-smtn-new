const porta = 1337

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDados = require('./dataBase')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDados.getProd(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const prod = bancoDados.saveProd({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(prod) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const prod = bancoDados.saveProd({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(prod) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const prod = bancoDados.delProdutos(req.params.id)
    res.send(prod) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})