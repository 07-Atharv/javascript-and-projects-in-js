console.log("Chracater sets in js regex");
// const regextwo = /^a/;
// const regex = /A[^z]har[abc]/;
// put any character between the a - z replace with the t (not z)
// the character within the brackets are there in the string are available then it will match
// const regex = /A[a-zA-Z0-9]har[a-zA-Z0-9]/;
// case sensitive means small a and captial z 
// multiple character sets means we can have as many character sets as we want
// const str = "A4harv powalkar my name is and the name is beautiful named atharv";
// let result = regex.exec(str);
// console.log(result);
// if (regex.test(str)) {
//     console.log(`The string ${str} matches the expression ${regex}`);
// }
// else {
//     console.log(`The string ${str} does not matches the expression ${regex}`);
// }
//if we dont want t
//o match the given character [^charracters] = these will perform the not matching operation



//Quantifiers = how many quantity
// let regex = /ba{0,2}/;  // in these exp we have given the qty of the a i.e between 0 or 2
// let regex = /ba{2}/;  // in these exp we have given the qty of the a i.e 2
// let str = "baallllllll is in the oval shape";
// if(regex.test(str))
// {
//     console.log("Matches");, 
// }
// else
// {
//     console.log("Does not matches");
// }



// grouping = we  use parenthesis 
let regex = /(ath){2}/; // it means that ath should be 2 times as whole 
// let regex = /(ath){2}([0-9]r){3}/; // athathr1r2r3 
let str = "athath is ath of ath and athi";
if(regex.test(str))
{
    console.log("Matches");
}
else
{
    console.log("Does not matches");
}