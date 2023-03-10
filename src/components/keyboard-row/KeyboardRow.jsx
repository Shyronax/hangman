import { KeyboardLetter } from '../keyboard-letter/KeyboardLetter'

export const KeyboardRow = ({row}) => {
    return(
        <div className="keyboard__row">
            {row.map((character) =>
                <KeyboardLetter character={character}/>
            )}
        </div>
    )
}