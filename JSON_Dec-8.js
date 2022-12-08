 let superheroes = {
    "squadName": "JusticeLeague",
  "homeTown": "America",
  "formed": 2000,
  "secretBase": "Super tower",
  "active": true,
  "members":[{
    "name": "Batman",
    "age": 37,
    "secretIdentity":"bruce wayne",
    "powers":["Detective","martial arts", "money"]
    
  },{
    "name": "superman",
    "age" : 38,
    "secretIdentity":"Clark kent",
    "powers":["fly","strength","laser Eye"]
  },{
    "name": "Wonderwoman",
    "age":100,
    "secretIdentity":"Diana",
    "powers":["immortality"]

  }]
}


console.log(superheroes)
console.log(superheroes["homeTown"])





console.log(typeof(data))
const Json = JSON.stringify(superheroes)
console.log(typeof(Json))