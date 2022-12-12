import { exportedvar } from "./module.js"
const a = 1 //a is global scope
function test(){
    const b= 2//local scope
    console.log(a,b)
}
test()
console.log(a)


console.log(exportedvar)
// console.log(modulevar)

// funcion scope and block scope

function run(){
  console.log(a)
  if(true){
    const c=2
    console.log(a,c)
  }
  console.log(c)
}
run()
