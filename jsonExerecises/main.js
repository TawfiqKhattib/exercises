const fs = require('fs');

let obj = {
    table: []
};

const addDataToingredientsJson = function() {
    fs.readFile('example.json', function readFileCallback(err, data) {

        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data);
            obj.ingredients.push({
                "name": "garlic powder",
                "count": 2,
                "unit": "teaspoons"
            });
            obj.calories = "This contains 250 calories";
            obj.healthy = "It is a healthy meal";
            obj.directions.unshift("Cut potatoes into half inch thick slices");

            let json = JSON.stringify(obj);
            fs.writeFile("example.json", json, function(err) {
                if (err) throw err;
                console.log('complete');
                console.log(obj.ingredients.filter(i => i.name == "garlic powder")[0].count) //should print 2
                console.log(obj.healthy) //should print true
                console.log(obj.calories) //should print 250
                console.log(obj.directions[0])
            });

        }
    });
}
addDataToingredientsJson();
// obj = {}
// const addDataToJson = function() {
//     fs.readFile('example.json', function readFileCallback(err, data) {

//         if (err) {
//             console.log(err);
//         } else {
//             obj = JSON.parse(data);
//             obj.potatoes = "This contains 250 calories";
//             obj.vegetables = "It is a healthy meal";
//             obj.directions.unshift("Cut potatoes into half inch thick slices");

//             let json = JSON.stringify(obj);
//             fs.writeFile("example.json", json, function(err) {
//                 if (err) throw err;
//                 console.log('complete');

//                 console.log(obj.ingredients.filter(i => i.name == "garlic powder")[0].count) //should print 2
//                 console.log(obj.healthy) //should print true
//                 console.log(obj.calories) //should print 250
//                 console.log(obj.directions[0])
//             });

//         }
//     });
// }

// addDataToJson();
// let recipe = "sC:/Users/Win10/Desktop/BootCamp/example.json" //YOUR JSON HERE

// console.log(recipe.ingredients.filter(i => i.name == "garlic powder")[0].count) //should print 2
// console.log(recipe.healthy) //should print true
// console.log(recipe.calories) //should print 250
// console.log(recipe.directions[0]) //should print "Cut potatoes into half inch thick slices"