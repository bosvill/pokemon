import React, { useReducer } from 'react'
import { reducer, attack } from '../reducer.js'
import { v4 } from 'uuid'

const Play = ({ stats1, stats2, id, id2 }) => {
	const player1 = {
		hp: stats1[0].base_stat,
		attack: stats1[1].base_stat,
		defense: stats1[2].base_stat,
		specialAttack: stats1[3].base_stat,
		specialDefense: stats1[4].base_stat,
		speed: stats1[5].base_stat
	}

	const player2 = {
		hp: stats2[0].base_stat,
		attack: stats2[1].base_stat,
		defense: stats2[2].base_stat,
		specialAttack: stats2[3].base_stat,
		specialDefense: stats2[4].base_stat,
		speed: stats2[5].base_stat
	}

	const onAttack = () => {
		const fight = player1.attack - player2.defense
		console.log(fight)
		const points = fight < 0 ? 10 : fight
		const damage = player2.hp - points
		console.log(damage)
		if (damage <= 0) {
			return player2.hp
		} else {
			return player2.hp - damage
		}
	}
	console.log(player2.hp)
	return (
		<div className='play-container'>
			<h3>{(player1.attack  - player2.defense) * (player1.speed -player2.speed)/10 }</h3>
			<div>
				<h3>Your stats:</h3>
				{stats1.map(el => (
					<li key={v4()}>
						{el.stat.name}:{el.base_stat}
					</li>
				))}
			</div>

			<div>
				<h3>Player 2:</h3>
				{stats2.map(el => (
					<li key={v4()}>
						{el.stat.name}:{el.base_stat}
					</li>
				))}
			</div>

			<div className='play-btn'>
				<button>Defense</button>
				<button onClick={() => player2.hp + onAttack()}>Attack</button>
				<button>Special Defense</button>
				<button>Special Attack</button>
			</div>
		</div>
	)
}

export default Play
