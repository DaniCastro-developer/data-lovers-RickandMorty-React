import React from "react";
import RickAndMorty from "./components/RickAndMorty";

import {Provider} from 'react-redux'
import generateStore from "./REDUX/store";


function App() {

  const store = generateStore()

  return (
    <Provider store={store}>
      <div className="container mt-3">
      <RickAndMorty />
      </div>
    </Provider>
  );
}

export default App;
