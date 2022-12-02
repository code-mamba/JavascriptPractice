clicked = document.getElementById("myButton")
clicked = window.addEventListener("click",showname)
function showname(){
    let name = prompt("enter your name")
    name = "santhosh"

    alert(`Hi ${name} how are you?` )
}



function vary(){
    console.log("---------var--------")
    for(var i = 0;i<=5;i++){
        console.log(i)
    }
    console.log(i)
    
}

vary()

console.log("----------------------------------------------------")

function letty(){
    console.log("----------let----------")
    for(let j = 0;j<=5;j++){
        console.log(j)
    }
    console.log(j)
}
letty()

let myAge = 22;
let message = "hello everyone";
let iamAlive = true;
let test =  6<5
console.log(test)

let myNameArray = ['Chris', 'Bob', 'Jim'];  

let myNumberArray = [10, 15, 40];

let dog = { name : 'Spot', breed : 'Dalmatian' };

console.log (myNameArray[0])

console.log(myNumberArray[2])

console.log(dog)

console.log(dog.breed)

console.log(typeof dog)

console.log(typeof myNameArray)

console.log(typeof message)





