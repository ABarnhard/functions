var prompt = require('sync-prompt').prompt;

function increment(x){
  return x += 1;
}

console.log(increment(3));
console.log(increment(7));
console.log(increment(9));
console.log(increment(12));

function square(x){
  return Math.pow(x, 2);
}

console.log(square(3));
console.log(square(7));
console.log(square(9));
console.log(square(12));

function area(l, w){
  return l * w;
}

console.log(area(2, 4));
console.log(area(2, 10));
console.log(area(2, 20));
console.log(area(7, 4));

function volume(l, w, h){
  return area(l, w) * h;
}

console.log(volume(2, 2, 2));


function volume2(a, h){
  return a * h;
}

console.log(volume2(area(2, 2), 2));



console.log(
    area(
      square(
        increment(3) + increment(4)
      ), square(2)));


