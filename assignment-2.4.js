/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

  FirstName LastName
  Assignment 2.4
  Today's Date

  Hello my name is <your actual name goes here>!

  Today's date is <today's date> and the current temperature is <33.6 - use the formatNumber function> degrees.

  I am <your actual age - parsed int value> years old and my savings account goal is <your actual goal - parsed float value> dollars.

*/

//start program

// function for first and last name.
function fullName (firstName, lastName) {
    return firstName + " " + lastName;
}

// assigns values to function fullName.
var name = fullName("Adam", "Donner");

// function for month day and year.
function dateWriter (year, month, day) {  //ask about order
    return month + " " + day + ", " + year;
}

 // assigns values to function dateWrite.
var today = dateWriter("2019", "February", "14");

// function for temperature.
function formatNumber (number, numOfFixedPositions) {  //ask if correct
  return number.toFixed(numOfFixedPositions);
}

// assigns values to formatNumber.
var temperature = formatNumber(7.63,1);

// function for age.
function convertToInt (intString) { //ask if correct
  return parseInt(intString);
}

// converts return string value into integer.
var age = convertToInt("37");

// function for savings goal.
function convertToFloat (floatString) {
  return parseFloat(floatString);
}

// converts return string value into float.
var savings = convertToFloat("1000000.55");

//output
console.log("Hello my name is " + name + "!");

console.log("") // line break

console.log("Today's date is " + today +" and the current temperature is " + temperature + " degrees.");

console.log("") // line break

console.log("I am " + age +" years old and my savings account goal is " + savings + " dollars.");



//end program