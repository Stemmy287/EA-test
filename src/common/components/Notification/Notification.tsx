import React from 'react';
import s from './Notification.module.scss';
import {ReactComponent as Close} from 'common/icons/close.svg';
import { Button } from '../Button/Button';

type PropsType = {
	title: string
	message: string
	onClose: () => void
}

export const Notification = ({title, message, onClose}: PropsType) => {
	return (
		<div className={s.container}>
			<Close className={s.close} onClick={onClose}/>
			<h3>{title}</h3>
			<span>{message}</span>
			<div className={s.btn}>
				<Button  callback={onClose}>
					Close
				</Button>
			</div>

		</div>
	);
};
