const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
for(const cat of cats){
    console.log(cat)
}

// Map function

function ToUpper(string){
    return string.toUpperCase()
}
const cats1= ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

var cats2 = cats1.map(ToUpper)
console.log(cats2)




function AddWith2(num){
  return sum = num+2
}

var numbers = [2,4,5,67,89,]
number2 = numbers.map(AddWith2)
console.log(number2)

const Animals = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const filtered = cats.filter((cat) => cat.startsWith('L'));
console.log(filtered);
// [ "Leopard", "Lion" ]


// tables
const box = document.getElementsByClassName("box1")[0]

btn1 = document.querySelector("button")
btn2 = document.getElementById("button2")
btn1.addEventListener("click",showTables)


function showTables(){
    var table = 1
var multiples = 1
for(let i=1;i<=10;i++){
    result = multiples*table
    var tableRes = `${table}*${multiples}=${result}`
    multiples+=1
    const para = document.createElement("p")
    para.innerText = tableRes
    box.appendChild(para);

}
}

const myPets = ["Eva", "Janaki", "jackie","tommy"]
var message = "my pets are "
var i = 0;
while(i<=myPets.length-1){
    
    var message2 = message +=` ${myPets[i]}, `
    i++;
}

console.log(message2)

