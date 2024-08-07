import { useEffect, useState } from 'react';

interface UseFormProps<T> {
	initialValue: T;
	validate: (values: T) => Record<keyof T, string>;
}

function useForm<T>({ initialValue, validate }: UseFormProps<T>) {
	const [values, setValues] = useState(initialValue);
	// string이 key, boolean 값
	const [touched, setTouched] = useState<Record<string, boolean>>({});
	// {email: '유효성을 통과하지 못한 이메일입니다.', password: '비번 틀림'}
	const [errors, setErrors] = useState<Record<string, string>>({});

	const handleChangeText = (name: keyof T, text: string) => {
		setValues({
			...values,
			[name]: text,
		});
	};

	const handleBlur = (name: keyof T) => {
		setTouched({
			...touched,
			[name]: true,
		});
	};

	const getTextInputProps = (name: keyof T) => {
		const value = values[name];
		const onChangeText = (text: string) => handleChangeText(name, text);
		const onBlur = () => handleBlur(name);

		return { value, onChangeText, onBlur };
	};

	useEffect(() => {
		const newErrors = validate(values);
		setErrors(newErrors);
	}, [validate, values]);

	return { values, errors, touched, getTextInputProps };
}

export default useForm;
