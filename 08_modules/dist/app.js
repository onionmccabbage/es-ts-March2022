// we will import functionality from other modules
// import { helloWorld } from "./hello" // the {} let us import anything from this module
import helloWorld from "./hello.js"; // the default export
helloWorld();
// what about file extensions - ts or js?
// import { pi, phi, absolute } from "./maths"
// or
import RandomNumberGenerator, { pi as p, phi, absolute } from './maths.js';
// we can import the whole lot at once - but we cannot then use them
// import './maths'// everything runs in this module
const r = new RandomNumberGenerator(); // non-functional
console.log(r, p, phi, absolute(-22));
// use our types/interfaces
const gromit = { breeds: ['plasticine', 'silicone', 'wire'], yearOfbirth: 1991 };
const feathers = { breed: 'rock-hopper', yearOfbirth: 1993 };
const characters = [gromit, feathers];
console.log(characters);
