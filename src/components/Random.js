/* Suggestion: instead of having the Math thingy inside the p tag,
create a variable outside and use it in the p tag. */

function Random(props) {
    const {max, min} = props;
    const random = Math.floor(Math.random() * (max - min) + min)
    return (
        <p>
            Random Value between {min} and {max} => {random}
        </p>
    )
}

export default Random;