import React from 'react';
import s from './Title.module.scss';

type PropsType = {
	title: string
}

export const Title = ({title}: PropsType) => {
	return <h1 className={s.title}>{title}</h1>
};
