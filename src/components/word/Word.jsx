import { WordLetter } from '../word-letter/WordLetter';
import { useEffect } from 'react';



export const Word = ({wordLetters, setWordLetters, found, setFound}) => {
    return(
        <div className="word">
            {
                useEffect(() => {
                    wordLetters.map((letter) => {
                        return <WordLetter letter={letter} />
                    })
                }, [wordLetters])
            }
        </div>
    )
}