import React, {useState,useEffect } from 'react';
import './Card.css';

const Card = ({name, id, url}) => {
const [image, setImage] = useState([])
const [type, setType] = useState([])
const [type2, setType2] = useState([])
const [index, setIndex] = useState('')

async function fetchPokemon (url) {
const fetched = await fetch(url)
const pokemons = await fetched.json()
setImage(pokemons.sprites.front_default)
setType(pokemons.types[0].type.name)
if (pokemons.types[1])
{
	{setType2("/" + pokemons.types[1].type.name)}
}
else{
	{setType2("")}
}
if (pokemons.id < 894)
{setIndex(pokemons.id)}
else
{
	setIndex('special')
}
}

useEffect(() => {
fetchPokemon(url)
	})

return (
	
		<div className='tc dib bg3 pa3 ma2 grow bw2 shadow-5 card'>
		<h2>#{index} {name}</h2>
		<img alt='photo' src={image}/>
		<p>{type}{type2}</p>
		</div>
	
		)
}


export default Card;