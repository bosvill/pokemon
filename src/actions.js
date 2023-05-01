import { redirect } from 'react-router-dom'

export const gameAction = async ({ request }) => {
	const formData = await request.formData()
	console.log(request)
	/* const id1 = formData.get(id1)
	const res1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id1}`)
	const player1 = res1.json()

	console.log(res1, player1) */

	return redirect('/play')
}
