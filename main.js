var fname = "Glenda";
let age = 26;
const futurejob = "web developer";

// var message = "My name is " + fname + "I am" + age + "years old and I will soon be a " + futurejob

// interpolation example: 
console.log(`My name is ${fname} and I am ${age} years old. I will soon be a ${futurejob}`);

// Array, indexing, and slicing practice

let favoritecolor=["pink", "purple", "green", "brown", "orange", "white"];
const lastIndex = favoritecolor.length -1;
const midIndex = favoritecolor.length /2;
console.log(favoritecolor[0]);
console.log(favoritecolor[lastIndex]);
console.log(favoritecolor[midIndex]);

// Using prompt() and push()
var userFavColor= prompt("Enter your favorite color:");
favoritecolor.push(userFavColor);
console.log(favoritecolor);

favoritecolor.pop(); 
favoritecolor

