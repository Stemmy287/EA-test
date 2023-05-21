import { ChangeEvent, useState } from 'react';

export const useInput = () => {

	const [value, setValue] = useState('');
	const [error, setError] = useState('');

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value)
	}

	return {value, onChange, error, setError, setValue}

}