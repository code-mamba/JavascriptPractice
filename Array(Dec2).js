const shoppingList = ['bread', 'milk', 'cheese', 'hummus', 'noodles',[2,3,4]]
console.log(shoppingList)
console.log(shoppingList[0])
shoppingList[0] = "bun"
console.log(shoppingList)
console.log(shoppingList[5][1])

const birds = ['parrot','falcon','owl']
console.log(birds.indexOf('owl'))
birds.push('eagle') 
console.log(birds)
console.log(birds.pop())
birds.unshift('cockatail')
console.log(birds.shift())
console.log(birds.splice(0,2))

// for of 

var array1 =  ['a','b','c']
for(let j of array1){
    console.log(j)
}

var num = [2,2,5]
for(let i of num){
    let value =  i+1
    console.log(value)
    console.log(num)
}

const string1 = "abcd e" 
for(let st of string1){
    console.log(st)
}


// Map
var array1 = [1,4,9,16]
var map1 = array1.map(x=>x*2)
console.log(map1)

var array2 = [1,2,3,4,5,6]
var map2 = array2.map((x)=>Math.floor(Math.sqrt(x)))
console.log(map2)

var array3 = [2,4,6,8,10]
// var map3 = array3.map((res)=>Math.floor(Math.random()*5))
// console.log(map3)
for(let x of array3){
    let y = Math.floor(Math.random(x)*5)
    console.log(y)
}
