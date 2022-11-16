const api  = require('./routes/api')
const apiNew = new api()

let product = {
    tittle: "Nike air forcee",
    price: 234,
    thumbnail: 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwe4606d11/products/NI_DC9437-100/NI_DC9437-100-1.JPG'

}

//apiNew.save(product).then(result => console.log(result))

// managerNew.getById(1).then(result => console.log(result)) 

// managerNew.getAll().then(result => console.log(result))

// managerNew.deleteById(1).then(result => console.log(result)) 

// managerNew.deleteAll().then(result =>console.log(result)) 
module.exports = index