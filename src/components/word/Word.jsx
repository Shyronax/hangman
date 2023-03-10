import { WordLetter } from '../word-letter/WordLetter'

let chosenWord = "banane";

// const data = "locale=fr-FR";

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === this.DONE) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("GET", "http://localhost:3001/");
// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

// xhr.send(data);
chosenWord.replaceAll('é', 'e');
chosenWord.replaceAll('è', 'e');
chosenWord.replaceAll('ê', 'e');
chosenWord.replaceAll('à', 'a');
chosenWord.replaceAll('â', 'a');
chosenWord.replaceAll('ô', 'o');
chosenWord.replaceAll('î', 'i');
chosenWord.replaceAll('ù', 'u');
let chosenWordLetters = chosenWord.split('');

export const Word = () => {
    return(
        <div className="word">
            {
                chosenWordLetters.map((letter) => {
                    return <WordLetter letter={letter} />
                })
            }
        </div>
    )
}