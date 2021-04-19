function calcAge(currentYear, birthYear) {
    if (birthYear > currentYear) {
        console.log("you'r data that insert incorrect")
    } else {
        return currentYear - birthYear
    }
}
const age = calcAge(2017, 1989)
console.log(age)

//ex2
function appage(currentYear, birthYear) {
    if (birthYear > currentYear) {
        console.log("you'r data that insert incorrect")
    } else {
        return [currentYear - birthYear - 1, currentYear - birthYear]
    }
}

const theAge = appage(2018, 2015)
console.log("you are either " + theAge[0] + " or " + theAge[1])

//ex3
function isEven(number) {
    return number % 2 === 0
}
let even = isEven(6)
console.log(even)