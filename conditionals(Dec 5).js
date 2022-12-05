var select = document.querySelector("select")
var para = document.querySelector("p")


select.addEventListener("change", chooseOption)



function chooseOption(){
    const choose = select.value

    if(choose === "sandwich"){
        para.textContent = "Sandwich Rs.60"
    }
    else if(choose === "burger"){
        para.textContent = "Burger Rs.80"
    }
    else if(choose === "salad"){
        para.textContent = "salad Rs.40"
    }
    else if(choose === "juice"){
        para.textContent = "Juice Rs 35"
    }
}


var temp = document.getElementById("temp")
var weatherHeading = document.getElementById("showWeather")
var description = document.getElementById("desc")
var button = document.getElementById('btn')

button.addEventListener("click",showDesc)

function showDesc(){

    const tempval = Number(temp.value)
if(tempval>=60){
    weatherHeading.textContent = "Sunny"
    weatherHeading.style.color = "red"
    if(tempval=>60 && tempval<=65){
        description.textContent ="Today is hot"
    }
    else if(tempval>65){
        description.textContent = "Today is too Hot"
    }
}
else if (tempval>=40 && tempval<60){
    weatherHeading.textContent = "moderate"
    weatherHeading.style.color = "yellow"
    if(tempval>40 && tempval<50){
        description.textContent = "moderate weather not hot"
    }
    else if(tempval>50 && tempval<60){
        description.textContent = "quiet hot today"
    }
}
else if(tempval<=40){
    weatherHeading.textContent = "cool climate"
    weatherHeading.style.color = "blue"
    if(tempval>=20&&tempval<=40){
        description.textContent = "cool outside"
    }
    else if (tempval<20){
        description.textContent = "snowy"
    }
}


}

themeSelect = document.getElementById("selectTheme")
themeSelect.addEventListener("change",changeBg)


backgroundTheme = document.getElementById("theme")


function changeBg(){
    themeColor = themeSelect.value
if(themeColor === "white"){
    backgroundTheme.style.backgroundColor = "white"
    backgroundTheme.style.color = "black"
}
if(themeColor === "black"){
    backgroundTheme.style.backgroundColor = "black"
    backgroundTheme.style.color= "white"
}
}



