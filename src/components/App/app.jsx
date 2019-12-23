import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundry from '../ErrorBoundry';
import SwapiService from '../../services/swapiServices';
import DummySwapiService from '../../services/dummySwapiService';
import { SwapiServiceProvider } from '../SwapiServiceContext/swapiServiceContext';

import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages'

import './app.scss';

export default class App extends Component {

	state = {
		swapiService: new SwapiService()
	};

	onServiceChange = () => {
		this.setState(({ swapiService }) => {
			const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

			return {
				swapiService: new Service()
			};
		});
	};

	render() {

		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={this.state.swapiService} >
					<div className="stardb-app">
						<Header onServiceChange={this.onServiceChange} />
						<RandomPlanet/>
						<PeoplePage />
						<PlanetsPage />
						<StarshipsPage />
					</div>
				</SwapiServiceProvider>
			</ErrorBoundry>
		);
	}
}
