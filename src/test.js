<>
<ul key={pokemon.id}>
                {pokemon[type].map(el => <li>{el}</li>)}
            </ul>
            <ul key={pokemon.id}>
                {Object.values(pokemon.base).map(el=><li></li>)}
            </ul>
            {Object.keys(pokemon.base)}: {Object.values(pokemon.base)}
            </>

{pokemon.name.english + pokemon.id} {pokemon.name.english} key={p.name.english}