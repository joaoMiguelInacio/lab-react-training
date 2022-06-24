import { useState } from "react";
import SingleColorPicker  from "./SingleColorPicker";

export default function RGBColorPicker () {
    const [rValue, setRValue] = useState (0);
    const [gValue, setGValue] = useState (0);
    const [bValue, setBValue] = useState (0);
    function handleSubmit (e) {
        e.preventDefault();
        console.log(e.target.value)
    }
    return (
        <>
        <SingleColorPicker 
            color="r"
            value={rValue}
            handleSubmit={handleSubmit}
        />
        <SingleColorPicker 
            color="g"
            value={gValue}
            handleSubmit={handleSubmit}
        />
        <SingleColorPicker 
            color="b"
            value={bValue}
            handleSubmi={handleSubmit}
        />
        <div>
            <div style={{backgroundColor : `rgb (${rValue}), (${gValue}), (${bValue})`, height:100, width:100, border: "solid black"}}></div>
            <p>rgb ({rValue}, {gValue}, {bValue})</p>
        </div>
        </>
	)
}