// typescript has a dictionary type
{// a nice scope for us to play in
    interface Celaphopod {
        hasInk:boolean
        arms:number
        tentacles:number
    }

    interface CelaphopodDict {
        // see https://github.com/microsoft/TypeScript/issues/7660
        [species:string]:Celaphopod // looks like the data type is not checked
    }

    enum en {vulgaris, loligo}
    let t:string = 'octocreature'

    // populate our dictionary - a non-ordinal collection of members
    const dict:CelaphopodDict = {} // an empty object
    dict[en["vulgaris"]] = {hasInk:true, arms:8, tentacles:0}
    dict[en["loligo"]] = {hasInk:true, arms:8, tentacles:2}
    dict[t] = {hasInk:true, arms:8, tentacles:2} // here ES is casting the nubmer as a string

    // use the dictionary
    delete dict[t]
    console.log(dict)
}