import React, { useState } from 'react';
import s from './Footer.module.scss';
import { Input } from '../Input/Input';
import { ReactComponent as Arrow } from 'common/icons/arrow-down.svg';
import { countDownApi } from '../../../modules/countdownModule/countDownApi';
import { PopUp } from '../PopUp/PopUp';
import { Notification } from '../Notification/Notification';
import { Link } from 'react-scroll';

export const Footer = () => {

	const [isActive, setIsActive] = useState(false);

	const [value, setValue] = useState('');
	const [error, setError] = useState('');

	const [resultSubmit, setResultSumbit] = useState<{ title: string, message: string }>();

	const onSubmit = async () => {

		const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		if (value.match(emailFormat)) {

			try {
				await countDownApi.sendEmail();
				setResultSumbit({
					title: 'SUCCESS!',
					message: 'You have successfully subscribed to the email newsletter'
				});
			} catch (e) {
				setResultSumbit({
					title: 'FILED!',
					message: 'Oops, something went wrong'
				});
			} finally {
				setIsActive(true);
			}

		} else if (!value) {
			setError('field is empty');
		} else {
			setError('not correct email');
		}

	};

	const onClosePopup = () => {
		setIsActive(false);
	};

	return (
		<footer className={s.container}>
			<Input
				value={value}
				onChange={(e) => setValue(e.currentTarget.value)}
				placeholder="Enter your Email and get notified"
				callback={onSubmit}
				onFocus={() => setError('')}
				error={error}
			/>
			<Link
				smooth={true}
				to="eventsPage"
				className={s.button}
				duration={500}
			>
				Other Events
				<Arrow className={s.arrow} />
			</Link>
			<PopUp isActive={isActive} setIsActive={setIsActive}>
				<Notification
					title={resultSubmit?.title || ''}
					message={resultSubmit?.message || ''}
					onClose={onClosePopup}
				/>
			</PopUp>
		</footer>
	);
};
