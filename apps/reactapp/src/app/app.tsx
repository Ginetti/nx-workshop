import './app.scss';

import { ICard } from '@workshop/types';
import React, { useEffect, useState } from 'react';

import { ReactComponent as Logo } from './logo.svg';

export const App = () => {
	const [apiResponse, setApiResponse] = useState<ICard[]>([]);
	useEffect(() => {
		fetch('/api/cards')
			.then((r) => {
				return r.json();
			})
			.then(setApiResponse);
	}, []);
	/*
	 * Replace the elements below with your own.
	 *
	 * Note: The corresponding styles are in the ./app.scss file.
	 */
	return (
		<div className="app">
			<header className="flex">
				<Logo width="75" height="75" />
				<h1>Welcome to reactapp!</h1>
			</header>
			<main>
				<h2>Resources &amp; Tools</h2>
				<p>Thank you for using and showing some ♥ for Nx.</p>
				{apiResponse.map((card) => card.title)}
			</main>
		</div>
	);
};

export default App;
