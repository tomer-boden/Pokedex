import React from 'react';

const SearchBox = ({searchChange, place}) =>{
	return (
		<div className="pa2">
		<input 
		className ='pa3 ba b--green bg-lightest-blue'
		type='search' 
		placeholder= {place}
		onChange={searchChange}
		/>

		</div>
		);
}

export default SearchBox;