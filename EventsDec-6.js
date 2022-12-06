
// click event

const box1 = document.getElementById("box1")
const button1 = document.querySelector("button")

function random(number){
    return Math.floor(Math.random()*(number+1))
}

button1.addEventListener("click",()=>{
    var changed = `rgb(${random(255)},${random(255)},${random(255)})`
    box1.style.backgroundColor = changed
})

// click Event Example-2
const btn = document.getElementById("countbtn")
var count = 0
btn.addEventListener('click',()=>{
    count+=1;
    if(count <=5)
    btn.textContent = `click count:${count}`
    else{
        count = 0
    }
    

})


// blur and focus event
const passInput = document.getElementById("pass")
const UserInput = document.getElementById("username")

passInput.addEventListener("focus",()=>{
    passInput.style.backgroundColor = "yellow"
})
passInput.addEventListener("blur",()=>{
    passInput.style.backgroundColor = ""
})

UserInput.addEventListener("focus",()=>{
    UserInput.style.backgroundColor = "orange"
})
UserInput.addEventListener("blur",()=>{
    UserInput.style.backgroundColor = "grey"
})


// db click
const aside = document.querySelector("aside")


islarge = false

aside.addEventListener('dblclick',()=>{
    if(islarge === false){
        aside.style.height = "200px"
        aside.style.width = "200px"
        aside.style.padding = "20px"
        aside.style.borderRadius = "15px"
        aside.style.backgroundColor = "yellow"
        islarge = true
    }
    else if(islarge === true){
        aside.style.height = "100px"
        aside.style.width = "100px"
        aside.style.padding = "20px"
        aside.style.borderRadius = "15px"
        aside.style.backgroundColor = "green"
        islarge = false
    }

   
})

// Mouse Event





