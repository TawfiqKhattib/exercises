const story = "In the beginning there was light. Then there were wolves.Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}

const wordsCnt = function(wordCounts, specialChars, story) {
    let array = []
    array = removeSpecial(specialChars, story)
    for (let val of array) {
        countWord(wordCounts, val)
    }
    console.log(wordCounts)
}

const removeSpecial = function(specialChars, story) {
    let arr = []
    arr = story.split(" ")
    for (let val of specialChars) {
        arr = arr.toString().split(val).join(" ")
    }
    arr = arr.split(" ")
    return arr
}

const countWord = function(wordCounts, word) {
    if (wordCounts.hasOwnProperty(word)) {
        wordCounts[word] += 1
    } else {
        wordCounts[word] = 1
    }

}
wordsCnt(wordCounts, specialChars, story)