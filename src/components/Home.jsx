import React from 'react'
import { Link, useLoaderData, Form } from 'react-router-dom'

const Home = () => {
	

	return (
		<>
			<div className='players'>
				<Link to='/pokemon'>
					<h2>Player 1</h2>
				</Link>
			</div>
			<div className='players'>
				<Link to='/pokemon'>
					<h2>Player 2</h2>
				</Link>
			</div>
			<Form action='/play'>
				<input type='hidden' name='player1' defaultValue={player1} />
				<input type='hidden' name='player2' defaultValue={player2} />
				<button type='submit'>Play</button>
			</Form>
		</>
	)
}

export default Home
