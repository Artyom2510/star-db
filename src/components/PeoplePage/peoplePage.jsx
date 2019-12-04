import React, { Component } from 'react';
import ErrorButton from '../ErrorButton';
import ErrorIndicator from '../ErrorIndicator';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import SwapiService from '../../services/swapiServices';

import './people-page.scss';

export default class PeoplePage extends Component {

	swapiService = new SwapiService();

	state = {
		selectedPerson: 3,
		hasError: false
	}

	componentDidCatch(error, info) {

		this.setState({
			hasError: true
		});
	}

	onPersonSelected = (selectedPerson) => {
		this.setState({ selectedPerson });
	};

	render() {

		if (this.state.hasError) {
			return <ErrorIndicator />;
		}

		const itemList = (
			<ItemList
				onItemSelected={this.onPersonSelected}
				getData={this.swapiService.getAllPeople}
				renderItem={({name, gender, birthYear}) => `${name} (${gender} ${birthYear})`} />
		);

		return (
			<div className="row mb2">
				<div className="col-md-6">

				</div>
				<div className="col-md-6">
					<PersonDetails personId={this.state.selectedPerson} />
					<ErrorButton />
				</div>
			</div>
		);
	}
}
