import React from 'react';
import s from './CountDown.module.scss';
import { ReactComponent as Logo } from 'common/icons/logo.svg';
import { Button } from '../../../../../common/components';
import { ReactComponent as Arrow } from 'common/icons/arrow-right.svg';
import { Timer } from './Timer/Timer';
import { Title } from '../../../../../common/components/Title/Title';
import { Fade } from 'react-awesome-reveal';

export const CountDown = () => {

	return (

		<div className={s.container}>
			<Fade direction={'down'} delay={200} triggerOnce={true}>
				<a href="/">
					<Logo className={s.logo} />
				</a>
			</Fade>
			<Fade direction={'down'} delay={400} triggerOnce={true}>
				<div className={s.infoContainer}>
					<Title title="Under Construction" />
					<span className={s.info}>We're making lots of improvements and will be back soon</span>
				</div>
			</Fade>
			<Fade direction={'down'} delay={600} triggerOnce={true}>
				<Timer />
			</Fade>
			<Fade direction={'down'} delay={800} triggerOnce={true}>
				<div className={s.eventNav}>
					<span>Check our event page when you wait:</span>
					<form action="https://youtu.be/dQw4w9WgXcQ" target="_blank">
						<Button>
							Go to the event
							<Arrow />
						</Button>
					</form>
				</div>
			</Fade>
		</div>
	);
};
