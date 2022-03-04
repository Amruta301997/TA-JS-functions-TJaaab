// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(num1 , num2=1) {
  return `${num1}+${num2}`;
}
// - Write a Function Expression
let addOne = function (num1) {
  return `${num1}+${num2}`;
};

// - Write an Arrow Function without curly brackets(if possible)
let caddOne = (num1) => num1+num2;
// - Write an Arrow Function with curly brackets
let addOne =  (num1) => {
  return num1+num2;
};
// - Execute the function
addOne(23);
// - Execute the function and store the return value in a variable.
let returnValue = addOne(24);
// - What is the typeof returnValue
//typeof returnValue is number.
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
let a=2;
function subtractOne(n, a=1){
return `${n}-${a}`;
}


// - Write a Function Expression
let subtractOne = function (n){
  return `${n}-${a}`;
};

// - Write an Arrow Function without curly brackets(if possible)
let subtractOne = (n) => n-a;
// - Write an Arrow Function with curly brackets
let substractOne = (n) => {
  return n-a;
};

// - Execute the function
substractOne(24);
// - Execute the function and store the return value in a variable.
let returnValue = substractOne(23);
// - What is the typeof returnValue
//typeof returnValue is number

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(numA,numB){
  return `${numA}+${numB}`;
}
// - Write a Function Expression
let sum=function(numA,numB){
  return numA + numB;
};
// - Write an Arrow Function without curly brackets(if possible)
let sum=(numA,numB) => numA + numB;
// - Write an Arrow Function with curly brackets
let sum= (numA,numB) =>{
  return numA + numB;
};
// - Execute the function
sum(10, 12);
// - Execute the function and store the return value in a variable
let returnValue=sum(10,12);
// - What is the typeof returnValue
//typeof returnValue is number
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(number){
   return number * number;
}
// - Write a Function Expression
let square=function(number){
  return number * number;
};
// - Write an Arrow Function without curly brackets(if possible)
let square = (number) => number * number;
// - Write an Arrow Function with curly brackets
let square=(number) => {
 return number * number;
};
// - Execute the function
square(21);
// - Execute the function and store the return value in a variable
let returnValue=square(21);
// - What is the typeof returnValue
//typeof returnValue is number

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x,y){
   if(x>y){
     return true;
   }
   else{
     return false;
   }
}

// - Write a Function Expression
let isGreater=function(x,y){
  if(x>y){
    return true;
  }
  else{
    return false;
  }
};

// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets
let isGreater=(x,y) =>{
  if(x>y){
    return true;
  }
  else{
    return false;
  }
};
// - Execute the function
isGreater(21,12);
// - Execute the function and store the return value in a variable
let returnValue=isGreater(21,12);
// - What is the typeof returnValue
//typeof returnValue is boolean
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(z){
   if(z/2==0){
     return `number is even`;
   }
   else{
     return `number is odd`;
   }
}

// - Write an anonymous Function Expression
let oddOrEven=function(z){
  if(z/2==0){
    return `number is even`;
  }
  else{
    return `number is odd`;
  }
};
// - Write an named Function Expression
let oddOrEven=function compair(z){
  if(z/2==0){
    return `number is even`;
  }
  else{
    return `number is odd`;
  }
};
// - Write an Arrow Function without curly brackets (hint: use ternary operator)

// - Write an Arrow Function with curly brackets
let oddOrEven=(z) => {
  if(z/2==0){
    return `number is even`;
  }
  else{
    return `number is odd`;
  }
};
// - Execute the function
oddOrEven(22);
// - Execute the function and store the return value in a variable
let returnValue=oddOrEven(22);
// - What is the typeof returnValue
//typeof returnValue is number