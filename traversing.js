console.log("Tutorial traversing in js ");
// qryselectr = if there are multiple elements then first will be selected
let ap = document.querySelector('.child');
ap = document.querySelector('.container');
let pop = ap.childNodes[1].nodeName; 
// Node name of 1 postion in the list
let po = ap.childNodes[5].nodeType;
// console.log(pop);
// console.log(po);
//**************Node types*****************
// 1 elements
// 2 attribute
// 3 text  
// 8 comment
// 9 document 10 doctype
// console.log(ap.childNodes); 
 // It will consider text new lines comments and all and will display the count
// console.log(ap.children);  // It will display the chilren count only(div,h1,li,ui)(mostly used)
let co = document.querySelector('.container');
// console.log(co.children[0].children[0].children);   
// Children of container then first children of div and then first children of div (parent-child-child)
// console.log(co.parentElement);
console.log(co.firstChild); 
//First element of the ChildNodes  means cmnt , anything that will be arise firrst
console.log(co.firstElementChild);
//First element only
console.log(co.lastElementChild);
console.log(co.lastChild);
console.log(co.childNodes);
console.log(co.childElementCount);
//count of the child elements
console.log(co.firstElementChild.nextSibling);
//These will print only next nextSibling which will be arrive
console.log(co.firstElementChild.nextElementSibling);  
// These will print the next children of the parent container
