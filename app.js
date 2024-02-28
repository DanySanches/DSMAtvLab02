const express = require('express')
const app = express()

app.listen(8081, function(){
    console.log("Servidor On!")
})

app.get("/contato", function(req, res){
    res.send("Página de Contato")
})

app.get("/cadastrar/:usuario", function(req,res){
    res.send("Seja bem-vindo(a): "  + req.params.usuario + "!")
})

app.get("/produtos/:automovel/:marca/:modelo/:ano", function(req,res){
    res.send("Automovel: " + req.params.automovel+ " Marca: " +req.params.marca + " Modelo: "
    + req.params.modelo + " Ano: " + req.params.ano)
})

