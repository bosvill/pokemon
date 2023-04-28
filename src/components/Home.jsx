import React from 'react'
import { Link } from 'react-router-dom'

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
		</>
	)
}

export default Home
