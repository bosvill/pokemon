<>
<ul key={pokemon.id}>
                {pokemon[type].map(el => <li>{el}</li>)}
            </ul>
            <ul key={pokemon.id}>
                {Object.values(pokemon.base).map(el=><li></li>)}
            </ul>
            {Object.keys(pokemon.base)}: {Object.values(pokemon.base)}
			<input type='checkbox' name={pokemon.name.english} />
            </>

//{pokemon.name.english + pokemon.id} {pokemon.name.english} key={p.name.english}

export const choosePokemon = async ({ params, request }) => {
	try {
		const formData = await request.formData()
		console.log(formData)
		const player = params.pokemon
		return player
	} catch (e) {
		res.json(e)
	}
}

const player1=useLoaderData()
    const player2=useLoaderData()
    console.log(player1)
    console.log(player2)



    /* const player1 = useLoaderData()

	const player2 = () => {
		return Math.floor(Math.random() * 809)
	}

	console.log(player1)
	console.log(player2) 
	
	const id2 = () => {
		return Math.floor(Math.random() * 809)
	}*/