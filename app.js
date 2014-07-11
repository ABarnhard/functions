var prompt = require('sync-prompt').prompt;

// Increment
function increment(x){
  return x += 1;
}
console.log(increment(3));

// Square
function square(x){
  return Math.pow(x, 2);
}
console.log(square(3));

// Area
function area(l, w){
  return l * w;
}
console.log(area(2, 4));

// Volume
function volume(l, w, h){
  return area(l, w) * h;
}
console.log(volume(2, 2, 2));

function volume2(a, h){
  return a * h;
}
console.log(volume2(area(2, 2), 2));

// Nested Functions
console.log(area(square(increment(3) + increment(4)), square(2)));

// Functions without paramaters/outputs
function sayHello(){
  console.log('Hello');
}
sayHello();

// Use native functions
function makeUpper(string){
  return string.toUpperCase();
}
console.log(makeUpper('hello'));

// Return boolean value
function canDrink(age){
  return age > 20;
}
console.log(canDrink(20));
console.log(canDrink(21));

