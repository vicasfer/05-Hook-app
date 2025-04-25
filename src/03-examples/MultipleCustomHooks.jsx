import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {

    const {counter, increment, decrement, reset} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    
    // Desestructurar la data para obtener las propiedades necesarias
    const { id, name, sprites } = !!data && data;

    return (
        <>
            <h1>Información de Pokémon {counter}</h1>
            <hr />

            {isLoading && <LoadingMessage />}

            {hasError && <p>Error...</p>}

            {!isLoading && !hasError && <PokemonCard id={id} name={name} sprites={sprites} />}

            <div className="mt-5">
                <button
                    className="btn btn-primary"
                    onClick={() => counter > 1? decrement() : null}
                    >
                    Anterior
                </button>

                <button
                    className="btn btn-primary"
                    onClick={() => increment()}
                    >
                    Siguiente
                </button>
            </div>
                
        </>
    )
}