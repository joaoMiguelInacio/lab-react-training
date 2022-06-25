import { Form, FormGroup, Label, Input} from 'reactstrap';

export default function SingleColorPicker ({color, value, handleChange}) {
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label for={`${color}Value`}>{color.toUpperCase()}:</Label>
                        <Input
                            type="number"
                            name={color}
                            value={value}
                            min="0"
                            max="255"
                            onChange={(e) => handleChange(e)}
                    />
                </FormGroup>
            </Form>
        </div>
	)
}