import React from 'react';
import s from './EventsPage.module.scss';
import { Title } from '../../../../common/components/Title/Title';
import { Events } from './Events/Events';

export const EventsPage = () => {
	return (
		<div className={s.container} id="eventsPage">
			<Title title="All events"/>
			<Events/>
		</div>
	);
};
