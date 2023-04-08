// You have to create a div and inject a page into a heading when
// someone clicks you have to make the object editable and whenever someone clicks away save (blur event) the node into lclstrg
console.log("These is exercise 2");
var redp = document.getElementById("divone") ;
redp.addEventListener('click',funct);
function funct(e)
{
    console.log("Div tag clicked");
    redp.replaceChild(document.createElement("li"),document.getElementById("a"));
}