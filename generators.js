console.log("Generators in javascript");
// generators in javascript
// we can  generate the value as we want
// used to generate the values

function* numGenerator() {
    let i = 0;
    yield 1;
    yield 23;
    // yeild will retun the value 
    while (true) {
        yield i++;
    }
}

const genn = numGenerator();
console.log(genn.next().value);
console.log(genn.next());
console.log(genn.next());
console.log(genn.next());
console.log(genn.next());

