
// --------------------------------Inheritance----------------------------------------

class Person{
    constructor(name){
        this.name = name
    }
    introduceYourself(){
        return`Hi I'm ${this.name}`
    }
}

class Professor extends Person{


    constructor(name, teaches){
        super(name)
        this.teaches = teaches
    }
    grade(subject){
        return `Evaluating ${subject} paper.`
    }
    introduceYourself(){
        return `Hi I'm ${this.name} I'm Your new ${this.teaches} teacher.`
    }
}
class Students extends Person{

    #year
    constructor(name, year){
        super(name)
        this.#year = year
    }
    introduceYourself(){
        return `hi I'm ${this.name} I'm a ${this.#year} year student`
    }
    isSenior(){
        if(this.#year>2){
            return `I'm Seniour ${this.#year}`
        }
        else{
            return `I'm not a senior ${this.#year}`
        }
    }
}

var Person1 = new Person("Dhanush")
console.log(Person1.introduceYourself())

var Person1 = new Students("Dhanush",1)
console.log(Person1.year)

console.log(Person1.introduceYourself())
console.log(Person1.isSenior())

 
var Person1 = new Professor('Dhanush','maths')
console.log(Person1.introduceYourself())
console.log(Person1.grade('English'))





