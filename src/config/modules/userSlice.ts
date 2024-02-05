import { createSlice } from "@reduxjs/toolkit";

interface User {
    id: string;
    nome: string;
}

const initialState: User = {
    id: "1234",
    nome: "Bart"
}  


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {}
})

export default userSlice.reducer;