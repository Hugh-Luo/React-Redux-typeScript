import React from 'react';

interface test {
    name: string;
    age: number
}

const Intro : React.FC <test> = ({name, age}) => {
    return (
        <div>
            {name} is a {age} boy !!!
        </div>
    )
}

export default Intro;