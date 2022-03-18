// we will import functionality from other modules
// import { helloWorld } from "./hello" // the {} let us import anything from this module
// NB explicitly JS files - so this works in a browser
import helloWorld from "./hello.js" // the default export
import { Penguin, Dog } from "./animals.js"
helloWorld()

// what about file extensions - ts or js?
// import { pi, phi, absolute } from "./maths"
// or
import  RandomNumberGenerator, {pi as p, phi, absolute} from './maths.js'
// we can import the whole lot at once - but we cannot then use them
// import './maths'// everything runs in this module

const r = new RandomNumberGenerator() // non-functional
console.log(r, p, phi, absolute(-22))

// NB we normally put all imports at the top
// import { Penguin, Dog } from "./animals"
// import type {Penguin, Dog} from "./animals" // only possible for types
type Animals = Penguin | Dog
// use our types/interfaces
const gromit:Dog = {breeds:['plasticine', 'silicone', 'wire'], yearOfbirth:1991}
const feathers:Penguin = {breed:'rock-hopper', yearOfbirth:1993}

const characters:Animals[] = [gromit, feathers]

console.log(characters)
