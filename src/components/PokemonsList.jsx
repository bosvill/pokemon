import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'

const PokemonsList = () => {
	const pokemons = useLoaderData()
	return (
		<div className='list'>
			<ul >
				{
					pokemons.map((p) => (
						<li key={p.name.english}className='pokemons'>
							<Link to={`/pokemon/${p.id}`}> {p.name.english}</Link>
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default PokemonsList
