import useForm from "../hooks/useForm";
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';

export default function SignUpForm ({handleFormInput}) {
	const [values, setValues, resetFields] = useForm({
		email: "",
		password: "",
		nationality: "",
	});

	function handleSubmit (event) {
		event.preventDefault()
        if (values.nationality === "") {
            values.nationality = "en";
        }
		if (values.email === "" || values.password === "") {
			return;
		}
        handleFormInput(values);
		resetFields();
	}
	return (
        <Form action="" onSubmit={handleSubmit}>
            <FormGroup>
				<Label for="email">Email:</Label>
				<Input
					type="email"
					id="email"
					name="email"
					value={values.email}
					onChange={setValues}
				/>
            </FormGroup>
            <FormGroup>
				<Label for="password">Password</Label>
				<Input
					type="password"
					id="password"
					name="password"
					value={values.password}
					onChange={setValues}
				/>
			</FormGroup>
			<FormGroup>
                <Label for="nationality">
                Select
                </Label>
                <Input
                    name="nationality" 
                    id="nationality"
                    type="select"
                    onChange={setValues}
                >
                    <option value="en">En</option>
                    <option value="fr">Fr</option>
                    <option value="de">De</option>
                </Input>
            </FormGroup>
			<Button color="success">
                Submit
            </Button>
		</Form>
	)
}