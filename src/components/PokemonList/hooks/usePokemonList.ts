import { useMemo, useState } from 'react'
import { getPokemonList } from '../helpers/getPokemonList';
import { PokemonData } from '../types/PokemonList.types';

export const usePokemonList = () => {
    const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);
    const [offset, setOffset] = useState(0);
  
    useMemo(async () => {
      const pokemonList = await getPokemonList(offset);
      setPokemonList(pokemonList);
    }, [offset]);
  
    const onPrevPage = () => setOffset(offset - 20 < 0 ? 0 : offset - 20);
  
    const onNextPage = () => setOffset(offset + 20 > 1281 ? 1281 : offset + 20);

    return {
        offset,
        pokemonList,
        onNextPage,
        onPrevPage
    }
}
