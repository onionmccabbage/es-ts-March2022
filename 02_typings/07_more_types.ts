{
    // literals
    type Kingdom = 'Bacteria' | 'Protozoa' | 'Chromista'

    let k:Kingdom
    k = 'Bacteria' // fine
    // k = 'nonsuch'  // oops
    
    type arbitrary = 'literally this' | 10 | false // union of types
    let r:arbitrary
    r = false

    // tuples (a typescript thing)
    let poem:[number, boolean, string] // this tuple allows only these types in this order
    poem = [1, true, 'love'] // fine
    // this is dead handy for code completion
    console.log(poem[2].charAt(0))

}