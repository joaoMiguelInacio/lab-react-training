import { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

export default function RGBColorPicker () {
    const [rValue, setRValue] = useState (0);
    const [gValue, setGValue] = useState (0);
    const [bValue, setBValue] = useState (0);
    const [color, setColor] = useState("black");
    const min = 0;
    const max = 255;
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    function rgbToHex(rValue, gValue, bValue) {
        return "#" + componentToHex(rValue) + componentToHex(gValue) + componentToHex(bValue);
    }
    function handleChange (e) {
        e.preventDefault();
        const number = Math.max(min, Math.min(max, Number(e.target.value)));
        const color = e.target.name;
        switch (color) {
            case ("r"):
                setRValue(number);
                break;
            case ("g"):
                setGValue(number);
                break;
            default:
                setBValue(number);
        }		
        const colorHex = rgbToHex(rValue, gValue, bValue) ;
        setColor (colorHex);
	};
    return (
        <>
        <SingleColorPicker color = "r" value={rValue} handleChange={handleChange}/>
        <SingleColorPicker color = "g" value={gValue} handleChange={handleChange}/>
        <SingleColorPicker color = "b" value={bValue} handleChange={handleChange}/>
        <div>
            <div style={{backgroundColor : `${color}`, height:100, width:100, border: `solid black`}}></div>
            <p>rgb ({rValue}, {gValue}, {bValue})</p>
        </div>
        </>
	)
}