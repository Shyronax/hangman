export const KeyboardLetter = ({character, onClick}) => {
    return (
        <div className="keyboard__letter" id={character} onClick={onClick}>{character}</div>
    )
}