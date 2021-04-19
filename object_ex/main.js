//ex1
let p1 = {
    name: "first",
    age: 22,
    city: "ghajar"
}
let p2 = {
    name: "second",
    age: 22,
    city: "kryat shemona"
}

if (p1.age === p2.age) {
    console.log("woww!!")
}

if (p1.city === p2.city) {
    console.log("Jill wanted to date Robert")
} else {
    console.log("Jill wanted to date Robert, but couldn")
}

//ex2

let myList = [{ car: "mazda", color: "red" }, { car: "nissan", color: "blue" }]
console.log("car " + myList[0].car + "  " + "color " + myList[0].color)
myList.splice(1)
console.log(myList)

//ex3
let newList = [{ car: "mitzbishi", color: "yellow" }, { car: "nissan", color: "black" }]
myList.push(...newList)
console.log(myList)

//ex4
let library = {
    books: [{ title: "book1", auther: "auther1" }, { title: "book2", auther: "auther2" }, { title: "book3", auther: "auther3" }]
}

//ex5