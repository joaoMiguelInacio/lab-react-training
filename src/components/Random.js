function Random(props) {
    return (
        <p>
            Random Value between {props.min} and {props.max} => {Math.floor(Math.random() * (props.max - props.min) + props.min)}
        </p>
    )
}

export default Random;