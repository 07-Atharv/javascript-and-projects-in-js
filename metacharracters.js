console.log("Meta characters regex in js");
// lets look some meta characters
let regex = /^ba/;  // ^ = string starts with 
let regexone = /ll$/ // ends withh
// let regextwo = /b.ll/ // dot means matches any character one dot means excatly one character
// let regextwo = /b*ll/ // rather than matches any more than 0 character means it can match balhasll , baoill , etc
// let regextwo = /ba?ll?/ // ?=means optional these can be there  or not there  // bl will match
let regextwo = /b\*ll/;  // escape character means it will see the * int the string and match the string , here star is considerd as character
let str = "baharv is hardworking person and he can handle all the situations and name is b*ll";
let result = regex.exec(str);
console.log(result);
if (regextwo.test(str)) {
    console.log(`The string ${str} matches the expression ${regextwo}`);
}
else {  
    console.log(`The string ${str} does not matches the expression ${regextwo}`);

}