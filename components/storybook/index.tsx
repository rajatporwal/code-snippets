import Colors from "./colors"
import TypingEffect from "./typing-effect"
import Typography from "./typography"

const StoryBook = () => {
    return <>
    <div className="pad-xl">
        <TypingEffect />
    </div>
    <Typography />
    <Colors />
    </>
}

export default StoryBook