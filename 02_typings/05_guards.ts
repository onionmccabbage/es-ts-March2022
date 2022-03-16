// we can guard against wrong data types

{
    // here is a simple function takes either a string or a number
    const eg = (sn:string|number) =>{
        if(typeof sn == 'string'){
            return sn.length
        } else {
            return sn.toFixed(2)
        }
    }
    const word = 'one point four nine'
    const num  = 1.493

    console.log(eg(word))
    console.log(eg(num))
}