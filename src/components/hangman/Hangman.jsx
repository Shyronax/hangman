export const Hangman = ({hangmanCount}) => {
    if (hangmanCount < 9){
        return(
            <div className="hangman">
                Vous avez utilisé {hangmanCount} chances sur 8!
            </div>
        )
    } else {
        return(
            <div className="hangman--perdu">
                Vous avez perdu!
            </div>
        )
    }
}