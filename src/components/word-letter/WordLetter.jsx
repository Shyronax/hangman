export const WordLetter = ({letter, found}) => {
    let thisLetterFound = false;
    found.forEach((letterFound)=>{
        if(letter === letterFound){
            thisLetterFound = true;
        }
    })
    if (thisLetterFound === true){
        return(
            <div className="word__letter--found word__letter" character={letter}>
                {letter}
            </div>
        )
    } else {
        return(
            <div className="word__letter" character={letter}>

            </div>
        )
    }
}