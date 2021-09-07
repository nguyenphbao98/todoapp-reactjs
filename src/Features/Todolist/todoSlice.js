import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: []
}

export const todoSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        handleAdd: (state, action) => {
            state.tasks.push(action.payload);
        },

        handleRemove: (state, action) => {

            const newCheckedTask = state.tasks.filter(item => item.id !== action.payload)
            state.tasks = newCheckedTask;
        },

        handleChecked: (state, action) => {
            const index = state.tasks.findIndex(item => item.id === action.payload)
            if(index < 0)
                return;
            state.tasks[index].checked = !state.tasks[index].checked;
        }
    },
})

// Action creators are generated for each case reducer function
export const { handleAdd, handleRemove, handleChecked } = todoSlice.actions

export default todoSlice.reducer