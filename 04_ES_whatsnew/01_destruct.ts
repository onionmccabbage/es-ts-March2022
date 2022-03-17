// desctructuring in ES
{
    // unpacking an array
    const values = [1, 3, 6, 10, 15, 21, 55, 42]
    const [first, second, third,, fifth, ...rest] = values

    console.log(first, second, third, fifth, rest)
}