function BoxColor(props) {
    const {r, g, b} = props;
    function componentToHex(c) {
        /* Please never use var, just let or const. var leads to many code errors */
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    } 
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    const divStyle = {
        color: 'white',
        padding: 50,
        backgroundColor : `rgb(${r}, ${g}, ${b})`
    };
    return (
        <p style={divStyle}>
            rgb({r}, {g}, {b}), {rgbToHex(`${r}`, `${g}`,`${b}`)}
        </p>
    )
}

export default BoxColor;