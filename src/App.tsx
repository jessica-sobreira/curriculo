import { Provider } from "react-redux";
import { FormularioRecomendacao } from "./components/FormularioRecomendacao";
import { Recomendacoes } from "./components/Recomendacoes";
import { TopBar } from "./components/TopBar";
import { store } from "./config/store";



function App() {
  return (
    <>

    <Provider store={store}>

      <TopBar />
      <Recomendacoes />
      <FormularioRecomendacao />

    </Provider>


    </>
  )
}

export default App
