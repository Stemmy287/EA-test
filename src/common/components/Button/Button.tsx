import React, { ReactNode } from 'react';
import s from './Button.module.scss';

type PropsType = {
	children: ReactNode
	callback: () => void
}

export const Button = ({ children, callback }: PropsType) => {
	return <button className={s.button} onClick={callback}>{children}</button>;
};
