///////////////////////////Arithmetic  OPerators  /////////////////////////
 //  add a two numbers
function add(a, b){
    return a + b;
}

let first = 10 ;
let second = 20;
let sum = add(first, second);
console.log("The sum of "+ first + " and "+second+" is: " + sum);

// subtract of two numbers
function sub(a, b){
    return a - b ;
}
let subtraction = sub(first, second);
console.log(" The subtraction of " + first + " and " + second + " is : "+ subtraction);

/// multiply of two numbers
function multi(a, b){
    return a * b;
}
let multiply = multi(first, second);
console.log("The multipication of " + first + " and " + second + " is : "+ multiply);
 //// devide two numbers
 function div(a, b){
    return a / b ;
 }
 let division = div(first, second);
 console.log("The division is " + first + " and " + second + " is :"+ division);

 // remider 
 function remin(a, b){
    return a % b;
 }
 let reminder = remin(first, second);
 console.log("The division is " + first + " and " + second + " is :"+ reminder);
 
////////////////////////// Comparision operator ///////////////////
/////////////// (<) or(>)
let num1 = 20;
let num2 = 30;

if(num1 > num2){
    console.log(num1 + " is grater then "+ num2);
}else{
    console.log(num2 + " is grater then "+ num1);
}

////////// is less then or equal to
let less1 = 20 ;
let less2 = 20;

    console.log(less1 >= less2 );

////////////// equalto  or tripal equal 
if(less1 == less2){
    console.log("Both values are equals");
}

if(less1 === less2){
    console.log("Both value and Datatype is equal")
}

/////////////////// logical operator///////
///////// and && if both condition is equal then give the true value
let less3 = 30;
if( less1 == less2 && less2 < less3){
    console.log("This is And Opertor");
}

////////////// OR (||) if any one value is true this will give the ture
if(less1 < less2 || less2 <= less3){
    console.log("This is OR Operator");

}

///////////// logical not ! it will become negative to positive and possitive to negative
if( less1 != less3){
    console.log("This is not logical operator")
} 

/// ternary operator 
less1 > less3 ? console.log(less1 + "is big") : console.log(less3 + " is big numbers") 