import React from 'react'
import Play from './Play'
import { useLoaderData } from 'react-router-dom'

const Game = () => {
	const [poke1, poke2] = useLoaderData()

	console.log(poke1.stats)
	console.log(poke2.stats)
	return (
		<div className='game'>
			<div className='player'>
				<h3 style={{ color: '#d8b054' }}>{poke1.name.toUpperCase()} </h3>
				<img src={poke1.sprites.other.home.front_default} alt='' />
			</div>
			<Play stats1={poke1.stats} id={poke1.id} stats2={poke2.stats} id2={poke2.id} />
			<div className='player'>
				<h3>{poke2.name.toUpperCase()} </h3>
				<img src={poke2.sprites.other.home.front_default} alt='' />
			</div>
		</div>
	)
}

export default Game
