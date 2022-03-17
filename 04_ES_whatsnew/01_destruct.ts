// desctructuring in ES
{
    // unpacking an array
    const values = [1, 3, 6, 10, 15, 21, 55, 42]
    //                                  ... is an elipsis
    const [first, second, third,, fifth, ...rest] = values
    console.log(first, second, third, fifth, rest)

    const fn = (x?, y?, ...rest)=>{}
}
{
    // object desctructuring
    const program = {name:'play School', presenter:'Floella', started:1976, ended:1984}
    const {name:n, presenter:p, ...rest} = program

    console.log(`${n} presented by ${p} between ${rest['started']} and ${rest['ended']}`)
}
{
    // tuple desctructuring
    function getMission():[string, string, string] {
        return ['inform', 'educate', 'entertain']
    }
    const [inf, edu, ent] = getMission()
    console.log(`${ent}`)
}