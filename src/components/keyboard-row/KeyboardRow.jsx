import { KeyboardLetter } from '../keyboard-letter/KeyboardLetter'

export const KeyboardRow = ({row, onCheck}) => {

    return(
        <div className="keyboard__row">
            {row.map((character) =>
                <KeyboardLetter character={character} onClick={() => onCheck(character)}/>
            )}
        </div>
    )
}