interface TypeWriterAnimationProps {
  text: string
}

const TypeWriterAnimation = (props: TypeWriterAnimationProps) => {
  const { text } = props
    return <div className="typewriter">
    <h1 className="heading-3">{text}</h1>
  </div>
}

export default TypeWriterAnimation