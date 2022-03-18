const fnB = x=>x*x // one param, one lin, no brackets anywhere
const fnC = x=>{return x*x} // need braces if ther is a return statement
const fnD = (x,y)=>x*y // more than one param
const fnE = (x,y)=>{return x*y} // ...or more than one line in the body
const fnF = ()=>{return 'oooo'} // ...no parameters


const fnZ = (x:number):number=>x*x // if data typing, MUST have brackets

class Demo {
    someMethod (){
        // body of method
    }
}

