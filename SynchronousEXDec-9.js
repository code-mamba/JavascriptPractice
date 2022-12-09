const number = document.querySelector("#putnum")
var gen = document.getElementById("gen")
var Reload = document.getElementById("Reload")
var Pout = document.querySelector('p')
gen.addEventListener('click',()=>{
    let num = number.value
    for(var i = 1;i<num;i++){
        console.log(i)
    }
    
    Pout.textContent = `generated number${i}`
    

})
Reload.addEventListener('click',()=>{
 document.location.reload();
}

)




