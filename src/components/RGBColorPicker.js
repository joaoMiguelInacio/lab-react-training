import { useState } from "react";
import { Form, FormGroup, Label, Input} from 'reactstrap';

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
    function handleRChange (e) {
        e.preventDefault();
        const number = Math.max(min, Math.min(max, Number(e.target.value)));
		setRValue(number);
        const colorHex = rgbToHex(rValue, gValue, bValue) ;
        setColor (colorHex);
	};
    function handleGChange (e) {
        e.preventDefault();
        const number = Math.max(min, Math.min(max, Number(e.target.value)));
		setGValue(number);
        const colorHex = rgbToHex(rValue, gValue, bValue) ;
        setColor (colorHex);
	};
    function handleBChange (e) {
        e.preventDefault();
        const number = Math.max(min, Math.min(max, Number(e.target.value)));
		setBValue(number);
        const colorHex = rgbToHex(rValue, gValue, bValue) ;
        setColor (colorHex);
	};
    return (
        <>
        <Form>
            <FormGroup>
                <Label for="rValue">R:</Label>
                    <Input
                        type="number"
                        name="r"
                        value={rValue}
                        min="0"
                        max="255"
                        onChange={(e) => handleRChange(e)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="gValue">G:</Label>
                    <Input
                        type="number"
                        name="g"
                        value={gValue}
                        min="0"
                        max="255"
                        onChange={(e) => handleGChange(e)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="bValue">B:</Label>
                    <Input
                        type="number"
                        name="b"
                        value={bValue}
                        min="0"
                        max="255"
                        onChange={(e) => handleBChange(e)}
                />
            </FormGroup>
        </Form>
        <div>
            <div style={{backgroundColor : `${color}`, height:100, width:100, border: `solid black`}}></div>
            <p>rgb ({rValue}, {gValue}, {bValue})</p>
        </div>
        </>
	)
}