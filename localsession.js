console.log("These is tutorial of local and session storage");

// Addds tthe key value pair
let arr = ['a','b','c'];
// localStorage.setItem('Name','Atharv');
// localStorage.setItem('Nameone','Powalkar');
// localStorage.setItem('Sab',JSON.stringify(arr));  // Takes thje object and returns the string
// localStorage.clear();
// localStorage.removeItem('Name');
// get the item
let a = localStorage.getItem('Name');
a = JSON.parse(localStorage.getItem('Sab'));
// Takes the string and returns the object
// consol.log(b);
console.log(a);
// We cannot add the array but we have options
// sessionStorage.setItem("SessionName","John");
// sessionStorage.setItem("SessionAddr","Pune");
// sessionStorage.setItem("SessionNum",9899);

// Local storrage will be as it is but session storage will be off when we shutdown the computer