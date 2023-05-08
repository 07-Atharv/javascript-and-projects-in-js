// When we create the objectt litreal object.prototype(byDefault obj template)
// When the object has started and created
console.log("Proto type");
let op = 
{
Name:"Atharv",
Age:19
}
function ameop (nameOne)
{
    this.hey = nameOne ;
}
ameop.prototype.getName = function ()
{
    return this.hey;
}
ameop.prototype.setName = function(nnn)
{
    this.name = nnn ;
}
let a = new ameop("Whay is alsh");
console.log(a);