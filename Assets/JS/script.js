// Assignment Code

// function to generate password
function generatePassword() {
  // prompt for password length
  var length = prompt(
    "Enter the length of the password (minimum 8 characters and maximum 128 characters):"
  );

  // validate input
  while (length < 8 || length > 128) {
    alert("Invalid input. Please enter a number between 8 and 128.");
    length = prompt(
      "Enter the length of the password (minimum 8 characters and maximum 128 characters):"
    );
  }

  // prompt for character types to include
  var lowercase = confirm("Include lowercase characters in the password?");
  var uppercase = confirm("Include uppercase characters in the password?");
  var numeric = confirm("Include numeric characters in the password?");
  var special = confirm("Include special characters in the password?");

  // validate input
  while (!lowercase && !uppercase && !numeric && !special) {
    alert("Invalid input. Please select at least one character type.");
    lowercase = confirm("Include lowercase characters in the password?");
    uppercase = confirm("Include uppercase characters in the password?");
    numeric = confirm("Include numeric characters in the password?");
    special = confirm("Include special characters in the password?");
  }

  // possible characters to include in password
  var characters = "";
  if (lowercase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (uppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numeric) {
    characters += "0123456789";
  }
  if (special) {
    characters += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
  }

  // generate password
  var password = "";
  for (var i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  // display password

  alert("Generated password: " + password);
}

document.getElementById("generate").addEventListener("click", generatePassword);
/*5555555555555555555555555555555555555555555555555*/
/*
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  window.prompt();
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
let length = window.prompt(
  "choose a password with the length of atleast 8 characters and no more than 128 characters"
);
if (length < 8) {
  alert("Password must be atleast 8 character");
  return;
}
if (length > 128) {
  alert("Password must be maximum 128 character");
  return;
}
let special = window.prompt(
  "please confirm one character types in your password it can be uppercase,numeric, and /or special characters"
);

if (!special) {
  ("you must have atleast one character type in your password");
}
//*****************
//window.prompt("where do you want to write your password?");
//let userPassword = (x > 8) & (x < 128);
//window.prompt(
// "choose a password with the length of atleast 8 characters and no more than 128 characters"
//);
//if (userPassword) {
//window.prompt(
// "please atlaest put one special character type in your pssword"
//);
//} else {
// window.prompt("please try again");
//}
//**********
/*function generatePassword() {
  var length = prompt(
    "enter the desire length of your password minimum 8 character"
  );
  var special = confirm("do you want special character in your password?");
  var upper = "do you want uppercase character in your password?";
}

//validate the password length
if (length < 8) {
  alert("Password must be atleast 8 character");
  return;
}
if (length > 128) {
  alert("Password must be maximum 128 character");
  return;
}
//initialize password variable
var password = "";
//loop to create password
for (var i = 0; i < length; i++) {
  var randomChar = "";
  var charSet = "";
}
//check for special characters
if(special){
  charSet+= "!@#$%^&*"
}
//check for uppercase characters
if (upper){
  charSet +="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}

//generate randome character 
randomChar =charSet.charAt(Math.floor(Math.random()*charSet.length));
//add random character to pasword
password += randomChar;
}
//return the generated password
return password;
}*/
