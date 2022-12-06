const myText = "Iam a string"
const newString = myText.replace("string","sausage")
console.log(newString)

const myArray = ["I","Love","chocolates"]
const newMyArray = myArray.join(" ")
console.log(newMyArray)

const myNum = Math.floor(Math.random())
console.log(myNum)

function myFunc(){
    alert("hello")
}
// myFunc()

function hello(name = "Dhanush"){
    console.log("Hello ",name)
}
hello("Ari")

