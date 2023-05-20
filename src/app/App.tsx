import React from 'react';
import './App.scss';
import { CountdownPage } from 'modules/countdownModule';
import { Events } from '../modules/EventsModule/components/Events/Events';

export function App() {

	return (
		<>
			<CountdownPage />
			<Events />
		</>
	);
}


