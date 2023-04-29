import React from 'react'
import Fallback from './Fallback'
import { v4 } from 'uuid'
import { useLoaderData, Link, useNavigation, Form } from 'react-router-dom'

const PokemonView = () => {
	const pokemon = useLoaderData()
	const navigation = useNavigation()

	return (
		<div className='card'>
			{navigation.state === 'loading' ? (
				<Fallback />
			) : (
				<>
					<h1>{pokemon.name.english}</h1>
					<h3>Type:</h3>
					<ul>
						{pokemon.type.map(el => (
							<li key={v4()}>{el}</li>
						))}
					</ul>
					<Link to={`info`}>
						<h3>Base:</h3>
					</Link>
					<ul>
						{Object.keys(pokemon.base).map(el => (
							<li key={v4()}>
								{el}: {pokemon.base[el]}
							</li>
						))}
					</ul>
				</>
			)}
			<Form action='/'>
				<input type='hidden' name='id' defaultValue={pokemon.id} />
				<input type='checkbox' name={pokemon.name.english} />
				<button type='Submit'>Confirm</button>
			</Form>
		</div>
	)
}

export default PokemonView
