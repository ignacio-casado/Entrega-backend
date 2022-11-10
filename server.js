//IMPORT EXPRESS
const express = require('express')
const { Profiler } = require('react')

const app = express()

//PUERTO
const PORT = 8080

//
const Manager = require("./manager");
const manager = new Manager()


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
app.get("/productos", async (req, res) => {
    const getProducts = await manager.getAll()
    const showProductsOnly = getProducts.message
    return res.send(showProductsOnly);
});

//GET - RUTA PRODUCTO RANDOM
app.get('/productoRandom', async (req, res)=>{
        prod.id
        res.send(()=>{
            return Math.random(id)
        })   
})