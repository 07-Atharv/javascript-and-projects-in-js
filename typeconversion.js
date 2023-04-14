// type conversion and type coercion
let num = 90 ;
num = String(900);
// Type conversion
console.log(num);
console.log((typeof num))
let bc = true;
bc = String(true);
console.log((typeof bc))
let d = String(new Date());
console.log(d,(typeof d))
let arrrc = [12,13,14,15,16]; // Dont include commasss
console.log(arrrc.length,(typeof arrrc));
let arrrcccc = String([1,2,3,4,5,6,7,8,9]);
// Include commas as string and count the total values in the arrrayyyy
console.log(arrrcccc.length,(typeof arrrcccc))
//******* toString() ******//
//convert to string //
let vr = 8 ;
console.log(vr.toString());
let stri = Number("121212");
let stri1 = Number(true);
let stri2 = Number(false);
let sttt = Number([12,2,3,4,45,5,6]);  // Naan cant convert to number //(NotANumber)
console.log(stri);
console.log(stri1);
console.log(stri2);
console.log(sttt);
// Convert string into integer 
// let number = parseInt('12');
let number = parseInt('12.12333');
console.log(number,(typeof number));
let happy = parseFloat('12.9999');
console.log(happy,(typeof happy));
//tofixed = dont show afterr point in the sense only integer value
console.log(number.toFixed(2),(typeof number));
//type coercion
let var1 = "123";
let var2 = 12;
console.log(var1+var2);