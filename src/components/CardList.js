import React from 'react';
import Card from './Card';

const CardList = ({pokemons}) => {
	return(
	<div>
	{pokemons.map((user, i) =>{
		return (
			<Card 
			name={user.name} 
			key={i} 
			url={user.url}
			/>
	);
	})}
    </div>
		);
}
export default CardList;
