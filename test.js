const myCar = {
    make: 'Honda',
    model: 'Accord',
    year: 1998,
}
debugger
console.log({...myCar})

function myfunc(){
    myCar.make = "Maruti"
    debugger
    console.log({...myCar})
    
}


myfunc()
debugger
console.log({...myCar})