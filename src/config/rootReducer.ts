import { combineReducers } from "@reduxjs/toolkit";
import recomendacoesSlice from "./modules/recomendacoesSlice";

export const rootReducer = combineReducers({
  recomendacoes: recomendacoesSlice  
})