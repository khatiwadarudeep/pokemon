import { createSlice } from '@reduxjs/toolkit';
import { Root } from '../hooks/useFetchPokemon';

const initialState = {
    team: [] as Root[],
};

export const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
      addToTeam: (state, action) => {
          state.team.push(action.payload);
      },
      removeFromTeam: (state, action) => {
        const pokemonId = action.payload.id;
        const index = state.team.findIndex(pokemon => pokemon.id === pokemonId);
  
        if (index !== -1) {
          state.team.splice(index, 1);
        }
      },
    },
  });
  

export const { addToTeam, removeFromTeam } = teamSlice.actions;

export default teamSlice.reducer;
