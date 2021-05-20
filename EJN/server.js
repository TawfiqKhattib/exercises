const express = require('express')
const path = require('path')
var urllib = require('urllib');

const app = express()
const port = 3005
app.listen(port, function() {
    console.log(`Running server on port ${port}`)
})

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}
let dataPlayers = []
let playerData = {}

app.get('/teams/:teamName', function(request, response) {
    dataPlayers = []
    playerData = {}
    let teamName = request.params.teamName
    urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function(err, data, res) {
        if (err) {
            throw err; // you need to handle error
        }
        myData = JSON.parse(data)
        myData = myData.league.standard
        for (let player of myData) {
            if (player.teamId === teamToIDs[teamName]) {
                if (player.isActive) {
                    playerData.name = player.temporaryDisplayName;
                    playerData.number = player.jersey;
                    playerData.url = "";
                    playerData.val = player.pos;
                    dataPlayers.push(playerData);
                    playerData = {};
                }
            }
        }

        if (dataPlayers.length === 0) {
            response.send("there is no team " + teamName)
        } else {
            response.send(dataPlayers)
        }
    });

})


app.get('/playerStats/:player', function(request, response) {
    playerDataUrl = 'https://nba-players.herokuapp.com/players-stats/';
    let player = request.params.player
    namePlayer = player.split(",");
    namePlayer[1] = namePlayer[1].replace(/\s/g, '');

    url = playerDataUrl + namePlayer[0] + "/" + namePlayer[1]
    playerData = {}
    console.log("player   ", player);
    urllib.request(url, function(err, data, res) {
        if (err) {
            throw err; // you need to handle error
        }

        mydata = JSON.parse(data)
        playerData.name = mydata.name;
        playerData.number = mydata.games_played;
        playerData.url = "";
        playerData.val = mydata.team_acronym;
        response.send(playerData);

    });
})

// // Ex2+3

// const store = [
//     { name: "table", inventory: 3, price: 800 },
//     { name: "chair", inventory: 16, price: 120 },
//     { name: "couch", inventory: 1, price: 1200 },
//     { name: "picture frame", inventory: 31, price: 70 }
// ]





// app.get('/priceCheck/:name', function(request, response) {
//     let name = request.params.name
//     let cnt = 0
//     for (let item of store) {
//         if (item.name === name) {
//             response.send(item)
//             break;
//         }
//         cnt += 1
//     }
//     if (cnt === store.length) {
//         response.send({ name: name, price: "null" })
//     }

// })

// // Ex4+5
// app.get('/buy/:name', function(req, res) {
//     let name = req.params.name
//     let cnt = 0
//     for (let item of store) {
//         if (item.name === name) {
//             item.inventory -= 1
//             res.send(item)
//             break;
//         }
//         cnt += 1
//     }
//     if (cnt === store.length) {
//         res.send({ name: name, inventory: 0, price: "null" })
//     }
// })

// // extension


// // app.get('/priceCheck1/:item', function(req, res) {
// //     let item = req.params.item

// //     if (item.price <= money) {
// //         item.inventory -= 1
// //         money -= item.price
// //         newHTMLqoute = templateqoute({ money: money });
// //         $("#mony").append(newHTMLqoute)
// //         res.send(item)
// //     } else {
// //         res.send("there is not enough money")
// //     }

// // })


// // Ex6
// app.get('/sale', function(req, res) {
//     let admin = req.query.admin
//     if (admin === 'true') {
//         for (let item of store) {
//             if (item.inventory > 10) {
//                 item.price /= 2
//             }
//         }

//     }
//     res.send(store)
// })





// // const data = {
// //     8112: {
// //         title: "Name of the Wind",
// //         author: "Patrick Rothfuss"
// //     },
// //     9121: {
// //         title: "The Catcher in the Rye",
// //         author: "J.D. Salinger"
// //     },
// //     1081: {
// //         title: "The Giver",
// //         author: "Lois Lowry"
// //     }
// // }

// // app.use(express.static(path.join(__dirname, 'dist')))
// // app.use(express.static(path.join(__dirname, 'node_modules')))

// // app.listen(port, function() {
// //     console.log(`Running server on port ${port}`)
// // })

// // app.get('/books/:bookID', function(request, response) {
// //     let bookID = request.params.bookID
// //     response.send(data[bookID])
// // })



// // const http = require('http')

// // const server = http.createServer(function(request, response) {
// //     response.writeHead(200, { 'Content-Type': 'text/plain' })
// //     response.write('Hello, I am Tawfiq')
// //     response.end();
// // })

// // const port = 3000
// // server.listen(port, function() {
// //     console.log(`Node server created at port ${port}`)
// // })