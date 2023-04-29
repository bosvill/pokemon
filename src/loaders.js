import { json } from 'react-router-dom'
const url = `https://pokemong.onrender.com/pokemon/`
export const listLoader = async () => {
	try {
		const res = await fetch(url)
		const poke = await res.json()
		//console.log(poke)
		return poke
	} catch (e) {
		res.json(e)
	}
}

export const infoLoader = async ({ params }) => {
	try {
		const res = await fetch(`https://pokemong.onrender.com/pokemon/${params.id}/info`)
		const poke = await res.json()
		//console.log(poke)
		return poke
	} catch (e) {
		res.json(e)
	}
}

export const viewLoader = async ({ params }) => {
	try {
		const res = await fetch(`https://pokemong.onrender.com/pokemon/${params.id}`)
		const poke = await res.json()
		//console.log(poke)
		return poke
	} catch (e) {
		res.json(e)
	}
}

