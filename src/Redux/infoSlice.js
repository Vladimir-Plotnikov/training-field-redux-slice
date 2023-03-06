import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({

    name: 'addItems',
    initialState: {
        infos: [
            { id:'id-1', fullName: 'nike', activities: 'dance' },
            { id:'id-2', fullName: 'batman', activities: 'raping' },
            { id:'id-3', fullName: 'superman', activities: 'scratching' }
        ],
    },
    reducers: {
        addInfo(state, action) {
            return {
                ...state,
                infos: [...state.infos, action.payload],
            };
        },
    },
});

export const { addInfo } = infoSlice.actions

export const infoSliceReducer = infoSlice.reducer