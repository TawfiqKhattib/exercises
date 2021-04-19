const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
let newgens = genes
let val = newgens[2]
newgens[2] = newgens[newgens.length - 1]
newgens[newgens.length - 1] = val
newgens.splice(3, 1)
newgens.push("AZIN2")
newgens.push("AZIN2")
newgens.unshift("FXT")
console.log(newgens)