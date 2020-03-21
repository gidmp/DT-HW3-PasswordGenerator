// Write a function that takes user input and creates a password
// based on that input and returns it



function generatePassword() {

  //characters used to make the password.
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var special = [" ","!","\"", "#", "$", "%", "&", "\'", "(",")","*", "+", ",", "-",".","/",":",";","<","=",">","?","@","[","]","\\","^","_","{","}","|","~" ];
  var alphabetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var number = ["1","2","3","4","5","6","7","8","9","0"];
  
  //confirming the conditions for the password
  var askLength = prompt("Length of password?");
  var numeric = confirm("Do you want numeric characters??");
  var lowercase = confirm("Do you want lowercase characters?");
  var uppercase = confirm("Do you want uppercase characters?");
  var specialCharacter = confirm("Do you want special characters?");

  //empty array and string to store all the characters that will be used
  var storage = [];
  var result = "";

  //get the length of the password desired
  function getLength(x){
    if(x >= 8 && x <= 128){
      return x;
    }else{
      alert("please enter a number between 8 and 128 characters");
      return null;
    }
  }

  //store the length of password
  var passwordLength = parseInt(getLength(askLength));

  //add all desireable conditions to one giant array
  if(lowercase){
    storage = storage.concat(alphabet);
  }

  if(specialCharacter){
    storage = storage.concat(special);
  }

  if(uppercase){
    storage = storage.concat(alphabetUpper);
  }

  if(numeric){
    storage = storage.concat(number);
  }

  //print the password one character at a time
  for(var i = 0; i <= passwordLength; i++){
      result = result + storage[Math.floor(Math.random()*storage.length)];   
  }
  
  return result;
   
}



//////////////////////////////////////////////////////////////
// DO NOT TOUCH THE CODE BELOW
//////////////////////////////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

