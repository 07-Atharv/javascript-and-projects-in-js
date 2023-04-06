/*
Flow of code
create a element
create a text node
add the text node in the element node
add the class id atttrributes to the element
add the element to the ul 
*/
console.log("Create remove and replace the elements");
let ele = document.createElement('li');
let y = document.createTextNode("Heyyy i have created");
ele.appendChild(y);
ele.className = "ap";
ele.id = 'ide';
// ele.innerText = "Potato"  // Inner text is replaced by createtextNode 
// To add the child element in div first tag using the class name 
// ele.innerHTML = `<b><i>${ele.innerText}</b></i>`;
ele.setAttribute('title','myTitle');
let ul = document.querySelector('ul.list');  // To select the element in the div tag
ul.appendChild(ele);  // To append the created child in the iv tag
console.log(ul); 
console.log(ele);
// Replacing the element 
let u = document.createElement('h3');
u.className = 'elemy';
u.id = 'top';
let pp = document.createTextNode("Heyyy these is h3 and these will be added");
u.appendChild(pp);
ele.replaceWith(u);
// Replacing the child
let ver = document.getElementById('ver');  // id of the ul
ver.replaceChild(ele,document.getElementById('plm'));
// new , replace one and child of ul is replaced 
ver.removeChild(document.getElementById('lut')) 
// peru is removed
// let o = ele.getAttribute('id');
// let o = ele.getAttribute('class');
let o = ele.hasAttribute('id');  // If the given attr is present then true else false 
let p = ele.removeAttribute('id');
console.log(ele);
console.log(p);
console.log(o);