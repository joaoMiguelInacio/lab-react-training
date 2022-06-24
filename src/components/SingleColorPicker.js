import { useState } from "react";
import { Form, FormGroup, Label, Input} from 'reactstrap';

export default function SingleColorPicker ({color, value, handleSubmit}) {
    const [number, setNumber] = useState(value);
    const min = 0;
    const max = 255;
    function handleChange (e) {
        e.preventDefault();
        const number = Math.max(min, Math.min(max, Number(e.target.value)));
        console.log(e.target.name);
        console.log(number);
		setNumber(number);
	};
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="email">{color.toUpperCase()}:</Label>
                        <Input
                            type="number"
                            name={color}
                            value={number}
                            min="0"
                            max="255"
                            onChange={(e) => handleChange(e)}
                    />
                </FormGroup>
            </Form>
        </div>
	)
}