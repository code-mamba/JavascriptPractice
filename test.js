const myCar = {
    make: 'Honda',
    model: 'Accord',
    year: 1998,
}
console.log(myCar)

function myfunc(){
    myCar.make = "Maruti"
    console.log(myCar)
    
}


myfunc()
console.log(myCar)