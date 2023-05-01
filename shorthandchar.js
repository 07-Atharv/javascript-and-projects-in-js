console.log("Short hand charracter classes in the js");
// character classes 
// \w = word character , word character , _ , and numbers
// let regex = /\wrv/; // these will match
// let regex = /\wrvaa/; these will not match  because there is aa in after the string
// let regex = /\w+rv/;  // if more than one word characters  (% is not a word character)
// let regex = /\w+999/;
// regex = /number \D999 /; / non digit 
//let regex = /\w+\d9 99/;
// regex = /number \d + /;
//\d+ means more than one digit
// not  a  word character means there is space
// \w+  more  than one non word charracter
// let regex = /\s+is powerful/;
// \s is used to match the white character
// \s+ is used to match the more than one white character
// \S is used to match the non white character
// \S+ is used to match the non white character
// let regex = /is\b/;
// if there is space between the is and p... then there is word boundary and if there is not space then not space boundary
// \b stands for word boundary
let regex = /p(?=o)/;
// let regex = /p(?! =o)/; // therre should be anything after p but not o
// it means that if therre is o after p then match other wise no
let str = "awlehf345098atharv is powerful person 889999999999";
if (regex.test(str)) {
    console.log("Matches");
}
else {
    console.log("Not matches");
}
// Assertions
