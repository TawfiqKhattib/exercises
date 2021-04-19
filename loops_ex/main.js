let names = ["a", "b", "c", "d"]
let ages = ["11", "22", "24", "54"]
for (let i in names) {
    console.log(names[i] + " is " + ages[i] + " year old")
}

//ex2
let sum = 0
let nums = [3, 44, 32, 13, 6, 12]
for (let number of nums) {
    sum += number
}
console.log(sum)
    //ex3
console.log(sum / nums.length)

//ex4
let num = []
for (let i = 1; i <= 100; i += 1) {
    num.push(i)
}
console.log(num)
    //ex5
for (let i of num) {
    if (!(i % 2 === 0)) {
        console.log(i)
    }
}

//ex6
console.log("")
let nums2 = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
for (let index in nums2) {
    if (nums2[index] === 709) {
        console.log(index)
    }
}

//ex7

const allNames = ["Ashley", "Donovan", "Lucas"]
const allAges = [23, 47, 18]

const people = []
for (let index in allNames) {
    people.push({ name: allNames[index], age: allAges[index] })
}
console.log(people)

//ex8
for (let humen of people) {
    console.log(humen.name + " is " + humen.age + " years old")
}

//ex9
const posts = [
    { id: 1, text: "Love this product" },
    { id: 2, text: "This is the worst. DON'T BUY!" },
    { id: 3, text: "So glad I found this. Bought four already!" }
]

for (let index in posts) {
    if (posts[index].id === 2) {
        posts.splice(index, 1)
    }
}
console.log(posts)

//ex10
const postsNew = [{
        id: 1,
        text: "Love this product",
        comments: []
    },
    {
        id: 2,
        text: "This is the worst. DON'T BUY!",
        comments: [
            { id: 1, text: "Idiot has no idea" },
            { id: 2, text: "Fool!" },
            { id: 3, text: "I agree!" }
        ]
    },
    {
        id: 3,
        text: "So glad I found this. Bought four already!",
        comments: []
    }
]

for (let node of postsNew) {
    if (node.comments.length != 0) {
        for (let lstnode in node.comments) {
            if (node.comments[lstnode].id === 3) {
                node.comments.splice(node.comments[lstnode], 1)
            }
        }
    }
}
console.log(postsNew)