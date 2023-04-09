console.log("Regular expressions");  // string litral "" , ``
// let reg = /atharv/g;// g = global search (flag)
// let reg = /atharv/i;  //i= case sensitivity  ( it is applicable to case sens)
// these is reg expression syntax  , 
// console.log(reg);
// console.log(reg.source);
// let s = "these is the hardwoking person atharv and atharv is silent boy and he has some potential to do something";
// functions to match the expressions
// 1 exe() = these will return the array for match or null for no match 
// let result = reg.exec(s);  // will search for first time
// console.log(result);
// result = reg.exec(s);  // will search for second time we will get occurences 
// console.log(result); 
// result = reg.exec(s); // will search for third time
// console.log(result);
// console.log(result.input);
// console.log(result.index);

// test function = returns the true or false 

// let regex = /hey/;
// let s = "hey what is your name";
// console.log(regex);
// let results = regex.test(s); //true if the regex is in the string 
// console.log(results);


// match  function  = it will return arrray of results or null

// let regu = /boy/g;
// let ap = "Atharv is good boy he is boy and he is boy boy is good and these is good boy";
// let as = ap.match(regu);
// console.log(as);


// search function = returns the index of the first match or -1(if not found)
// let rego = /atharv/;
// let ster = "Hey what is your name my name is atharv powalkar atharv"; 
// console.log(ster.search(rego));


// replace = will return the new string which is replaced with all the replacements
// let rego = /atharv/g;  // if global flag is not defined then all will not replace
// let ster = "Hey what is your name my name is atharv powalkar atharv"; 
// console.log(ster.replace(rego,"cr7"));