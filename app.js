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

// Numeric to letter grade
function letterGrade(percent){
  var g;
  if(percent >= 90){
    g = 'A';
  }else if(percent >= 80){
    g = 'B';
  }else if(percent >= 70){
    g = 'C';
  }else if(percent >= 60){
    g = 'D';
  }else{
    g = 'F';
  }
  return g;
}
console.log(letterGrade(81), letterGrade(92), letterGrade(47));

function addTax(price, tax){
  return price + price * (tax / 100);
}
console.log(addTax(100, 10));

// sum values in array
function sum(nums){
  var sum = 0;
  for(var i = 0; i < nums.length; i++){
    sum += nums[i];
  }
  return sum;
}
console.log(sum([2,2,2]));


