//Extension VSC node-snippets v1.3.3


//IMPORT EXPRESS
const express = require('express')
const { Profiler } = require('react')
const productsRouter = require('./routes/api')

const app = express()

//PUERTO
const port  = 3000

//
/* const api  = require('./routes/api')
const apiNew = new api()
 */
app.set('port', process.env.PORT || port)
//SERVER
const server = app.listen(port, ()=>{
    console.log("server http://localhost:" + app.get("port"))
})
// app.use
app.use(express.json())
app.use('/api', productsRouter)

/* 
let product = {
    tittle: "Nike air for",
    price: 234,
    thumbnail: 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwe4606d11/products/NI_DC9437-100/NI_DC9437-100-1.JPG'

}
 */
// apiNew.save(product).then(result => console.log(result))
// apiNew.getById(1).then(result => console.log(result)) 




//GET - RUTA RAIZ
/* app.get('/', (req, res)=>{
    //ruta raiz
    res.send(`<h1 style="color:blue">Bienvenidos al servidor express</h1>`)
}) */
 
//GET - RUTA PRODUCTOS
/* app.get("/productos", async (req, res) => {
    const getProducts = await manager.getAll()
    const showProductsOnly = getProducts.message
    return res.send(showProductsOnly);
}); */

//GET - RUTA PRODUCTO RANDOM
/* app.get('/productoRandom', async (req, res)=>{
        prod.id
        res.send(()=>{
            return Math.random(id)
        })   
}) */