function Random(props) {
    const {max, min} = props;
    return (
        <p>
            Random Value between {min} and {max} => {Math.floor(Math.random() * (max - min) + min)}
        </p>
    )
}

export default Random;