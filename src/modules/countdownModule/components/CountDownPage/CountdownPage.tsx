import { Footer } from 'common/components';
import React from 'react';
import s from './CountDownPage.module.scss';
import { CountDown } from './CountDown/CountDown';
import { ReactComponent as LeftSideFigure } from 'common/icons/leftSideFigure.svg';
import { ReactComponent as RightSideFigure } from 'common/icons/rightSideFigure.svg';
import { Fade } from 'react-awesome-reveal';

export const CountdownPage = () => {
	return (
		<div className={s.container}>
			<Fade delay={500} triggerOnce={true}>
				<LeftSideFigure className={s.leftSide}/>
				<RightSideFigure className={s.rightSide}/>
			</Fade>
			<CountDown/>
			<Footer />
		</div>
	);
};
