let obj = {}

function random() {
    return Math.floor(Math.random() * 100) + 1;
}
for (let i = 0; i < 10; i++) {
    obj[i] = random()
}
console.log(obj)

function Iterable(object) {
    let index = 0
    return {
        next: function() {
            return index < Object.keys(obj).length ? {
                value: object[index++],
                done: false
            } : { done: true }
        }
    }
}

const even = Iterable(obj)
for (let i = 0; i < Object.keys(obj).length; i += 1) {
    if (i % 2 == 0) {
        console.log(even.next().value)
    } else {
        even.next()
    }
}
//print even numbers
console.log(" ")
const even2 = Iterable(obj)
let val
for (let i = 0; i < Object.keys(obj).length; i += 1) {
    val = even2.next().value
    if (val % 2 == 0) {
        console.log(val)
    }
}

/*for (let i = 0; i < Object.keys(obj).length; i += 2) {
    console.log(even.next()[i.toString])
}*/