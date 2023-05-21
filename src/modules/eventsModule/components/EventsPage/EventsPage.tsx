import React from 'react';
import s from './EventsPage.module.scss';
import { Title } from 'common/components';
import { Events } from './Events/Events';
import { Fade } from 'react-awesome-reveal';

export const EventsPage = () => {
	return (
		<div className={s.container} id="eventsPage">
			<Fade direction={'down'} delay={200} damping={300} triggerOnce={true}>
				<Title title="All events" />
			</Fade>
			<Events />
		</div>
	);
};
