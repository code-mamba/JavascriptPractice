class superHuman{
   
    constructor(supername,superpower,city){
        this.supername = supername
        this.superpower = superpower
        this.city = city
        
    }


    personalInfo(){
        console.log(`Hi i'm ${this.supername} I'm from ${this.city}  My power is ${this.superpower} `) 
    }

}

const batman = new superHuman('Batman','detective','Gotham City')
console.log(batman.name)
console.log(batman.power)
batman.personalInfo();

const superman = new superHuman("superman",['fly','strength','laser eye'],'metropolis')
superman.personalInfo()