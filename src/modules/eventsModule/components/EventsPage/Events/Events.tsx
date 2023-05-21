import React, { useState } from 'react';
import s from './Events.module.scss';
import defaultPhoto from 'common/images/defaultPhoto.png';
import { Event } from './Event/Event';

export const Events = () => {

	const arrForEvents = [
		{
			id: 1,
			title: 'Hawaiian party',
			date: '13.02.2023',
			photo: defaultPhoto
		},
		{
			id: 2,
			title: 'Mafia party',
			date: '13.02.2023',
			photo: defaultPhoto
		},
		{
			id: 3,
			title: 'Party',
			date: '13.02.2023',
			photo: defaultPhoto
		},
		{
			id: 4,
			title: 'Party on the Beach',
			date: '13.02.2023',
			photo: defaultPhoto
		},
		{
			id: 5,
			title: 'Home Security',
			date: '13.02.2023',
			photo: defaultPhoto
		},
		{
			id: 6,
			title: 'Network Design and Implementation',
			date: '13.02.2023',
			photo: defaultPhoto
		},
		{
			id: 7,
			title: 'System Design & Engineering',
			date: '13.02.2023',
			photo: defaultPhoto
		},
		{
			id: 8,
			title: 'Client Care Plans',
			date: '13.02.2023',
			photo: defaultPhoto
		}
	];

	const [selected, setSelected] = useState(1);

	return (
		<div className={s.container}>
			{arrForEvents.map((event) =>
				<Event event={event} selected={selected} toggle={setSelected}/>
			)}
		</div>
	);
};
