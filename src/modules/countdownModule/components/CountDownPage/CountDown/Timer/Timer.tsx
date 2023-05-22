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
		{ num: days, title: 'Days' },
		{ num: hours, title: 'Hours' },
		{ num: minutes, title: 'Minutes' },
		{ num: seconds, title: 'Seconds' }
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
