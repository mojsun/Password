// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
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
