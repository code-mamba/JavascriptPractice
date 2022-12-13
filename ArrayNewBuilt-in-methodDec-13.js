console.log(myArr = [1,2,4,5,7].find(e => e>5))

myArr = [1,2,4,5,6,78,65,43,3]
let fil = myArr.filter(arr=>arr>5)
console.log(fil);

Arr2 = [2,3,4,5]
let GreaterThan3 = Arr2.filter(e=>e>3) 
console.log(GreaterThan3)

let findIndex = Arr2.findIndex(x=>x>3)


myString = "hello"
console.log(myString.indexOf("llo")===2)
console.log(myString.indexOf("ello"))