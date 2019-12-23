import React from 'react';
import ItemDetails from '../ItemDetails';
import { Record } from '../ItemDetails/itemDetails';
import { withSwapiService } from '../HocHelper';

const StarshipDetails = (props) => {
	return (
		<ItemDetails {...props}>
			<Record field="model" label="Model" />
			<Record field="length" label="Length" />
			<Record field="costInCredits" label="Cost" />
		</ItemDetails>
	);
};

const mapMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getStarship,
		getImageUrl: swapiService.getStarshipImage
	}
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
