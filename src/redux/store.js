import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../Features/Todolist/todoSlice'


export default configureStore({
    reducer: {
        tasks: todoSlice,
    },
})