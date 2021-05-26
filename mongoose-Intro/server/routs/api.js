const express = require('express');
const router = express.Router();


const Person = require('./Person')


router.get('/people', function(req, res) {
    Person.find({}, function(err, people) {
        res.send(people)
    })
})

// Ex1
router.post('/person', function(request, response) {
    const person = request.body;
    const p = new Person({ firstName: person.firstName, lastName: person.lastName, age: person.age })
    p.save();
    response.send(p);

})

// Ex2
router.put('/person/:id', function(req, res) {

        Person.findByIdAndUpdate(req.params.id, { age: 80 }, { new: true }, function(err, person) {
            res.send(person);
        });

    })
    // Ex3
router.delete("/apocalypse", function(req, res) {
    Person.remove({}, function(err) {
        console.log("people removed");
        res.send("people removed")
    })
})
module.exports = router;