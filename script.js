// Assignment Code
var generateBtn = document.querySelector("#generate");

var passLength, choices, lowerLetter, upperLetter, number, specialChar;

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K","L","M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var blank = [];

var toUpper = function (i) {
  return i.toUpperCase();
};

upperCase = lowerCase.map(toUpper);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var passList = [];

  passLength = prompt("Choose between 8 and 128 characters for your password");
  console.log("Length " + passLength);
  
  if(passLength == false) {
    alert("Error: Required number");
  } else if (passLength < 8 || passLength > 128) {
    passLength = prompt("You must choose between 8 and 128");
    console.log("Length " + passLength);
  } else { 
    lowerLetter = confirm("Do you want lower case letters?");
    console.log("Lower case " + lowerLetter);
    upperLetter = confirm("Do you want upper case letters?");
    console.log("Upper case " + upperLetter);
    number = confirm("Do you want numbers?");
    console.log("Number " + number);
    specialChar = confirm("Do you want special characters?");
    console.log("Special Character " + specialChar);
  };

  if (!lowerLetter && !upperLetter && !number && !specialChar) {
    choices = alert("You must choose an option");
  } else if (lowerLetter && upperLetter && number && specialChar) {
    choices = lowerCase.concat(upperCase, numbers, special);
    console.log(choices);
  } else if (lowerLetter && upperLetter && number) {
    choices = lowerCase.concat(upperCase, numbers);
    console.log(choices);
  } else if (lowerLetter && upperLetter && specialChar) {
    choices = lowerCase.concat(upperCase, special);
    console.log(choices);
  } else if (lowerLetter && number && specialChar) {
    choices = lowerCase.concat(numbers, special);
    console.log(choices);
  } else if (upperLetter && number && specialChar) {
    choices = upperCase.concat(numbers, special);
    console.log(choices);
  } else if (lowerLetter && upperLetter) {
    choices = lowerCase.concat(upperCase);
    console.log(choices);
  } else if (lowerLetter && number) {
    choices = lowerCase.concat(numbers);
    console.log(choices);
  } else if (lowerLetter && specialChar) {
    choices = lowerCase.concat(special);
    console.log(choices);
  } else if (upperLetter && number) {
    choices = upperCase.concat(numbers);
    console.log(choices);
  } else if (upperLetter && specialChar) {
    choices = upperCase.concat(special);
    console.log(choices);
  } else if (number && specialChar) {
    choices = numbers.concat(special);
    console.log(choices);
  } else if (lowerLetter) {
    choices = lowerCase;
    console.log(choices);
  } else if (upperLetter) {
    choices = blank.concat(upperCase);
    console.log(choices);
  } else if (number) {
    choices = numbers;
    console.log(choices);
  } else if (specialChar) {
    choices = special;
    console.log(choices);
  };
  
  // Random selection
  for (var i = 0; i < passLength; i++) {
    var allChoices = choices[Math.floor(Math.random() * choices.length)];
    passList.push(allChoices);

    console.log(allChoices);
  }

  // Actually generate password
  var password = passList.join("");

  
  return password;
}