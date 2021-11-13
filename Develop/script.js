// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var special = ['!','@','#','$','%','^','&','*','(',')'];
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var final = [];
  var connect;

  var long = window.prompt("How long do you want your password? Enter a number between 8-128!");
  if(!isNaN(long) && long > 7 && long < 129){
    window.alert("Ok! Your password will have "+ long +" characters!");
  } else if(long < 8 || long > 128){
    window.alert("Please enter a number in range!")
    generatePassword();
  } else if(isNaN(long)){
    window.alert("Please enter a number!");
    generatePassword();
  }

  var l = window.confirm("Do you want lowercase letters in your password?");
  if(l){
    window.alert("Okay! Lowercase Letters will be added!");
    final = final.concat(lower);
  }else{
    window.alert("It will not be added!")
  }

  var u = window.confirm("Do you want uppercase letters in your password?");
  if(u){
    window.alert("Okay! Uppercase Letters will be added!");
    final = final.concat(upper);
  }else{
    window.alert("It will not be added!")
  }

  var s = window.confirm("Do you want special characters in your password?");
  if(s){
    window.alert("Okay! Special characters will be added!");
    final = final.concat(special);
  }else{
    window.alert("It will not be added!")
  }

  var n = window.confirm("Do you want numbers in your password?");
  if(n){
    window.alert("Okay! Numbers will be added!");
    final = final.concat(numbers);
  }else{
    window.alert("It will not be added!")
  }
  var rando = final.length;

  for(var i = 0; i<long; i++){
    var num = Math.floor(Math.random()*rando);
    connect += final[num];
  }
  return connect;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
