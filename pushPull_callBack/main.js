// ex1
const push = function() {
    console.log("pushing it!");
}

const pull = function() {
    console.log("pulling it!");
}

const pushPull = function(refFunc) {
    refFunc();
}
pushPull(push); //should print "pushing it!"
pushPull(pull); //should print "pulling it!"

// ex2
const returnTime = function(time) {
    console.log('The current time is: ' + time);
}

const getTime = function(refFunc) {
    refFunc(new Date());
}
getTime(returnTime);

// ex3
const displayData = function(alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
};

displayData(console.log, console.log, "I like to party")

// ex4
const sun3Parm = (num1, num2, num3) => num1 + num2 + num3;
console.log(sun3Parm(1, 2, 3));

// ex5
const capitalize = (strCap) => strCap[0].toUpperCase() + strCap.substring(1).toLowerCase()
const bob = capitalize("bOb") // returns Bob
const tylor = capitalize("TAYLOR") // returns Taylor
const fels = capitalize("feliSHIA") // returns Felishia
console.log(bob + "  " + tylor + " " + fels)

// ex6
const determineWeather = temp => {
    if (temp > 25) {
        return "hot"
    }
    return "cold"
}

const commentOnWeather = temp => { return "it's " + determineWeather(temp) };
const hot = commentOnWeather(30); //returns "It's hot"
const cold = commentOnWeather(22); //returns "It's cold"
console.log("temp 30 : " + hot + "  temp 22 : " + cold);

// ex7
const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
}

const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"

const makeSound = sound => alert(sound)

explode(shineLight, makeSound, "BOOM")