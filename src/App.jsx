import { Word } from './components/word/Word'
import { Keyboard } from './components/keyboard/Keyboard'

const App = () => {
    return(
        <div className="game">
            <Word />
            <Keyboard />
        </div>
    )
}

export default App