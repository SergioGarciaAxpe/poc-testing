import { render, screen, fireEvent, renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PokemonList } from "./PokemonList";
import { usePokemonList } from "./hooks/usePokemonList";

describe("PokemonList", () => {
  const mockPokemonList = [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
    { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
  ];

  test("renders the list of Pokemon", () => {
    const mockUsePokemonList = () => ({
      pokemonList: mockPokemonList,
      onNextPage: jest.fn(),
      onPrevPage: jest.fn(),
      offset: 0,
    });
    jest.mock("./hooks/usePokemonList", () => ({
      usePokemonList: mockUsePokemonList,
    }));

    const { asFragment } = render(<PokemonList />);

    expect(asFragment()).toMatchSnapshot(`
      <div>{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"}</div>
      <div>{"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"}</div>
      <div>{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"}</div>
    `);
  });

  test("displays the correct range of Pokemon", () => {
    const { result } = renderHook(() => usePokemonList());
    const { offset, pokemonList } = result.current;

    expect(offset).toBe(0)
    expect(pokemonList.length).toBe(0)
    render(<PokemonList />);

    const rangeText = screen.getByText('Showing from 1 to 20');
    expect(rangeText).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('Next'))

    const newRangeText = screen.getByText('Showing from 21 to 40');
    expect(newRangeText).toBeInTheDocument();
  });
});
