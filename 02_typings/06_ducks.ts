// duck typing
// if it looks like a ... then treat it like a ...

interface Point {
    x:number
    y:number
}

const hypot = (p:Point) => {
    const h =( p.x**2 + p.y**2 )**0.5 // **0.5 is the square root
    return h
}

const pt = {x:3, y:4} // this is not explicitly an insance of a Point
console.log( hypot(pt) ) // it looks like a Point, so treat it like one