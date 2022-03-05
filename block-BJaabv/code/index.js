// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/
let age;
function calculateDogAge( dogAge=7, humanAge=1) {
  // Your code goes here
 age=humanAge * dogAge+7;
return `${age}`;
}
let totalAge=calculateDogAge(age);
alert(totalAge);

/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/
let maxAge=90;
function calculateMoviesToWatch(age ,numberOfMovies) {
  // Your code goes here
  
  numberOfMovies=(maxAge-age)*48;
  return numberOfMovies;
}
let movies=calculateMoviesToWatch(23);
console.log(movies);
/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(celsius) {
  // Your code goes here
  
  fahrenheit=(celsius * 1.8)+32;
  return fahrenheit;
}
let temperature1 =celsiusToFahrenheit(97);
console.log(temperature);
/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function fahrenheitToCelsius(fahrenheit) {
  // Your code goes here

  celsius=(fahrenheit - 32)/1.8;
  return celsius;
}
let temperature=fahrenheitToCelsius(97);
console.log(temperature);


/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(n,x){
  num=Math.pow(x,n);
  if(n<=0){
    return `the number below 1 is not allowed`;
  }
  else{
  return num;}
}
let power=Math.pow(3,2);
console.log(power);

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"



/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN(n,a) {
  // Your code goes here
  if (
    typeof n !=="number" || typeof a!== "string"
  ){
    alert('not a valid input');
  }
  else{
    switch(true){
      case 'sum':
        return n+n;
      case 'product':
        return a*a;  
    }
  }
}
  let total=sumOrProductOfN(4,'sum');
  console.log(total);

sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
7. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/
let sum=0;
function sumOfN(n) {
  // Your code goes here
  for(let i=1;1<=n;i++){
    sum=sum+i;
  }
}
let naturalNum=sumOfN(5);
alert(naturalNum);
/*
8. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/
let sumOfMul=0;
function mulOfNum(n){

}

// Your code goes here

/*
9. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(a,b) {
  // Your code goes here
  if(a<b){
    return `min value ${a}`;
  }
  else{
    return `min value ${b}`;
  }
}
let minValue=min(9,12);
console.log(minValue);
min(0, 10);
min(0, -10);

/*
10. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(n) {
  // Your code goes here
  if(typeof n == "number"){
    alert `typeof ${n} is a number`;
  }
  else if(typeof n == "string"){
    alert `typeof ${n} is a string`;
  }
  else if(typeof n == "boolean"){
    alert `typeof ${n} is a boolean`;
  }
  else if(typeof n == "null"){
    alert `typeof ${n} is a null`;
  }
  else if(typeof n == "undefined"){
    alert `typeof ${n} is a string`;
  }
  else{
    alert `typeof ${n} is a object`;
  }
}
