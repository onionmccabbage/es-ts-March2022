// ES has generators
// generators yield (instead of return) and can yield repeatedly

function* fib(){ // the asterisk indicates a generator
    let first  =1, second = 1
    // for (let i=0; i<Number.POSITIVE_INFINITY;i++){
    for (;;){ // a never ending loop
        let sum = second + first
        yield sum // instead of one return, many yield calls
        first = second
        second = sum
    }
}

// a utility function
const prettyPrint = (item)=>{console.log(JSON.stringify(item))} // nice output
const iter = fib() // an instance of our generator - doesnt actually to through the entire loop!!!!
prettyPrint(iter.next())
prettyPrint(iter.next())
prettyPrint(iter.next())
prettyPrint(iter.next())
prettyPrint(iter.next())
prettyPrint(iter.next())
prettyPrint(iter.next())