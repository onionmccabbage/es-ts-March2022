// enums
{
    // we can declare an enumerable collection
    enum BoxSize {
        Small,
        Medium
    }
    // enums are open ended...
    enum BoxSize {
        Large = 2,
        XLarge,
        XXLarge
    }

    // use our enum
    const boxType = BoxSize.Small
    const boxtypeName = BoxSize[boxType] //its a small box
    let size = BoxSize.Small
    size++ // we can increment
    size++ // we can increment
    size++ // we can increment
    size++ // we can increment
    size++ // beyond the enum

    console.log(BoxSize[size])

    const l = BoxSize.Large
    const l1 = BoxSize[2]
}

{
        // bit flags
        const enum CategoryFlags {
            None   = 0, // this is the default anyway
            Music  = 1,
            News   = 2,
            Drama  = 4,
            Comedy = 8 // powers of two
        }//                             union is '|'
        const musicalComedy = CategoryFlags.Music | CategoryFlags.Comedy
    
        // now elsewhere we would check types using intersect (&)
        const hasMusic  = (musicalComedy & CategoryFlags.Music) // true
        const hasNews   = (musicalComedy & CategoryFlags.News) // false
        const hasDrama  = (musicalComedy & CategoryFlags.Drama) // false
        const hasComedy = (musicalComedy & CategoryFlags.Comedy) // true
    
}