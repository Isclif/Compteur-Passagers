

let compter = document.getElementById("compter")

console.log(compter)

let save = document.getElementById("save")

let plus = 0

function incrementer() {
    plus += 1

    compter.textContent = plus
}

function enregistrer() {
    let bouton2 = plus + " - "

    save.textContent += bouton2
    compter.textContent = 0
    plus = 0

}
























// document.getElementById("compter").innerText=4
/*
let nom = "Ngnetchedjeu "
let prenom = "Steeve"
let salutation = "Bonjour Msr "
let salutations = salutation + nom + prenom
console.log(salutations)

let bonusPoints = 50
bonusPoints = bonusPoints - 25
console.log(bonusPoints)
bonusPoints = bonusPoints + 45
console.log(bonusPoints)

let compter = 2

console.log(compter)"

let myAge = 20
let humenDogRatio = 45
let myDogAge = myAge * humenDogRatio

console.log(myDogAge)*/