import { combineReducers } from "@reduxjs/toolkit";
import recomendacoesSlice from "./modules/recomendacoesSlice";
import userSlice from "./modules/userSlice";

export const rootReducer = combineReducers({
  recomendacoes: recomendacoesSlice,
  user: userSlice  
})