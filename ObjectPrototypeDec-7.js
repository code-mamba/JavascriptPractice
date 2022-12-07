const myObject = {
    
    city:"chennai",
    greet(name){
        this.name = name,
        console.log(`Hi I'm ${this.name} from ${this.city} `)
    }
}

var Dhanush = myObject.greet("Dhanush")
console.log(Dhanush)

// ----------------------------------------Shadowing properties------------------------------------------

const myDate = new Date(2022,03,26)
console.log(myDate.getFullYear());

myDate.getFullYear=()=>{
    console.log("two thousand twenty two")
}
console.log(myDate.getFullYear())
