import React from 'react';
// import Intro from "./introduction";
import store from "../redux/store";
import {Provider} from 'react-redux'
import CakeContainer from "./CakeContainer";

const App:React.FC = () => {
    return (
        <Provider store={store}>
            <div className='App'>
                <CakeContainer/>
            </div>
        </Provider>

    )
}

export default App;