import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    passengerId: '',
    name: '',
    teamId: '',
    subject: ''
}
export const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addBoard: (state, action) => {
            alert('리듀서 내부로 게시글은?'+action.payload.board)
            const board = { board: action.payload.board, complate: false }
            state.push(board)
        }

    }
})

export const {addBoard} = boardSlice.actions
export default boardSlice.reducer