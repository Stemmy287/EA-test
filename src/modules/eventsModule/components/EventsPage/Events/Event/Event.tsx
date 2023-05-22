import React from 'react';
import s from './Event.module.scss';
import { EventDataType } from 'modules/eventsModule/types';


type PropsType = {
	event: EventDataType
	selected: number
	toggle: (selected: number) => void
}

export const Event = ({ event, selected, toggle }: PropsType) => {

	const BackgroundImg = {
		backgroundImage: selected !== event.id
			? `linear-gradient(to top, rgb(22,44,78), rgb(0,0,0, .6)) ,url(${event.photo})`
			: ''
	};

	return (
		<div className={s.container} key={event.id}>
			<div
				className={selected === event.id ? `${s.title} ${s.pickedTitle}` : s.title}
				style={BackgroundImg}
				onClick={() => toggle(event.id)}
			>
				<span className={s.name}>{event.title}</span>
				<span className={s.number}>{event.id < 10 ? '0' + event.id : event.id}</span>
			</div>
			<div
				style={{ backgroundImage: `url(${event.photo})` }}
				className={selected === event.id ? `${s.content} ${s.showContent}` : s.content}
			>
				<div className={s.infoBlock}>
					<span>{event.id < 10 ? '0' + event.id : event.id}</span>
					<div className={s.info}>
						<h4>{event.title}</h4>
						<span>{event.date}</span>
						<a
							href="https://youtu.be/dQw4w9WgXcQ"
							rel="noreferrer"
							target="_blank"
						>
							More information
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
