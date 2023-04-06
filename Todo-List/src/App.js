import React from "react";
import Home from "./component/Home";
import Store from "./store";
import { Provider } from "react-redux";
import AppContext from "./context"
const App=()=>{
  return (
    <Provider store={Store}>
      <AppContext>
        <Home/>
      </AppContext>
    </Provider>
  )
} 
export default App;