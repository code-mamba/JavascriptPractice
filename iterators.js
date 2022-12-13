let mySet = new Set([1,2,3,4,5,5,4,3])

let iterator = mySet[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

let fibonacci = {
    [Symbol.iterator]() {
        let first = 0, second = 1
        return {
           next () {
               [ first, second ] = [ second, first + second ]
               return { done: false, value: second }
           }
        }
    }
}

for (let n of fibonacci) {
    if (n > 1000)
        break
    console.log(n)
}


