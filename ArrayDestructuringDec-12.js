let myArr = [1,2,3,4]
let[a,b,c,d] = myArr
console.log(a,b,c,d)

let Arr1 = ["dhanush","santhosh","mukesh"]

let[name1,,name3] = Arr1

console.log(name1)
console.log(name3)

let Name = "My Name is Dhanush".split(' ')

let[M,N,I,D] = Name
console.log(Name)
console.log(M)
console.log(N)
console.log(I)
console.log(D)

function SumAndMultiply(a,b){
    return[a+b,a*b]

}
let [sum, mult] = SumAndMultiply(1,2)
console.log(sum)
console.log(mult)


const employee = {
    empName: "Dhanush",
    age: 22,
    Department:"LAMP",
    Address:{
        City:"Chennai",
        Country:"india"
    }
}

const {empName:Name1,age:Age,Department:dept,Address:address} = employee
console.log(Name1)
console.log(Age)
console.log(dept)
console.log(address.City)