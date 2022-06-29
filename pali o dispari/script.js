/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


const evenOdd = prompt("scegli pari o dispari?")
const insertNumber = parseInt(prompt("inserisci un numero da 1 a 5"))
console.log(evenOdd)
console.log('il tuo numero è ' + insertNumber)


function getRandomNumber(min = 1, max = 5) {
    const randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;;
    return randomNumber
}

const computerNumber = getRandomNumber(1, 5)



console.log("il numero del computer è " + computerNumber)

const sum = insertNumber + computerNumber

console.log("la somma dei numeri è " + sum)

function isEven(number) {
    let result;
    if (number % 2 === 0) {
        result = "il numero è pari";

    }
    else { result = false; }

    return result = "il numero è dispari"

}

const sumResult = isEven(sum)

console.log (sumResult)



