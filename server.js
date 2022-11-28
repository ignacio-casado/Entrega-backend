//Extension VSC node-snippets v1.3.3


//IMPORT EXPRESS
const express = require('express')
/* const { Profiler } = require('react') */
const productsRouter = require('./routes/api')
const productsRouterDos = require('./routes/api/productos')

const app = express()

//PUERTO
const port  = 3000


app.set('port', process.env.PORT || port)
//SERVER
const server = app.listen(port, ()=>{
    console.log("server online http://localhost:" + app.get("port"))
})
// app.use
app.use(express.json())
app.use('/api', productsRouter)
app.use('/productos', productsRouterDos) 

