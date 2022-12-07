const person={
    name: ['dhanush','madee'],
    anotherName:{
                name1:'Batman',
                name2:'Superman'
            },
    age:22,
    bio:function(){
        return `${this.name[0]},${this.name[1]} there age is ${this.age}`
    }

}
// ---------------------------------------------DOT NOTATION-----------------------------------------------------------

// console.log(person)
// console.log(person.name[0])
console.log(person.bio())
// console.log(person.anotherName)
person.anotherName.name1="superman"//changing the values of object property in object
person.anotherName.name2 = "batman"//changing the values of object property in object
console.log(person.anotherName)


//-----------------------------------_BRACKET NOTATION----------------------------------------------------
console.log(person['bio']())
console.log(person['name'][0])
console.log(person['anotherName'])
person['name'][0]="madee"
person['name'][1]='dhanush'
console.log(person['name'])
console.log(person['anotherName']['name2'])

// -----------------------------------------Setting object member to the object-------------------------------------

person.farwell = function(){
    return "Bye Bye all"
}

console.log(person.farwell())

person.place = "chennai"

console.log(person)

// ----------------------------------------------------------------------------------------
function objCreate(name){
    obj = {

    }
    obj.name=name
    obj.greetings=function greet(){ 
        return`hello ${this.name}`
    }
    return obj
}

var Dhanush = objCreate("Dhanush")
console.log(Dhanush.name)
console.log(Dhanush.greetings())
console.log(Dhanush)

