import React from 'react'
import Fallback from './Fallback'
import { useLoaderData, Link, useNavigation } from 'react-router-dom'

const PokemonView = () => {
	const pokemon = useLoaderData()
	const navigation = useNavigation()

	return (
		<div className='card'>
			{navigation.state === 'loading' ? <Fallback /> :
			<>
			<h1>{pokemon.name.english}</h1>
			<h3>Type:</h3>
			<ul key={pokemon.name.english + pokemon.id}>
				{pokemon.type.map(el => (
					<li>{el}</li>
				))}
			</ul>
			<Link to={`info`}>
				<h3>Base:</h3>
			</Link>
			<ul key={pokemon.name.english}>
				{Object.keys(pokemon.base).map(el => (
					<li>{el}:  {pokemon.base[el]}</li>
				))}
			</ul>
			</>}
		</div>
	)
}

export default PokemonView
