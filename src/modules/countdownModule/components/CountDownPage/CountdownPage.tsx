import { Footer } from 'common/components';
import React from 'react';
import s from './CountDownPage.module.scss';
import { CountDown } from './CountDown/CountDown';
import { ReactComponent as LeftSideFigure } from 'common/icons/leftSideFigure.svg';
import { ReactComponent as RightSideFigure } from 'common/icons/rightSideFigure.svg';

export const CountdownPage = () => {
	return (
		<div className={s.container}>
			<LeftSideFigure className={s.leftSide}/>
			<RightSideFigure className={s.rightSide}/>
			<CountDown/>
			<Footer />
		</div>
	);
};
