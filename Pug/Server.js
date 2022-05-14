const express = require('express')
const routerProductos = require('./Routers/routerProductos')
const routerWeb = require('./Routers/routerWeb')


const app = express()
const PORT = 8080

app.set('view engine', 'pug')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/productos', routerProductos)
app.use('/', routerWeb)

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando el puerto: ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))