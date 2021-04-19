const arrOfPeople = [
    {
    id: 2,
    name: "Gladis Knight",
    age: 60,
    skillSet: "singer",
    placeBorn: "Detroit, Michigan"
    },
    {
    id: 3,
    name: "Albert Fisherman",
    age: 41,
    skillSet: "Teacher",
    placeBorn: "Las Vegas, Nevada"
    },
    {
    id: 4,
    name: "Gip Butler",
    age: 21,
    skillSet: "Navy Seal",
    placeBorn: "Byram, Mississippi"
    },
    {
    id: 5,
    name: "Cat Williams",
    age: 31,
    skillSet: "Web Developer",
    placeBorn: "Buda, Texas"
    },
    {
    id: 6,
    name: "Hosea Jackson",
    age: 24,
    skillSet: "Firefighter",
    placeBorn: "New Orleans, Louisiana"
    },
    {
    id: 7,
    name: "Ralph Waldo",
    age: 26,
    skillSet: "Computer Engineer",
    placeBorn: "Omaha, Nebraska"
    },
    {
    id: 8,
    name: "Bobby Rush",
    age: 49,
    skillSet: "Lawyer",
    placeBorn: "Mobile, Alabama"
    },
]
  
const listOfPlayers = []
const blueTeam = []
const redTeam = []
  
class player {
    constructor(){}
}
class blueTeammate {
    constructor(){}
}// ONLY USE ONE CLASS FOR BOTH TEAMS!!!
class redTeammate {
    constructor(){}
}
  
const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
listElement.append(li)
    })
  }
  
  const makePlayer = (id) => {
    console.log(`li ${id} was clicked!`)
  }