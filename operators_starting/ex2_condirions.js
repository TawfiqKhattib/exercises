// ex1
let numChildren = prompt("children numbers?")
numChildren = parseInt(numChildren)
let isCareful = false
if (!isCareful) {
    numChildren += 1
}
console.log(numChildren)

//ex2 
let silverwareCount = 3
if (silverwareCount % 2 === 0) {
    console.log("all right")
} else {
    console.log("there is something missing")
}

//ex3 
let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000
if (performance === "stellar") {
    salary += stellarBonus
} else {
    salary += goodBonus
}

//ex4
const isVIP = false
let cash = 500
if (isVIP || cash > 300) {
    console.log("you can enter the club")
} else {
    console.log("you can not enter")
}

//ex5 
const a = 3
let b = 2
let c = 0 || 12
let d

b = c
b++
if (d) {
    b = a
}

d = a + (b * c)
d++
b += 2
console.log(a)
console.log(b)
console.log(c)

//ex6
const gender = null
let profession = "business"
if (gender === null) {
    profession += "person"
} else if (gender === "male") {
    profession += "man"
} else {
    profession += "woman"
}
console.log(profession)

//ex7
let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if (boughtTesla && isUSCitizen) {
    console.log(yearOfTeslaPurchase)
}
if ((currentYear - yearOfTeslaPurchase) >= 4) {
    let upraged = prompt("would you like to upraged?")
} else {
    let stay = prompt("are you satisfied with the car?")
}

if (!isUSCitizen && boughtTesla) {
    let move = prompt("would you like to move to us??")
}
if (!boughtTesla) {
    let want = prompt("are you interested to buying it??")
}