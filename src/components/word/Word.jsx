import { WordLetter } from '../word-letter/WordLetter'



export const Word = ({wordLetters}) => {
    return(
        <div className="word">
            {
                wordLetters.map((letter) => {
                    return <WordLetter letter={letter} />
                })
            }
        </div>
    )
}