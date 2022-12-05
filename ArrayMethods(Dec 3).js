const  array1 = ["Squirel", "tortoise","frog","lizard"]
const array2 = ["vj","Ajith","Surya","Dhanush"]
const array3 = [1,2,3,4]

let index =1
console.log(array1.at(index))
let Name1 = array1.concat(array2)
let Name2 = array1.concat(array2,array3)
console.log(Name2)
console.log(Name2.concat([8,9,10]))
