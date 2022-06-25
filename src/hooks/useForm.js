import { useState } from "react";

export default  function useForm (initialValues) {
	const [values, setValues] = useState(initialValues);

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const resetFields = () => {
        console.log("resetFields function, useForm.js", values);
		const copy = { ...values };
		for (const element in copy) {
			copy[element] = "";
		}
		setValues(copy);
	};

	return [values, handleChange, resetFields];
}
