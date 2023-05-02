import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route
} from 'react-router-dom'
import App from './App.jsx'
import PokemonsList from './components/PokemonsList.jsx'
import PokemonView from './components/PokemonView.jsx'
import InfoLayout from './components/InfoLayout.jsx'
import PokemonBase from './components/PokemonInfo'
import PokemonName from './components/PokemonName'
import PokemonType from './components/PokemonType'
import ErrorResponse from './components/ErrorResponse.jsx'
import Fallback from './components/Fallback'
import Home from './components/Home.jsx'
import Game from './components/Game.jsx'
import { listLoader, viewLoader, infoLoader, gameAction } from './loaders'
//import {gameAction} from './actions'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />} errorElement={<ErrorResponse />}>
			<Route index element={<PokemonsList />} loader={listLoader} />
			<Route path='pokemon/:id' element={<PokemonView />} loader={viewLoader} />

			<Route path='pokemon/:id/name' element={<PokemonName />} loader={infoLoader} />
			<Route path='pokemon/:id/type' element={<PokemonType />} loader={infoLoader} />
			<Route path='pokemon/:id/base' element={<PokemonBase />} loader={infoLoader} />

			<Route path='play' element={<Game />} loader={gameAction} />
			<Route path='dashboard' element={<Home />} />
		</Route>
	)
)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} fallbackElement={<Fallback />} />
	</React.StrictMode>
)
