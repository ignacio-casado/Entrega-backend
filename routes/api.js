const express = require('express')
const fs = require('fs')
const router = express.Router()


// json productos (prueba)
/* const pathToFile = './products.json'

class api{
    save = async (product)=>{
        // Validacion
        if(!product.tittle ) return{status: "error", message: "Missing files"}
    
        try{
            if(fs.existsSync(pathToFile)){
                fs.appendFile
                let leerData = await fs.promises.readFile(pathToFile, 'utf-8')
                let productos = JSON.parse(leerData)
                let id = productos[productos.length-1].id+1
                product.id = id
                productos.push(product)
                await fs.promises.writeFile(pathToFile, JSON.stringify(productos, null, 2))
                return{status: "success", message:"new product added"}
            }else{
                product.id = 1
                await fs.promises.writeFile(pathToFile, JSON.stringify([product], null, 2))
                return {status: "file created", message: "product added"}
            }
        }catch(err){
            return{status: "error", message: err.message}
    
        }
    }
    getById = async (id) =>{
        //Validacion
        if( !Number) return {status: "error", message: "ID not founded"}
       
            if(fs.existsSync(pathToFile)){
                let leerId = await fs.promises.readFile(pathToFile, 'utf-8')
                let productosId = JSON.parse(leerId)
                let buscar = productosId.find(product => product.id === id)
                if(buscar){
                    return {status: "sucess", message: buscar}
                }
                
            }else{
                return {status: "error", message: "ID not founded"}
            }

    }

}
 */

let productos = [
    {
        tittle: "Nike air max",
        price: 200,
        thumbnail: "https://essential.vtexassets.com/arquivos/ids/467758/316-0124_1.jpg?v=637672177702770000"
    },{
        tittle: "Nike air jordan",
        price: 330,
        thumbnail: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/953f8c77-48ab-4583-b040-c04a3a93ab32/fecha-de-lanzamiento-de-las-ajko-1-chicago.jpg"
    }
]

// GET Todos los productos
router.get('/productos', (req, res)=>{
    res.send({productos})
    
})


// GET Producto por ID
router.get('/productos/:id', (req, res)=>{
    let parametro = req.params.id
    res.send(parametro)
})

// POST
router.post('/', (req,res)=>{
    let prod = req.body.id
    //validacion
    if(!prod.tittle || !price || !thumbnail ) return{status: "error", message: "Missing files"}
    productos.push(prod)
    res.send({message: "ok", prod})
})

// PUT (duda)
router.put('/productos/:id', (req, res)=>{
    let parametroDos = req.params.id
    res.send(parametro)

})

// DELETE

router.delete('/productos/:id', ()=>{
    let parametroTres = req.params.id
    let borrar = parametroTres.slice(id)
    res.send({status: "complete product deleted", borrar})
})
module.exports = router