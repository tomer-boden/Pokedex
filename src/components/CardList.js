import React from 'react';
import Card from './Card';

const CardList = ({pokemons}) => {
	return(
	<div>
	{pokemons.map((user, i) =>{
		return (
			<Card 
			key={i} 
			id={i} 
			name={user.name} 
			email="lala"
			url={user.url}
			/>
	);
	})}
    </div>
		);
}
export default CardList;
