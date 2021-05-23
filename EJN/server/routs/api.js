const express = require('express');
const router = express.Router();
let urllib = require('urllib');

let dreamTeam = [];
const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}


router.get('/teams/:teamName', function(request, response) {
    let dataPlayers = []
    let playerData = {}
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
            if (player.teamId === teamToIDs[teamName] && player.isActive) {
                playerData.firstName = player.firstName;
                playerData.lastName = player.lastName;
                playerData.number = player.jersey;
                playerData.val = player.pos;
                dataPlayers.push(playerData);
                playerData = {};

            }
        }

        if (dataPlayers.length === 0) {
            response.send("there is no team " + teamName)
        } else {
            response.send(dataPlayers)
        }
    });

})


router.get('/playerStats/:player', function(request, response) {
    playerDataUrl = 'https://nba-players.herokuapp.com/players-stats/';
    let player = request.params.player
    namePlayer = player.split(",");
    namePlayer[1] = namePlayer[1].replace(/\s/g, '');

    url = playerDataUrl + namePlayer[1] + "/" + namePlayer[0]
    playerData = {}
    console.log("player   ", player);
    urllib.request(url, function(err, data, res) {
        if (err) {
            throw err; // you need to handle error
        }
        const buf = Buffer.from('Sorry, that player was not found. Please check the spelling.', 'utf8').toString('base64');
        if (data.toString('base64') !== buf) {
            mydata = JSON.parse(data)
            playerData.name = mydata.name;
            playerData.number = mydata.games_played;
            playerData.url = "";
            playerData.val = mydata.team_acronym;
            response.send(playerData);
        }

    });
})

router.get('/dreamTeam/', function(request, response) {
    let randTeam = 0;
    if (dreamTeam.length === 0) {
        urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function(err, data, res) {
            if (err) {
                throw err; // you need to handle error
            }

            myData = JSON.parse(data)
            myData = myData.league.standard;
            for (let i = 0; i < 5; i++) {
                let players = [];
                let playerData = {};
                randTeam = Math.floor(Math.random() * Object.keys(teamToIDs).length);
                for (let player of myData) {
                    if (player.teamId === teamToIDs[Object.keys(teamToIDs)[randTeam]] && player.isActive) {
                        playerData.firstName = player.firstName;
                        playerData.lastName = player.lastName;
                        playerData.number = player.jersey;
                        playerData.val = player.pos;
                        players.push(playerData);
                        playerData = {};

                    }
                }
                let playerNum = Math.floor(Math.random() * players.length);
                dreamTeam.push(players[playerNum]);
            }

        })
    }
    console.log(dreamTeam);
    response.send(dreamTeam);
})

router.post('/roster', function(req, res) {
    const player = req.body;
    dreamTeam.push(player);
    res.send(dreamTeam);
})

// router.put('/team/:teams', (req, res) => {
//     let newTeams = req.body;
//     for (let team in newTeams) {
//         teamToIDs[team] = newTeams[team];
//     }
//     res.end();
// })

module.exports = router;