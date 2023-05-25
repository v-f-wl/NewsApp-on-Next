import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: [],
    },
    reducers: {
        addToStore(state, action) {
          state.user.push({
            id: action.payload.id,
            name: action.payload.name,
          })
        }
    },
});

export const {addToStore} = userSlice.actions;

export default userSlice.reducer;