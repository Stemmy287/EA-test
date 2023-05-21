import React, { useState } from 'react';
import s from './Footer.module.scss';
import { Input } from '../Input/Input';
import {ReactComponent as Arrow} from 'common/icons/arrow-down.svg';
import { countDownApi } from '../../../modules/countdownModule/countDownApi';

export const Footer = () => {

	const [value, setValue] = useState('')
	const [error, setError] = useState('')

	const onSubmit = () => {

		const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

		if (value.match(emailFormat)) {
			countDownApi.sendEmail()
		} else if (!value) {
			setError('field is empty')
		} else {
			setError('not correct email')
		}

	}

	return (
		<footer className={s.container}>
				<Input
					value={value}
					onChange={(e) => setValue(e.currentTarget.value)}
					placeholder="Enter your Email and get notified"
					callback={onSubmit}
					onFocus={() => setError('')}
					error={error}
				/>
			<button className={s.button}>Other Events <Arrow className={s.arrow}/></button>
		</footer>
	);
};
