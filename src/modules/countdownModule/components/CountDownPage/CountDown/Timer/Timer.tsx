import React from 'react';
import s from './Timer.module.scss';
import { useTimer } from 'react-timer-hook';

export const Timer = () => {

	const date = new Date(2023, 4, 31);

	const {
		days,
		hours,
		minutes,
		seconds
	} = useTimer({ expiryTimestamp: date });

	const dateForMapping = [
		{ num: days, title: window.innerWidth > 1271 ? 'Days' : 'DD' },
		{ num: hours, title: window.innerWidth > 1271 ? 'Hours' : 'HH' },
		{ num: minutes, title: window.innerWidth > 1271 ? 'Minutes' : 'MM' },
		{ num: seconds, title: window.innerWidth > 1271 ? 'Seconds': 'SS' }
	];
	
	return (
		<div className={s.container}>
			{dateForMapping.map((el, i) =>
				<div key={i}>
					<div className={s.number}>
						<div className={s.numberWrapper}>
							<span>{el.num < 10 ? '0' + el.num : el.num}</span>
						</div>
						{i < 3 && <span>:</span>}
					</div>
					<div className={s.title}>{el.title}</div>
				</div>
			)}
		</div>
	);
};
