import React from 'react';
import Intro from "./introduction";


const App:React.FC = () => {
    return (
        <div>
            <Intro name='hugh' age={13}/>
        </div>
    )
}

export default App;