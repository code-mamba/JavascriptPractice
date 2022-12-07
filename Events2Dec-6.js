const Box = document.querySelector(".Box")
var incoming = 0
var outgoing = 0
Box.addEventListener('mouseenter',()=>{
    incoming+=1
    Box.style.borderColor = "green"
    console.log(incoming)
    const incomingList = document.createElement("li")
    incomingList.textContent = `incoming ${incoming}`
    let unorderlist = document.querySelector("ul")
    unorderlist.appendChild(incomingList)
})
Box.addEventListener('mouseleave',()=>{
    outgoing+=1
    Box.style.borderColor = "red"
    console.log(outgoing)
    const outgoingList = document.createElement("li")
    outgoingList.textContent = `outgoing ${outgoing}`
    let unorderlist = document.querySelector("ul")
    unorderlist.appendChild(outgoingList)
})