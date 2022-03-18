import Rx from './Rx.js'
// this must be converted to js for use (tsc index.ts)
const testData = ['people', 'planets', 'species', 'vehicles', 'starships']
const searchBox = document.querySelector('#search') as HTMLElement // -> <input>
const results = document.querySelector('#results')  // -> <ul>
const notEmpty = input => !!input && input.trim().length >0

// make a request
const sendRequest = (arr, query)=>{
    return arr.filter( (item)=>{
        return query.length > 0 && item.startsWith(query)
    } )
}

const appendResults = (container, results)=>{
    for (const result of results) {
        const li = document.createElement('li')
        const text = document.createTextNode(result)
        li.appendChild(text)
        container.appendChild(li)
    }
}

// clean up utility
const clearResults = (container)=>{
    while(container.childElementCount > 0){
        container.removeChild(container.firstChild)
    }
}

// use RxJS to make an observable
Rx.Observable.fromEvent(searchBox, 'keyup') // grab the event and make an Observable
    .pluck('target', 'value')
    .filter(notEmpty) // check there is actually something in the field!!
    .do( (query)=>{console.log(`Querying for ${query}`)} ) // do lets us carry out arbitrary sequential operations
    .map( (query)=>{return sendRequest(testData, query)} )
    .forEach( (result)=>{
        clearResults(results)
        appendResults(results, result)
    } )





