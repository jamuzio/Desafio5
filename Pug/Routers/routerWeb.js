const express = require('express')
const contenedor = require('../class/Contenedor.js')

const Productos = new contenedor()

const routerWeb = express.Router()


routerWeb.get('/', async (req, res) => {
    const datos = []
    res.render('NewProduct', datos)
})

routerWeb.get('/productos', async (req, res) => {
    let AllProd = await Productos.getAll()
    const data = {
        AllProd,
        hayProductos: Boolean(AllProd.length > 0)
    }
    res.render('ProductsDisplay', data)
})

module.exports = routerWeb 