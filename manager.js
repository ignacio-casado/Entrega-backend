const fs = require('fs')

//armar esquema
/* product = {
    tittle: string (require)
    price: number
    thumbnail: string
    id: number (require)

} */

const pathToFile = './products.txt'

class manager {
    

    //agregar productos al json

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

    //traer por ID

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

    //Traer todos los productos

    getAll = async () =>{
        if(fs.existsSync(pathToFile)){
            let leerData = await fs.promises.readFile(pathToFile, 'utf-8')
            let productos = JSON.parse(leerData)
            return {status: "sucess", message: productos}
        }else{
            return {status: "error", message: err.message }
        }
    }
    
    //Eliminar por ID

    deleteById = async (id) =>{
        if( !Number) return {status: "error", message: "ID not founded"}
       
        if(fs.existsSync(pathToFile)){
            let leerId = await fs.promises.readFile(pathToFile, 'utf-8')
            let productosId = JSON.parse(leerId)
            let buscar = productosId.find(product => product.id === id)
            if(buscar){
               borrarId = await fs.promises.unlink(pathToFile)
               return{status: "success", message: productos}

            } else{
                return {status: "error", message: "ID not founded"}
            }
        }       
    }

    // Borrar todos
    deleteAll = async () =>{
        if(fs.existsSync(pathToFile)){
            let deletes = await fs.promises.unlink(pathToFile)
            //return deletes
            if(deletes){
                return  {status: "success", message: "file deleted"}
            }
            
        }else{
            return {status: "error", message: "already empty"}
        }
    }
}


module.exports = manager
 