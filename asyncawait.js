// async retuns the promise someone who calls the funcion will retun he promise
console.log("Async await");
async function funct() {
  console.log("Inside the function");
  const response = await fetch("Some data kashaasajshjfhfkasjshjfkasajhfkajh");
  // await means when the control gets there the remaining js file is executed
  console.log("Before response");
  const users = await response.json();
  return users;
  //   return "Atharv powalkar";
}
console.log("Before calling function");
let a = funct();
console.log("After calling function");
console.log(a);
a.then((data) => console.log(data));
console.log("Last line");
// async function myFunction()
// {
//          return "Helllooo";
// }

// is similar to

// function myFunction()
// {
//        return Promise.resolve("Hello");
// }
