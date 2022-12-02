const RandomValue = Math.floor(Math.random()*20+1)
var guessCount = 0
console.log(RandomValue)

function checknumber(){
    var userInp = document.getElementById("Userinput").value
    guessCount+=1
    console.log(userInp)

    if(guessCount <= 5){
        if(userInp>RandomValue){
            console.log("too high")
            var high = document.getElementById("display")
            high.style.color = "white"
            high.style.backgroundColor = "orange"
            high.textContent="too high"
            var attempt = document.getElementById("attempt")
            attempt.textContent = `${guessCount}: Attempt`
        }

        else if(userInp==RandomValue){
            console.log("value matched")
            var match = document.getElementById("display")
            match.style.color = "white"
            match.style.backgroundColor = "green"
            match.textContent="number matched You Won!!"
            var attempt = document.getElementById("attempt")
            attempt.textContent = `${guessCount}: Attempt`
    
        }

        else{
            console.log("too low")
            var low = document.getElementById('display')
            low.style.color = "white"
            low.style.background  = "blue"
            low.textContent = "Too Low"
            var attempt = document.getElementById("attempt")
            attempt.textContent = `${guessCount}: Attempt`
        }
        
    }
    else if(guessCount>=5){
        var attempt = document.getElementById("attempt")
        attempt.textContent = `${guessCount}: Attempt`
        console.log("Your attempt is over")
        document.getElementById("Userinput").disabled=true
        var attemptOver = document.getElementById("display")
        attemptOver.style.color = "red"
        attemptOver.textContent = `Your attempt is over You lost!!`


        
    }
    
}