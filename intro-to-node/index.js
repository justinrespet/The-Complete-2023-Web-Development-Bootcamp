var superheroes = require("superheroes");
var supervillains = require("supervillains")

var mySuperheroName =  superheroes.random();
var mySupervillainName = supervillains.random();

console.log("Hero: " + mySuperheroName);
console.log("Villain: " + mySupervillainName);