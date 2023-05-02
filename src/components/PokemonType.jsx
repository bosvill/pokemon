import React from 'react'
import { v4 } from 'uuid'
import { useLoaderData} from 'react-router-dom'

const PokemonType = () => {
	const pokemon = useLoaderData()
	console.log(pokemon.type)
	return (
		<div className='card'>
			
				<ul>
					{pokemon.type.map(el => (
						<li key={v4()}>{el}</li>
					))}
				</ul>
		</div>
	)
}

export default PokemonType
