export const Hangman = ({hangmanCount, word}) => {
    if (hangmanCount < 9){
        return(
            <div className="hangman">
                Vous avez utilisé {hangmanCount} chances sur 8!
            </div>
        )
    } else {
        return(
            <div className="hangman hangman--perdu">
                Vous avez perdu! Le mot était <strong>"{word}"</strong>!
            </div>
        )
    }
}