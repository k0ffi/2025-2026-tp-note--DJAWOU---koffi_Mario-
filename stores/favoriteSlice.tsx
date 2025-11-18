import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employe } from "../types";

interface FavouriteJobState {
    value: Array<Employe>;
}

const initialState: FavouriteJobState = {
    value: [],
};

export const favouriteJobSlice = createSlice({
    name: "favouriteJob",
    initialState,
    reducers: {
        push: (state, action: PayloadAction<Employe>) => {
            state.value.push(action.payload);
        },
        remove: (state, action: PayloadAction<string>) => {
            state.value = state.value.filter((job) => job.id !== action.payload);
        },
    },
});

export const { push, remove } = favouriteJobSlice.actions;
export default favouriteJobSlice.reducer;

// Sélecteur pour savoir si un job est dans les favoris
export const selectIsInFavouriteJob = (
    state: { favouriteJob: FavouriteJobState },
    id: string
) => {
    return state.favouriteJob.value.some((job) => job.id === id);
};
