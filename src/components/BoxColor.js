

function BoxColor(props) {
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    } 
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    const divStyle = {
        color: 'white',
        padding: 50,
        backgroundColor : `rgb(${props.r}, ${props.g}, ${props.b})`
    };
    return (
        <p style={divStyle}>
            rgb({props.r}, {props.g}, {props.b}), {rgbToHex(`${props.r}`, `${props.g}`,`${props.b}`)}
        </p>
    )
}

export default BoxColor;