import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'

const PokemonInfo = () => {
	const base = useLoaderData()
	return (
		<div>
			<h3>Pokemon Base:</h3>
			<ul >
				{Object.keys(base).map(el => (
					<li>{el}:  {base[el]}</li>
				))}
			</ul>
		</div>
	)
}

export default PokemonInfo
