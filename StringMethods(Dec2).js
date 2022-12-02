const string = 'This is my string';
document.write(string)
var lenOfString = string.length
document.write(lenOfString)


const browserType = 'MoZilLa';
const browserType2 = 'zilla'
let num = 6

console.log(browserType[1])// o
console.log(browserType [browserType.length-1])  //a
console.log(browserType.indexOf("zilla")) //2
console.log(browserType.indexOf('x'))//-1
console.log(browserType.slice(0,3)) //MoZ
console.log(browserType.toLowerCase())//mozilla
console.log(browserType.toUpperCase())//MOZILLA
console.log(browserType.replace('MoZ','van'))//vanilLa
console.log(browserType.charAt(2))//Z
console.log(browserType.charCodeAt(6))//97 ASCI value of a
console.log(browserType.charCodeAt(4))//108 ASCI value of l
console.log(browserType.includes('Z'))//true
console.log(browserType2.lastIndexOf('l'))//3
console.log(browserType.padEnd(30,"."))
console.log(browserType.padStart(30,"."))
console.log(browserType.repeat(10))
console.log(browserType.split("l"))
console.log(browserType.substring(1,3))
console.log(browserType.substring(2))
console.log(num.toString())

const greeting = '   Hello world!   ';
console.log(greeting.trim())
console.log(greeting.trimEnd())
console.log(greeting.trimStart())

let quote = 'To be or not to be';
console.log(quote.replaceAll("be","TO"))
console.log(browserType.concat(browserType2))

//starts with

function startsWith(){
if (browserType.startsWith('zilla')) {
  console.log('Found zilla!');
} else {
  console.log('No zilla here!');
}
}//no zilla here!

startsWith()

function endwith(){
    if(browserType.endsWith("zilla")){
        console.log("Found zilla")
    }
    else{
        console.log("No zilla")
    }
}
endwith()

const tagline = 'MDN - Resources for developers, by developers';
console.log(tagline.indexOf('developers'));

