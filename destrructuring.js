console.log("Destructuring in javascript");

// de structuring in js
let a, b;
[a, b] = [34, 333];
console.log("a=", a, "b=", b);
[a, b, c, ...d] = [1, 223, 34, 45, 56, 567, 67, 56, 34, 23, 123, 243, 435];

//if we put the dot then the rem elements will be consderd as array
console.log(a);
console.log(b);
console.log(c);
console.log(d); 

//these is the arrays
//object destructuring

({ a, b, c, d } = { a: 12, b: 11, c: 1111, d: 90 });
({ a, ...d } = { a: 12, b: 11, c: 1111, d: 90 });
console.log(a)
console.log(d)

// array destructing 
const arr = ["A", "B", "C", "D"];
[x, y, z] = arr;
console.log(x, y, z);

const plang = {
    c: "mostly used",
    cpp: "rarely",
    java: "backend",
    python: function () {
        console.log("Heyyy i am python programmer at amazon");
    }
}

c, java = plang
console.log(c, java);