import React from 'react';
import Login from './Register'
import store from "../redux/store";
import {Provider} from 'react-redux'
// import CakeContainer from "./CakeContainer";

const App:React.FC = () => {
    return (
        <Provider store={store}>
            <div className='App'>
                <Login/>
            </div>
        </Provider>

    )
}

export default App;