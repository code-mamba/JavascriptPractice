let greet = ()=>{
    console.log("Good morning")
    return 1
}
console.log(greet())


let add = (num1,num2)=>{
    return sum = num1+num2
}
console.log(add(2,3))

let add2 = (num1,num2,num3) => num1+num2+num3

console.log(add2(1,2,3))


let add3 = (num1,num2,num3)=> num1>1 &num2>1 &num3>1? num1+num2+num3:`negative value is not accepted`
console.log(add3(3,4,-2))