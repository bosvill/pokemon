import React from 'react'
import { v4  } from 'uuid'
import { useLoaderData, Link } from 'react-router-dom'

const PokemonInfo = () => {
	const base = useLoaderData()
	return (
		<div>
			<h3>Pokemon Base:</h3>
			<ul >
				{Object.keys(base).map(el => (
					<li key={v4()}>{el}:  {base[el]}</li>
				))}
			</ul>
		</div>
	)
}

export default PokemonInfo
