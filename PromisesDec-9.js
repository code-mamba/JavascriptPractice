// alarmBtn = document.getElementById("alarm")
// para = document.getElementById("first-P")

// function Alarm(){
//     setTimeout(()=>{
//         para.textContent = `Wake up`
//     },3000)
// }

// alarmBtn.addEventListener('click',Alarm)
// -------------------------------------------------------------------------------------------

const Name = document.getElementById("nameinp")
const Timedelay = document.getElementById('delay')
const setAlarm = document.getElementById("setalarm")
const output = document.getElementById('showOut')


console.log(delay)
setAlarm.addEventListener('click',()=>{
    var person = document.getElementById("nameinp").value
    var delay = document.getElementById('delay').value
    console.log(delay)
    console.log(person)
    var p = new Promise((resolve, reject) => {
        
        if(delay>1000){
            setTimeout(()=>{
                resolve(`Wakeup ${person}`)
            },delay)
        }
        else{
         
            reject("set alarm should not be in negative")
            
        }
    })
    
    p.then((message)=>{
        output.textContent = message
    })
    p.catch((message)=>{
        output.textContent = message
    })
})

