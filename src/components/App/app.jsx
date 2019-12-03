import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import SwapiService from '../../services/swapiServices';

import './app.scss';

export default class App extends Component {

	swapiService = new SwapiService();

	state = {
		showRandomPlanet: true,
		selectedPerson: 5,
		hasError: false
	};

	toggleRandomPlanet = () => {
		this.setState((state) => {
			return {
				showRandomPlanet: !state.showRandomPlanet
			}
		});
	};

	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		});
	};

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {

		// if (this.state.hasError) {
		// 	return <ErrorIndicator />
		// }

		const planet = this.state.showRandomPlanet ?
			<RandomPlanet/> :
			null;

		return (
			<div className="stardb-app">
				<Header />
				{ planet }

				<div className="row mb2 button-row">
					<button
						className="toggle-planet btn btn-warning btn-lg"
						onClick={this.toggleRandomPlanet}>
						Toggle Random Planet
					</button>
					{/* <ErrorButton /> */}
				</div>

				{/* <PeoplePage /> */}

				<div className="row mb2">
					<div className="col-md-6">
						<ItemList
							onItemSelected={this.onPersonSelected}
							getData={this.swapiService.getAllPlanets} />
					</div>
					<div className="col-md-6">
						<PersonDetails personId={this.state.selectedPerson} />
					</div>
				</div>

				<div className="row mb2">
					<div className="col-md-6">
						<ItemList
							onItemSelected={this.onPersonSelected}
							getData={this.swapiService.getAllStarships} />
					</div>
					<div className="col-md-6">
						<PersonDetails personId={this.state.selectedPerson} />
					</div>
				</div>

			</div>
		);
	}
}
