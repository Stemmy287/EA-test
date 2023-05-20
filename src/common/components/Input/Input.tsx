import React from 'react';
import s from './Input.module.scss';
import {ReactComponent as Arrow} from 'common/icons/arrow-right.svg';

type PropsType = {
	value: string
	onChange: () => void
	callback: () => void
	placeholder?: string
	disabled?: boolean
}

export const Input = ({value, onChange, callback, placeholder, disabled}: PropsType) => {
	return (
		<div className={s.inputWrapper}>
			<input
				className={s.input}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				disabled={disabled}
			/>
			<button className={s.button} onClick={callback}>
				<Arrow/>
			</button>
		</div>
	);
};
