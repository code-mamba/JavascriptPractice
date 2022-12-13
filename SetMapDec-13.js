s = new Set()
s.add(1)
s.add(3)
s.add(3)
s.add(4)
console.log(s.size)
s.add("hello")
s.add("world")
for(let i of s.values()){
    console.log(i)
}

m = new Map()
console.log(m.set("hello",42))
console.log(m.get("hello"))
m.set("world",43)
console.log(m)