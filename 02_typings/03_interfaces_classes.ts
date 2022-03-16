// we need a way to import external JSON
// for this we will:
// 1 - install ts-node: npm install -g ts-node
// 2 - configure a tsconfig file
// 3 - use 'import'
let photos:Photo[] // nice bit of data typing going on here
import * as pdata from './photos.json'
photos = pdata.photos // properly data typed

// some data
// const photos = [
//     {
//       "albumId": 1,
//       "id": 1,
//       "title": "accusamus beatae ad facilis cum similique qui sunt",
//       "url": "https://via.placeholder.com/600/92c952",
//       "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//     },
//     {
//       "albumId": 1,
//       "id": 2,
//       "title": "reprehenderit est deserunt velit ipsam",
//       "url": "https://via.placeholder.com/600/771796",
//       "thumbnailUrl": "https://via.placeholder.com/150/771796"
//     },
//     {
//       "albumId": 1,
//       "id": 3,
//       "title": "officia porro iure quia iusto qui ipsa ut modi",
//       "url": "https://via.placeholder.com/600/24f355",
//       "thumbnailUrl": "https://via.placeholder.com/150/24f355"
//     },
//     {
//       "albumId": 1,
//       "id": 4,
//       "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//       "url": "https://via.placeholder.com/600/d32776",
//       "thumbnailUrl": "https://via.placeholder.com/150/d32776"
//     }
// ]
// an interface - this is the style recommended by Typescript
interface Photo {
    albumId:number
    id:number
    title:string
    url:string
    thumbnailUrl:string
}
// a class
class Snap implements Photo {
    albumId:number
    id:number
    title:string
    url:string
    thumbnailUrl:string
    constructor(snap:Photo){
        this.albumId      = snap.albumId
        this.id           = snap.id
        this.title        = snap.title
        this.url          = snap.url
        this.thumbnailUrl = snap.thumbnailUrl
    }
}
// exercise the code
let s1 = new Snap(photos[42])
console.log(s1)