// Callback functions
const myCar = {
    make: 'Honda',
    model: 'Accord',
    year: 1998,
}
console.log("1",myCar)

function myfunc(){
    myCar.make = "Maruti"
    console.log("1",myCar)
    
}

myfunc()
console.log("3",myCar)


const square = function(number){
    return number * number
}
console.log(square(3))


function add(num1,num2){
    return sum = num1+num2
}
console.log(add(1,2))


const num1 = 20
const num2 = 40

function multiply(num1,num2){
    return `the multiples are ${num1*num2} `
}
console.log(multiply(2,4))

const myText = "Iam a string"
const newString = myText.replace("string","sausage")
console.log(newString)

const myArray = ['I', 'love', 'chocolate', 'frogs'];

