import React from "react";
import FetchDataContainer from "./FetchDataContainer";
// import Login from "./Register";
import store from "../redux/store";
import {Provider} from 'react-redux'
// import {FetchContainer} from './FetchDataContainer'
// import CakeContainer from "./CakeContainer";

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <div className="App">
      <FetchDataContainer/>
    </div>
    </Provider>
  );
};

export default App;
