//IMPORT EXPRESS
const express = require('express')
const { Profiler } = require('react')

const app = express()

//PUERTO
const PORT = 8080
//
const manager = require('./index')
let prod = require('./products.json')
//SERVER
const server = app.listen(PORT, ()=>{
    console.log("server running")
})

//GET - RUTA RAIZ
app.get('/', (req, res)=>{
    //ruta raiz
    res.send(`<h1 style="color:blue">Bienvenidos al servidor express</h1>`)
})
 
//GET - RUTA PRODUCTOS
app.get('/productos', (req, res)=>{
    res.send(prod)
})

//GET - RUTA PRODUCTO RANDOM
app.get('/productoRandom', async (req, res)=>{
        
        res.send((prod)=>{
            return Math.random(prod)
        })   
})