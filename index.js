var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase

var lowercase = 'hello!'
lowercase.toLowerCase() === lowercase

var mixedCase = 'Hi there!'
mixedCase.toLowerCase() === mixedCase
mixedCase.toUpperCase() === mixedCase


function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string){
  uppercase = string.toUpperCase()
  string = uppercase;
  console.log(uppercase);
}

function logWhisper(string){
  lowercase = string.toLowerCase()
  string = lowercase;
  console.log(lowercase);
}

function sayHiToGrandma(string){
  if (string.toLowerCase() === string){
    return 'I can\'t hear you!';
  } 
}