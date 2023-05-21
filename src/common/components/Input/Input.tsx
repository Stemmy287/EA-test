import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import s from './Input.module.scss';
import { ReactComponent as Arrow } from 'common/icons/arrow-right.svg';

type PropsType = {
	callback: () => void
	error?: string
}

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement>

export const Input = ({
												callback,
												error,
												...restProps
											}: PropsType & DefaultInputPropsType) => {
	return (
		<div className={s.inputWrapper}>
			<input
				className={s.input}
				{...restProps}
			/>
			<button className={s.button} onClick={callback}>
				<Arrow />
			</button>
			{error && <div className={s.error}>{error}</div>}
		</div>
	);
};
