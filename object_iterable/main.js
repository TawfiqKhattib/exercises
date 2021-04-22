let obj = {

    [Symbol.iterator]: function() {
        let index = 0;
        return {
            next: function() {
                if (index < Object.keys(obj).length) {
                    if (obj[index] % 2 === 0) {
                        return {
                            value: obj[index++],
                            done: false
                        }
                    } else {
                        index++
                        return {
                            value: this.next,
                            done: false
                        }
                    }

                } else {
                    return { done: true }
                }

            }
        }
    }
}

const fillObj = function() {
    for (let i = 0; i < 10; i++) {
        obj[i] = Math.floor(Math.random() * 100) + 1;
    }
}
fillObj()
console.log(obj)

for (let x of obj) {
    console.log(x)
}