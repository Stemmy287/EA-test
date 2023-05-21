import React, { useState } from 'react';
import s from './Events.module.scss';
import defaultPhoto from 'common/images/defaultPhoto.png';

export const Events = () => {

	const arrForEvents = [
		{
			title: 'Hawaiian party',
			date: '13.02.2023',
			photo: defaultPhoto
		},
		{
			title: 'Mafia party',
			date: '13.02.2023',
			photo: defaultPhoto
		},
		{
			title: 'Party',
			date: '13.02.2023',
			photo: defaultPhoto
		},
		{
			title: 'Party on the Beach',
			date: '13.02.2023',
			photo: defaultPhoto
		},
		{
			title: 'Home Security',
			date: '13.02.2023',
			photo: defaultPhoto
		},
		{
			title: 'Network Design and Implementation',
			date: '13.02.2023',
			photo: defaultPhoto
		},
		{
			title: 'System Design & Engineering',
			date: '13.02.2023',
			photo: defaultPhoto
		},
		{
			title: 'Client Care Plans',
			date: '13.02.2023',
			photo: defaultPhoto
		}
	];

	const [selected, setSelected] = useState(0);
	const toggle = (i: number) => {
		setSelected(i);
	};

	return (
		<div className={s.container}>
			{arrForEvents.map((event, i) =>
				<div className={s.item} key={i}>
					<div
						style={{ backgroundImage: selected !== i ? `linear-gradient(to top, rgb(22,44,78), rgb(0,0,0, .6)) ,url(${event.photo})` : '' }}
						className={selected === i ? `${s.title} ${s.pickedTitle}` : s.title}
						onClick={() => toggle(i)}
					>
						<span className={s.name}>{event.title}</span>
						<span className={s.number}>{i < 10 ? '0' + (i + 1) : i + 1}</span>
					</div>
					<div
						style={{ backgroundImage: `url(${event.photo})` }}
						className={selected === i ? `${s.content} ${s.showContent}` : s.content}
					>
						<div className={s.infoBlock}>
							<span>{i < 10 ? '0' + (i + 1) : i + 1}</span>
							<div className={s.info}>
								<h4>{event.title}</h4>
								<span>{event.date}</span>
								<a href="">More information</a>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
