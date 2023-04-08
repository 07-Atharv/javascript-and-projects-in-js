console.log("Events on more in js");
let element = document.getElementById("btn");
let cp = document.getElementById('txtt1');
element.addEventListener('dblclick',func1);
element.addEventListener('click',func2);
element.addEventListener('mousedown',func3);
element.addEventListener('mouseenter',func4);
element.addEventListener('mouseleave',func5);
element.addEventListener('mousemove',func6);
cp.addEventListener('mouseenter',func4);
cp.addEventListener('mouseleave',func5);
function func1(e) {
    console.log("Thanks",e);
    document.body.style.backgroundColor = 'red';
    e.preventDefault();
}
function func2(e) {
    console.log("Thanks atharrv",e);
    e.preventDefault();
}
function func3(e)
{
    console.log("Mouse down event generated");  // left click wheel right click
}
function func4(e)
{
    console.log("Mouse enter event generated");
}
function func5(e)
{
    console.log("Mouse leave event generated");
}
function func6(e)
{
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor = 'pink';
    console.log("Mouse movvvveedddd");
}
document.querySelector('h1').addEventListener('mousemove',func7);
function func7(e)
{
document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${e.offsetX},${e.offsetY})`;
}
