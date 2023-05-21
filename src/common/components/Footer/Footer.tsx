import React, { useState, KeyboardEvent } from 'react';
import s from './Footer.module.scss';
import { Input } from 'common/components';
import { ReactComponent as Arrow } from 'common/icons/arrow-down.svg';
import { countDownApi } from 'modules/countdownModule';
import { PopUp } from 'common/components';
import { Notification } from 'common/components';
import { Link } from 'react-scroll';
import { useInput } from 'hooks';

export const Footer = () => {

	const [isActive, setIsActive] = useState(false);

	const {
		value,
		setValue,
		onChange,
		setError,
		error } = useInput();

	const [resultSubmit, setResultSubmit] = useState<{ title: string, message: string }>();

	const onSubmit = async () => {

		const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		if (value.match(emailFormat)) {

			try {
				await countDownApi.sendEmail();
				setResultSubmit({
					title: 'SUCCESS!',
					message: 'You have successfully subscribed to the email newsletter'
				});
				error && setError('');
				setValue('')
			} catch (e) {
				setResultSubmit({
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

	const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			onSubmit();
		}
	};

	return (
		<footer className={s.container}>
			<Input
				value={value}
				onChange={onChange}
				placeholder="Enter your Email and get notified"
				callback={onSubmit}
				onFocus={() => setError('')}
				error={error}
				onKeyDown={onKeyDown}
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
