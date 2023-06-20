import { getPokemonList } from "./getPokemonList";

describe("test in getPokemonList()", () => {
  test("it shoud return a list of pokemons", async () => {
    const pokemonList = await getPokemonList(0);
    const bulbasaur = { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" }
    const charmander = { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" }
    const squirtle = { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" }

    expect(pokemonList.length).toBeGreaterThan(0);
    expect(pokemonList.length).toBeLessThan(40);
    expect(pokemonList[0]).toEqual(bulbasaur);
    expect(pokemonList[3]).toEqual(charmander);
    expect(pokemonList[6]).toEqual(squirtle);
  });

  it("should return an array of PokemonData objects", async () => {
    const result = await getPokemonList(0);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty("name");
    expect(result[0]).toHaveProperty("url");
  });

  it("should return the correct number of PokemonData objects", async () => {
    const result = await getPokemonList(0);
    expect(result.length).toBe(20);
  });

  it("should return PokemonData objects with the correct properties", async () => {
    const result = await getPokemonList(0);
    expect(result[0]).toHaveProperty("name");
    expect(result[0]).toHaveProperty("url");
  });

  it("should return PokemonData objects with the correct values", async () => {
    const result = await getPokemonList(0);
    expect(result[0].name).toBe("bulbasaur");
    expect(result[0].url).toBe("https://pokeapi.co/api/v2/pokemon/1/");
  });
});
