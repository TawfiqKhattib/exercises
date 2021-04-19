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
let even = isEven(5)
console.log(even)

//ex4
function printOdd(arrNum) {
    for (let num of arrNum) {
        if (!isEven(num)) {
            console.log(num)
        }
    }
}
let arrNum = [3, 5, 4, 1, 6, 8, 12, 11]
printOdd(arrNum)

//ex5

function checkExist(arrNum, num) {
    for (let number of arrNum) {
        if (number === num) {
            return true;
        }
    }
    return false
}
let array = [1, 2, 3, 4]
let isExist = checkExist(array, 5)
console.log(isExist)

//ex6
let calculator = {
    add: function(fNum, sNum) {
        return fNum + sNum
    },
    subtract: function(fNum, sNum) {
        return fNum - sNum
    }
}
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

//ex7
function increaseByNameLength(money, name) {
    return money * (name.length)
}

function makeRegal(name) {
    return "His Royal Highness, " + name
}
const turnToKing = function(name, money) {
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"