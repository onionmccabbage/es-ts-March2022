// ts for typescript
// JavaScript (ECMAScript or ES) is evolving
// old-skool
function greet(person) {
    // console.log(person.replace(' ', '-'))
    console.log("Greetings ", person);
}
// modern ES function
const fn = (person) => {
    // back ticks are the most efficient way to build strings
    console.log(`Greetings ${person} ${1 + 1}`); // string interpolation syntax: back-ticks
};
// be clear: ECMAScript is a prototypical language
const obj1 = Object.create({}); // {} here is an object
const obj2 = Object.create(null);
console.log(obj1, obj2);
// exploring data
{ // these braces define a bl;ock of code - a scope (ES6)
    var n = 'Grace';
    let name = 'Hopper';
    const fname = 'Lily'; // or just const fname = 'Lily' which infers a string
    // we CANNOT mutate the constant
    // fname = 'Bob' // NB const is a KavaScript thing
    // only use ts when its not obvious
    const digits = [1, 2, 3]; // infer an array of numbers
    digits.push(4, 5, 6); // add members to our constant
    console.log(digits);
    // we can data-type the members of an array
    const members = ['Joan', 'Nicky', 'Rebecca']; // :string[] means its an array of string values
    const people = ['Joan', 'Nicky', 'Rebecca']; // :Array<string> mesans the exact same thing
    people[0] = 'changed';
    const ints = [1, 2, 3, 4, 5, 6.789];
    console.log(people);
}
// exercise the code
greet('Timnit');
fn('Ada');
