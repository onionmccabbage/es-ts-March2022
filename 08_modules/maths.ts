export var pi = 3.14
export let squareTwo = 1.41
export const phi = 1.61

export default class RandomNumberGenerator {
    // leave out the implementation
}
export function absolute(num:number){
    if (num <0) return num *-1
    return num
}
// some immediate code
// NB we try to avoid poluting the global namespace
console.log('inside the maths module')