/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

/* // ?1 - Come la chiamo?
// ?2 - Ho bisogno di parametri? (se si quali?)
// ?3 - Devo restituire qualcosa? (se si cosa? di che tipo?)
// ?4 OPZIONALE:  Qualcosa  potrebbe andare storto? (se si, cosa?) */


//creo un prompt nel quale chiedo la parola da inserire

let inputWord = prompt("inserisci una parola", "giraffa")



function reverseWord(word) {
    let result = '';
    for (let i = word.length - 1; i >= 0; i--) { result += word[i]; }

    return result;
}

const reversedWord = reverseWord(inputWord);

console.log(reversedWord);

let message = "la parola è palindroma"


if (reversedWord === inputWord) {


}

else {
    reversedWord != inputWord
    message = "la parola non è palindroma"

}

console.log(message)