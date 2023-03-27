import { KeyboardRow } from '../keyboard-row/KeyboardRow'

export const Keyboard = ({onCheck}) => {
    const row1 = ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const row2 = ["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"];
    const row3 = ["W", "X", "C", "V", "B", "N"];

    return (
        <div className="keyboard">
            <KeyboardRow row={row1} onCheck={onCheck}/>
            <KeyboardRow row={row2} onCheck={onCheck}/>
            <KeyboardRow row={row3} onCheck={onCheck}/>
        </div>
    )
}