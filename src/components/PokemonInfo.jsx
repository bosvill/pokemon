import React from 'react'
import { v4 } from 'uuid'
import { useLoaderData, Link } from 'react-router-dom'

const PokemonInfo = () => {
	const pokemon = useLoaderData()
	console.log(pokemon.base)
	return (
		<div>
			<h3>Pokemon Base:</h3>
			<ul>
				{Object.keys(pokemon.base).map(el => (
					<li key={v4()}>
						{el}: {pokemon.base[el]}
					</li>
				))}
			</ul>
		</div>
	)
}

export default PokemonInfo
