// console.log("Functions and scopes in js");
// // Funtions are used to reduce the loc and for reusability
// Does not return the value
// //const store = function grtngs(name,saymore)
// //  [we can store the function in the variable]
// function grtngs(name,saymore) { // Parameters  
// //   let msg =   `Happy birthday ${name} 
// // May god bless you
// // May all your wishes come true and hope you will get success in the life ${saymore}`;  We can store the message in the variable and we can return the variable
// console.log( 
// `Happy birthday ${name} 
// May god bless you
// May all your wishes come true and hope you will get success in the life ${saymore}`);
// return 1;
// // return msg;
// }
// //let namew="Atharv powlkar";
// let v  = grtngs(" Atharv P " , " You get more money in the life ";
// //console.log(grtngs);
// console.log(v);
// // Returns the value 1
// const myObj = {
//     hey:"Game",
//     what:"isYourName",
//     game:function(){
//                 return "GTAVICECITY";        
//     }
//     // Creation of function under object
// }
// console.log(myObj.game());
// let array1 = ['First Year','Second Year','Third Year'];
// array1.forEach(function(element,array,index)
// {
// console.log(element,array,index);
// });
function atharv(str) {
let mess = `My name is ${str}`;
console.log(mess);
}

atharv("Atharv powalkar");
function happy (strone,strtwo,strthree)
{
    console.log(strone);
    console.log(strtwo);
    console.log(strthree);
}
happy("Hey","Where are you ","What is your name");
function yet (o,p,a)
{
    let mg = `
    These is numberr ${o} and these is string ${p} and these is special chaacterr ${a}
    `;
    console.log(mg);
}
yet(12,"a","#");