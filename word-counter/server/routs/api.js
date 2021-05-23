const express = require('express');
const router = express.Router();
var validator = require('validator');

const wordCounter = {}

router.get('/sanity', function(req, res) {
    res.send("Server up and running!!");
})

router.get('/word/:word', function(req, res) {
    const word = req.params.word;
    if (word in wordCounter) {
        res.send({ count: wordCounter[word] });
    } else {
        res.send({ count: 0 });
    }

})

router.get('/total', function(req, res) {
    let totalCnt = 0;
    for (let value of Object.values(wordCounter)) {
        totalCnt += value;
    }
    res.send({ text: "Tota count", count: totalCnt })
})
router.get('/popular', function(req, res) {
    let bigCnt = 0;
    let name = "";
    for (let key of Object.keys(wordCounter)) {
        if (wordCounter[key] >= bigCnt) {
            bigCnt = wordCounter[key];
            name = key;
        }
    }
    res.send({ text: name, count: bigCnt })
})

router.post('/word', function(req, res) {
    let word = req.body;
    var matcher = /[a-zA-Z]+/gi;
    word = word.name.match(matcher);
    word = word.join('');
    word = word.toLowerCase();
    if (wordCounter[word] != null) {
        wordCounter[word] += 1;
    } else {
        wordCounter[word] = 1;
    }
    res.send({ text: `Add ${word}`, currentCount: wordCounter[word] })
})

router.post('/words', function(req, res) {
    const words = req.body;
    existCnt = 0;
    newCnt = 0;

    const wordArr = words.name.split(' ');
    for (let word of wordArr) {
        var matcher = /[a-zA-z]+/gi;
        word = word.match(matcher);
        word = word.join('');
        word = word.toLowerCase();
        if (word in wordCounter) {
            wordCounter[word] += 1;
            existCnt = +1;
        } else {
            wordCounter[word] = 1
            newCnt += 1;
        }
    }
    res.send({ text: `Add ${newCnt} words, ${existCnt} already exist`, currentCount: (existCnt + newCnt) })
})

module.exports = router;