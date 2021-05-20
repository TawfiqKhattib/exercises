const express = require('express')
const path = require('path')
var router = express.Router();

const app = express()
const port = 3000
app.listen(port, function() {
    console.log(`Running server on port ${port}`)
})

// Ex1
app.get('/simple', function(request, response) {
    response.send("Server is up and running smoothly")
})

// Ex2+3

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))



app.get('/priceCheck/:name', function(request, response) {
    let name = request.params.name
    let cnt = 0
    for (let item of store) {
        if (item.name === name) {
            response.send(item)
            break;
        }
        cnt += 1
    }
    if (cnt === store.length) {
        response.send({ name: name, price: "null" })
    }

})

// Ex4+5
app.get('/buy/:name', function(req, res) {
    let name = req.params.name
    let cnt = 0
    for (let item of store) {
        if (item.name === name) {
            item.inventory -= 1
            res.send(item)
            break;
        }
        cnt += 1
    }
    if (cnt === store.length) {
        res.send({ name: name, inventory: 0, price: "null" })
    }
})

// extension


app.get('/priceCheck1/:item/:money', function(req, res) {
    let money = req.params.money
    let name = req.params.item
    for (let item of store) {
        if (item.name === name) {
            if (item.price <= parseInt(money)) {
                res.send(true)
            } else {
                res.send("there is not enough money")
            }
            break;
        }
    }

})


// Ex6
app.get('/sale', function(req, res) {
    let admin = req.query.admin
    if (admin === 'true') {
        for (let item of store) {
            if (item.inventory > 10) {
                item.price /= 2
            }
        }

    }
    res.send(store)
})





// const data = {
//     8112: {
//         title: "Name of the Wind",
//         author: "Patrick Rothfuss"
//     },
//     9121: {
//         title: "The Catcher in the Rye",
//         author: "J.D. Salinger"
//     },
//     1081: {
//         title: "The Giver",
//         author: "Lois Lowry"
//     }
// }

// app.use(express.static(path.join(__dirname, 'dist')))
// app.use(express.static(path.join(__dirname, 'node_modules')))

// app.listen(port, function() {
//     console.log(`Running server on port ${port}`)
// })

// app.get('/books/:bookID', function(request, response) {
//     let bookID = request.params.bookID
//     response.send(data[bookID])
// })



// const http = require('http')

// const server = http.createServer(function(request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' })
//     response.write('Hello, I am Tawfiq')
//     response.end();
// })

// const port = 3000
// server.listen(port, function() {
//     console.log(`Node server created at port ${port}`)
// })