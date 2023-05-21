import React from 'react';
import s from './CountDown.module.scss';
import { ReactComponent as Logo } from 'common/icons/logo.svg';
import { Button } from '../../../../../common/components';
import { ReactComponent as Arrow } from 'common/icons/arrow-right.svg';
import { Timer } from './Timer/Timer';
import { Title } from '../../../../../common/components/Title/Title';

export const CountDown = () => {

	return (
		<div className={s.container}>
			<Logo className={s.logo} />
			<div className={s.infoContainer}>
				<Title title="Under Construction"/>
				<span className={s.info}>We're making lots of improvements and will be back soon</span>
			</div>
			<Timer />
			<div className={s.eventNav}>
				<span>Check our event page when you wait:</span>
				<Button callback={() => {}}>
					Go to the event
					<Arrow />
				</Button>
			</div>
		</div>
	);
};
