import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route
} from 'react-router-dom'
import AppLayout from './AppLayout.jsx'
import PokemonsList from './components/PokemonsList.jsx'
import PokemonView from './components/PokemonView.jsx'
import PokemonInfo from './components/PokemonInfo.jsx'
import ErrorResponse from './components/ErrorResponse.jsx'
import Fallback from './components/Fallback'
import Home from './components/Home.jsx'
import Game from './components/Game'
import { listLoader, viewLoader, infoLoader} from './loaders'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<AppLayout />} errorElement={<ErrorResponse />}>
			<Route index element={<Home />} />
			<Route path='pokemon' element={<PokemonsList />} loader={listLoader} />
			<Route path='pokemon/:id' element={<PokemonView />} loader={viewLoader} />
			<Route path='pokemon/:id/info' element={<PokemonInfo />} loader={infoLoader} />
			<Route path='play' element={<Game />} />
		</Route>
	)
)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} fallbackElement={<Fallback />} />
	</React.StrictMode>
)
