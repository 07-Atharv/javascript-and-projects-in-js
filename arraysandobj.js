console.log("Arrrayss and objects in javascript");
let marks = [12,14,15,16,77,88];
const fruits = ["Apple","Orange","Lemon","Hey"];
const mix = ["Stringone",1,2,3,[12,13]];
const arr = new Array(1,2,3,4,"Hey");
let at = "nMW";
console.log(marks);
console.log(fruits);
console.log(mix);
console.log(arr);
console.log(fruits[0]);
console.log(marks[1]);
console.log(marks.length);
console.log(Array.isArray(marks));
console.log(Array.isArray(at));
marks[2] = 100;
console.log(marks);
let aryelem = fruits[3];
console.log(aryelem);
let val = marks.indexOf(77);
console.log(val);
// Mutating and modifying arrrays
let arr1 = [12,13,14,55,66,77,88];
console.log(arr1);
arr1.push(1234); // Adds the element in the end of the arrray
console.log(arr1);
arr1.unshift(1111);  // Starting adds the element
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.pop();
// Removes the element in the end of the array 
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.shift();
//Removes the first element from the array
arr1.pop();
console.log(arr1);
arr1.splice(1,2);  // from 1 delete 2 elements and so on
console.log(arr1);
console.log(marks);
marks.splice(0,2); //(start,deletecount) // from 0 delete 2 elements 
console.log(marks);
let arr2 = [1,3,4,6,7,8,8,9,0];
console.log(arr2);
let ap = arr2.reverse();
console.log(ap);
// Empty array cannot be concated
let conct = [0,99,88,77];
console.log(conct.concat(marks));
// We can add aray string boolean valuues in the object
// To store complex info we can use object
// To store keyy value pair
        let createObj = {
            nameOf:"Atharv" , 
            Status:"DiplomaHolder" ,
            Food:"EveryThinG" ,
            mks : [98,88,33,22,22]
                        }
console.log(createObj);
// Acccesing the objects
console.log(createObj.Food);console.log(createObj["Status"]);