import { useState } from 'react';
import { useEffect } from 'react';
import { Word } from './components/word/Word'
import { Keyboard } from './components/keyboard/Keyboard'
import { Hangman } from './components/hangman/Hangman'



const App = () => {
    const [hangmanCount, setHangmanCount] = useState(0);
    const [found, setFound] = useState([]);
    const [word, setWord] = useState('banane');
    const [wordLetters, setWordLetters] = useState(['B','A','N','A','N','E']);
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({locale: 'fr-FR'})
      };

    // useEffect(() => {
    //   fetch('http://localhost:3001/', options)
    //     .then(response => response.json())
    //     .then(response => {
    //         console.log(response);
    //         setWord(response.word);
    //         setWordLetters(response.word.split());
    //         console.log(word);
    //         console.log(wordLetters);
    //     });
    // }, []);




    const gameOver = () => {
        console.log('perdu!');
    }

    const hangmanIncrement = () => {
        setHangmanCount(hangmanCount + 1);
        console.log(hangmanCount + "erreur(s)");
        if (hangmanCount > 8){
            gameOver();
        }
    }

    const onCheck = (keyboardCharacter) => {
        let wrong = 0;
        wordLetters.forEach(function(wordLetter){
            if(!(wordLetter === keyboardCharacter)){
                wrong += 1;
            }
        })
        if(wrong < wordLetters.length){
            document.getElementById(keyboardCharacter).classList.add('keyboard__letter--found');
        } else {
            hangmanIncrement();
        }
        ;
    }

    return(
        <div className="game">
            <Word wordLetters={wordLetters} found={found}/>
            <Keyboard onCheck={onCheck} />
            <Hangman hangmanCount={hangmanCount} />
        </div>
    )
}

export default App;