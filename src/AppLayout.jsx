import { useState } from 'react'
import './App.css'
import { Outlet, NavLink } from 'react-router-dom'

function App() {
	return (
		<>
			<navbar className='navbar'>
				<NavLink to='/' end>
					<div className='navbar'>
						<img src='/109.svg' alt='' className='logo-img' />
						<h3>PokeFight</h3>
					</div>
				</NavLink>
			</navbar>
			<div className='container'>
				<Outlet />
			</div>

			<footer className='footer'>group4@project.com</footer>
		</>
	)
}

export default App
