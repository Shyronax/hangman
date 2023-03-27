import { WordLetter } from '../word-letter/WordLetter';
import { useEffect } from 'react';



export const Word = ({wordLetters, found}) => {
    return(
        <div className="word">
            {wordLetters.map((letter, index) => {
                console.log(letter);
                return <WordLetter letter={letter} key={index} found={found} />
            })
            }
        </div>
    )
}