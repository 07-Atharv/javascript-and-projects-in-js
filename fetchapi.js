console.log("Fetch API in the js");
// button with id btnone
let myBtn = document.getElementById("btnone");
// below >> div with id contentdata
let content = document.getElementById("contentdata");
// function getData()
// {
// console.log("Started getData Function");
// let url = "atharv.txt";
// //  the function runs as the promise inside the resolve
// // the fetch api will run in the background
// fetch(url).then((response)=>{
//     console.log("Inside the first then");
//     return response.text();
//     // after promise complete again dot then
// }).then((data)=>{
//     console.log(data);
//     console.log("Inside the second then");
// }) 
// }
// function getData()
// {
// console.log("Started getData Function");
// let url = "https://api.github.com/users";
// //  the function runs as the promise inside the resolve
// // the fetch api will run in the background
// fetch(url).then((response)=>{
//     console.log("Inside the first then");
//     return response.json(); // parse data
//     // after promise complete again dot then
// }).then((data)=>{
//     console.log(data);
//     console.log("Inside the second then");
// }) 
// }
// console.log("Before running the get data");
// getData();
// console.log("After running  the get data");

function postData()
{
let url = "onlineFakejsondatalink";
data = "data in the link";
params = {
    method:"post",
    headers:{
        "Content-Type":"application/json"
    },
    body:data
}
//  the function runs as the promise inside the resolve
// the fetch api will run in the background
fetch(url,params).then(response=>{response.json(); // parse data
    // after promise complete again dot then
}).then(data=>{ console.log(data);
}); 
}