import React, { useState } from 'react';
import s from './Events.module.scss';
import { Event } from './Event/Event';
import { DataForEvents } from '../../../../../assets';

export const Events = () => {

	const [selected, setSelected] = useState(1);

	return (
		<div className={s.container}>
			{DataForEvents.map((event) =>
				<Event key={event.id} event={event} selected={selected} toggle={setSelected}/>
			)}
		</div>
	);
};
