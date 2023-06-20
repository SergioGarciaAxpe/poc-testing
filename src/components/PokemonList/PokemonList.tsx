import { usePokemonList } from "./hooks/usePokemonList";

export const PokemonList = () => {
  const { pokemonList, onNextPage, onPrevPage, offset } = usePokemonList();

  return (
    <div>
      {pokemonList.map((pokemonItem) => {
        return <div key={pokemonItem.name}>{JSON.stringify(pokemonItem)}</div>;
      })}

      <div style={{ margin: 20 }}>
        Showing from {offset + 1} to {offset + 20}
      </div>

      <div className="button-row">
        <button onClick={onPrevPage}>Prev</button>
        <button onClick={onNextPage}>Next</button>
      </div>
    </div>
  );
};
