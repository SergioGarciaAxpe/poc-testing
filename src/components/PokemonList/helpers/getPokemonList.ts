import axios from "axios";
import { PokemonData } from "../types/PokemonList.types";

const pokeApiUrl = "https://pokeapi.co/api/v2";

export const getPokemonList = async (offset: number) => {
    const resp = await axios({
        url: `${pokeApiUrl}/pokemon?limit=20&offset=${offset}`,
        method: "get",
        responseType: "json",
      });

    return resp.data.results as PokemonData[];
}