import React from 'react';
import './App.scss';
import { CountdownPage } from 'modules/countdownModule';
import { EventsPage } from 'modules/eventsModule';

export function App() {

	return (
		<>
			<CountdownPage />
			<EventsPage />
		</>
	);
}


