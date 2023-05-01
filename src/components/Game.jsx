import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Game = () => {
	const [poke1, poke2] = useLoaderData()

	console.log(poke1)
	console.log(poke2)
	return (
		<div className='game'>
			<div className='player'>
				<h3 style={{color: '#d8b054'}}>{poke1.name} </h3>
				<img src={poke1.sprites.other.dream_world.front_default} alt='' />
			</div>
			<div className="stats"></div>
			<div className='player'>
				<h3>{poke2.name} </h3>
				<img src={poke2.sprites.other.dream_world.front_default} alt='' />
			</div>
		</div>
	)
}

export default Game
