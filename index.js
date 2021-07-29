
const Items = require("./class/items");
const express = require('express');
const { prototype } = require("./class/items");
const app = express()
var items = [
    { nombre: "Arroz", ingredientes: "huevo pan queso", precio: 125 },
    { nombre: "Fideo", ingredientes: "huevo queso", precio: 70 },
    { nombre: "Pan", ingredientes: "pan queso", precio: 50 },
    { nombre: "Flan", ingredientes: "queso", precio: 100 }
];

var refItems = new Items(items);

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/items', function (req, res) {
    res.send(refItems.items)
})
app.get('/byname', function (req, res) {
    res.send(refItems.findByName(req.query.val))
})

console.log("Escuchando en el puerto 3000")
app.listen(3000)

/* Items.prototype.exclamar = function () {
    dfgsdftysdr
    return this + "!"
}
console.log("Hola".exclamar()) */