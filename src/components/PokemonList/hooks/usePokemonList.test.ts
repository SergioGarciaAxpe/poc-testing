import { usePokemonList } from './usePokemonList';
import { getPokemonList } from '../helpers/getPokemonList';
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

jest.mock('../helpers/getPokemonList');

describe('usePokemonList', () => {
  test('should return an empty array as the initial pokemonList', () => {
    // const { result } = renderHook(() => usePokemonList());
    // expect(result.current.pokemonList.length).toBe(0)

    
  });

//   test('should call getPokemonList with the correct offset when onNextPage is called', async () => {
//     const { result } = renderHook(() => usePokemonList());
//     await act(async () => {
//       result.current.onNextPage();
//     });
//     expect(getPokemonList).toHaveBeenCalledWith(20);
//   });

//   test('should call getPokemonList with the correct offset when onPrevPage is called', async () => {
//     const { result } = renderHook(() => usePokemonList());
//     await act(async () => {
//       result.current.onPrevPage();
//     });
//     expect(getPokemonList).toHaveBeenCalledWith(0);
//   });

//   test('should set the offset to 0 when onPrevPage is called and the current offset is 0', async () => {
//     const { result } = renderHook(() => usePokemonList());
//     await act(async () => {
//       result.current.onPrevPage();
//     });
//     expect(result.current.offset).toEqual(0);
//   });

//   test('should set the offset to 1281 when onNextPage is called and the current offset is 1281', async () => {
//     const { result } = renderHook(() => usePokemonList());
//     await act(async () => {
//       result.current.onNextPage();
//     });
//     expect(result.current.offset).toEqual(1281);
//   });
});