// import {fromEvent} from 'rxjs'
import { pluck } from 'rxjs/operators'
import * as Rx from 'rxjs'

enum categories { people, planets, species, starships }

const input = document.getElementById('input')
const cat = document.getElementById('cat')
let search: string = ""

// observables are for STREAMS of data
// we tend to identify observables by a trailing dollar sign
const keyup$ = Rx.Observable.fromEvent(document, 'keyup') // listen for ANY keyup event

// the observable is only created onmce there is a subscriber (lazy instantiation)
keyup$
    .do(() => { console.log('early') })
    .pluck('keyCode') // our observable knows about every key-code from every key event
    // .pipe(pluck('keyCode')) //
    .do(() => { console.log('later') })
    .subscribe((keyCode: number) => {
        const k = String.fromCharCode(keyCode)
        console.log(`User typed ${k}`)
        cat.innerHTML += k
    })

// the following gives a prompt for entered search terms
const testData = ['people', 'planets', 'species', 'vehicles', 'starships']
const searchBox = document.querySelector('#search'); //-> <input>
const results:HTMLElement = document.querySelector('#results');  //-> <ul>

const notEmpty = (input: any) => !!input && input.trim().length > 0;

const sendRequest = (arr: any, query: any) => {
    return arr.filter((item: any) => {
        return query.length > 0 && item.startsWith(query);
    })
}
Rx.Observable.fromEvent(searchBox, 'keyup')
    .debounceTime(700) // give the user 700 ms between checks
    .pluck('target', 'value')
    .filter(notEmpty)
    .do(query => console.log(`Querying for ${query}...`))
    .map(query => sendRequest(testData, query))
    .forEach(result => {
        clearResults(results)
        appendResults(result, results)
    })
const clearResults = (container: HTMLElement) => {
    while (container.childElementCount > 0) {
        container.removeChild(container.firstChild);
    }
}
const appendResults = (results: string, container: HTMLElement) => {
    for (const result of results) {
        const li = document.createElement('li')
        const text = document.createTextNode(result)
        li.appendChild(text)
        container.appendChild(li)
    }
}
