people_info = [{
        name: "guido",
        profession: "bungalow builder",
        age: 17,
        country: "canaland",
        city: "sydurn",
        catchphrase: "what a piece of wood!"
    },
    {
        name: "petra",
        profession: "jet plane mechanic",
        age: 31,
        country: "greenmark",
        city: "bostork",
        catchphrase: "that's my engine, bub"
    },
    {
        name: "damian",
        profession: "nursery assistant",
        age: 72,
        country: "zimbia",
        city: "bekyo",
        catchphrase: "with great responsibility comes great power"
    }
]

const getSummary = function(person) {
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)} ` //Yes - you can put a function call inside the tick quotes!
    summary += profCap(person.profession) //call function for profession
    summary += conteryCity(person.country, person.city) //call function for country + city
    summary += " " + catchphrase(person.name, person.catchphrase) //call function for catchphrasereturn summary
    return summary
}

const capitalize = function(str) {
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
    capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr
    return capitalizedStr
}
const getAge = function(age) {
    if (age < 21) {
        return "underAge"
    } else if (age > 55) {
        return "55+"
    } else {
        return age + " year old"
    }
}
const profCap = function(profession) {
    let arrsplit = profession.split(" ")
    let str = ""
    for (let val of arrsplit) {
        str += capitalize(val) + " "
    }
    return str
}

const conteryCity = function(countery, city) {
    return "from " + capitalize(city) + ", " + capitalize(countery)
}

const catchphrase = function(name, pharse) {
    return capitalize(name) + " loves to say " + ' "' + pharse + '"'
}

for (let index in people_info) {
    console.log(getSummary(people_info[index]))
}