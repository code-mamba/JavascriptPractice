const Ptag = document.querySelector("p")
Ptag.addEventListener("click",changeName)
function changeName(){
    const name = prompt("Enter your name:")
    Ptag.textContent = `Player1:${name}`
}
