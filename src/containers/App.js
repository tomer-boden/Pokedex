import './App.css';
import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Particles from 'react-particles-js';

const last_pokemon_index=1118
const max = 2000

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

function App() {
	const [pokemons, setPokemons] = useState([])
	const [searchfield, setSearchField] = useState('')
	const [show, setShow] = useState(0)
	const [from, setFrom] = useState(0)

useEffect(() => {
		if (from<=last_pokemon_index)
	{
	fetch(`https://pokeapi.co/api/v2/pokemon?limit=${show}&offset=${from}`)
	.then(pokemons => pokemons.json())
	.then(pokemon => 
		setPokemons(pokemon.results))}
}, [show, from])

function onSearchChange  (event) {
	setSearchField(event.target.value)
	}

function onStartChange(event){
	if (event.target.value){
	if(event.target.value > max)
		setShow(max)
	else{
	setShow(event.target.value)
}
}
else
	setShow(0)
}

function onEndChange(event){
	if(event.target.value >= 1){
	if (from > max)
			setFrom(max)
		else
	setFrom(event.target.value -1)
}
	else
	setFrom(0);
}

const filterPokemons = pokemons.filter(pokemon => {
		return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
		})


  return !pokemons.length ? 
			<h1 className="tc">loading</h1> :
		(
		<div className="tc">
		<Particles className='particles' params={particlesOptions} />
		<h1>Pokedex</h1>
		<SearchBox searchChange ={onSearchChange} place = "search pokemon"/>
		<div className="box">
		<h3>from index:</h3>
		<SearchBox searchChange ={onEndChange} place = "1"/>
		<h3>, show:</h3>
		<SearchBox searchChange ={onStartChange} place = "20"/>
		<h3>pokemons</h3>
		</div>
		<Scroll>
		{from<=last_pokemon_index
			?	
		<CardList pokemons={filterPokemons}/>
		:
		<h1 className="tc">no pokemons after that index</h1> 
		}
		</Scroll>
		</div>
		);
}



export default App;
