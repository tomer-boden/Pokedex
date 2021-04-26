import React, {useState,useEffect } from 'react';
import './Card.css';

const Card = ({name, email, id, url}) => {
const [ime, setIme] = useState([])
const [type, setType] = useState([])
const [type2, setType2] = useState([])
const [ind, setInd] = useState('')

async function fetchPokemon (url) {
const fetched = await fetch(url)
const pokemons = await fetched.json()
await setIme(pokemons.sprites.front_default)
await setType(pokemons.types[0].type.name)
if (pokemons.types[1])
{
	{await setType2("/" + pokemons.types[1].type.name)}
}
else{
	{await setType2("")}
}
if (pokemons.id < 894)
{await setInd(pokemons.id)}
else
{
	await setInd('special')
}
}

useEffect(() => {

fetchPokemon(url)

	})

return (
	
		<div className='tc dib bg3 pa3 ma2 grow bw2 shadow-5 card'>
		<h2>#{ind} {name}</h2>
		<img alt='photo' src={ime}/>
		<div>

		</div>
		<p>{type}{type2}</p>
		</div>
	
		)
}


export default Card;