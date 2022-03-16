let u: boolean | number | string

u = true // ok - its a boolean
// ...
u = 5 // still ok - a number
//...
u = 'oops' // actualy, this is ok now too

// u = [] // nope

// sometimes we declare a type alias
type my_type = string | number | boolean | Error

const fn = ():my_type =>{
    return 'ok' // a string is fine as a return type. Could also eturn an Error
}