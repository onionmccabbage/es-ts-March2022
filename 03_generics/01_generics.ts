{
    // problem
    function firstEl(arr:any[]):any { // no way to enture in-type matching
        return arr[0] // return the 'first' member (i.e. at position zero)
    }
    
    // so we use generics: by convention we use capital T for ageneric type
    function firstElGen<T>(arr:T[]):T{ // whatever type goes in, the same type will be returned
        return arr[0] 
    }
    // use some collections
    const s = firstElGen( ['a', 'b', 'c'] )
    const n = firstElGen( [3, 2, 1] )
    const u = firstElGen( [] ) // returns undefined

    console.log( `${typeof(s)} ${s}, ${typeof(n)} ${n}, ${typeof(u)} ${u} ` )

}