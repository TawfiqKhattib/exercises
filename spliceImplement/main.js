const mySplice = function(array) {
    return {
        tosplice: function(start = 0, count = array.length) {
            if (start < 0 || count > array.length) {
                console.log("the parameter you enterd incorrct,check again!!")
            } else {
                while (count) {
                    let index = start + count - 1
                    array[index] = array.pop()
                    count--
                }
            }
            return array
        }
    }
}

let array = [1, 5, 15, 4, 7, 9, 13, 6]
array = mySplice(array)
console.log(typeof array)
array = array.tosplice(2, 3)
console.log(array)