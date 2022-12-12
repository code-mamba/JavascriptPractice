export default class User{
    constructor(name,age){
        this.name = name,
        this.age = age
    }
}
 export function YourName(user){
    console.log(`I'm ${user.name}`)
  }  
 export function YourAge(user){
    return `my Age is ${user.age}`
  }

