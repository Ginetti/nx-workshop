import './app.scss';
import '@workshop/ui-web-card';

import { ICard } from '@workshop/types';
import React, { useEffect, useState } from 'react';

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
			<main>
				<div className="container">
					<div className="header">
						<h1>App</h1>
						<img src="https://nx.dev/assets/images/nx-logo.svg" />
					</div>
					<card-wrapper>
						{apiResponse.map((card) => (
							<card-content>
								<card-title>{card.title}</card-title>
								<card-description>{card.description}</card-description>
								{/* <card-box color={card.boxColor}></card-box> // TODO */}
							</card-content>
						))}
					</card-wrapper>
				</div>
			</main>
		</div>
	);
};

export default App;
