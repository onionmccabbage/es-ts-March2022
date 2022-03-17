const go = (isworking: boolean): Promise<string | boolean | Error> => {
    // return a promise with the expected data type
    // NB needs compiler option set to 'dom' to allow this
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isworking) {
                resolve('a string')
            } else {
                reject(new Error('it broke'))
            }
        }, 200)
    })
}

// exercise the code
// promises are thenable
go(true)
    .then( (val)=>{console.log(val)} )
    .catch( (err)=>{console.log(err)} ) // catch any errors
