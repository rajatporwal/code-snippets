import Loaders from "./loaders"
import Theme from "./theme"
import TypingEffect from "./typing-effect"

const StoryBook = () => {
    return <>
    <div>
        <Loaders />
    </div>
    <div className="pad-xl">
        <TypingEffect />
    </div>
    <div>
        <Theme />
    </div>
    </>
}

export default StoryBook