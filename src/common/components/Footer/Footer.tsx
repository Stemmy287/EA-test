import React from 'react';
import s from './Footer.module.scss';
import { Input } from '../Input/Input';
import {ReactComponent as Arrow} from 'common/icons/arrow-down.svg';

export const Footer = () => {
	return (
		<footer className={s.container}>
				<Input
					value={''}
					onChange={() => {}}
					placeholder="Enter your Email and get notified"
					callback={() => {}}
				/>
			<button className={s.button}>Other Events <Arrow className={s.arrow}/></button>
		</footer>
	);
};
