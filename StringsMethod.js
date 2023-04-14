//String and litreals methods template 
console.log("We are at now new topic");
const nameone = "Atharv powlkar";
const wish = "Goood Morning" ;
console.log(nameone + ' ' + wish);
let pop = "HATER1234 HAPPY hey What";
// t = pop.concat("\tAtharv powalkar");
// concat = It is used to join the passed strings to the function
console.log(pop.concat("\tAtharv powalkar"));
console.log(pop.concat("\My favourite  programming language is js","string two"));
console.log(pop.length);
// Converts all into the lower case 
console.log(pop.toLowerCase());
console.log(pop.toUpperCase());
console.log("Orignal string " ,pop);  // It will not distrub the orignal string 
console.log("Postion 1 >>>>" , pop[1]);
console.log("Postion 2 >>>>" , pop[2]);
console.log("Postion 4 >>>>" , pop[4]);w
console.log(pop.indexOf("A"));            // retruns the postion in the integer value
console.log(pop.indexOf("What"));         // Returns the position of the string started
console.log(pop.indexOf("alsjddlasjkdd"));//If string is not there then returns -1
console.log(pop.indexOf("H"));            //If too many occurences are there then it returns the firrst index of occurencess
console.log(pop.lastIndexOf("H"));        //Returns the last index of the Entered character
console.log(pop.charAt(0));               //Index as parameter
console.log(pop.endsWith("What"));        //Returns the boolean if the endds with
console.log(pop.includes("HAPPY"));       // if the strinmg or charracter is in the entered string then true or else false
console.log(pop.includes("JKAHGSWD"));    //Not included
console.log(pop.substring(0,2));          //Start , n-1 
console.log(pop.slice(-2));               //Last characters 
console.log(pop.slice(0,5));
console.log(pop.split(' '));               // Converts into arrray 
console.log(pop.replace("HAPPY","REPLACE"));
//  Template litreals in js which is used in the hgtml webpage
//  ` ` is compulsory 
//  $ used to declaare variables 
let f1 = "Apple";
let f2 = "Banana";
let tempvar = `Hey <p> These is ${f1} and ${f2}`;
console.log(tempvar);
document.body.innerHTML = tempvar ;
let fname = "Atharv";
let lname = "Powalkar";
let trade = "Computer" ;
let Printon = `
<h1> My first name is ${fname} and last name is ${lname} </h1>
<p> I am studying in ${trade} science</p>
<h2> Heyyyy ${fname} </h2>
`;
// $ used when we use variable in the website 
// console.log(Printon);
document.body.innerHTML = Printon ;
// Template litreals can format the string as we want 
let hey = `what us your name
my name is atthav powalkarr`;
