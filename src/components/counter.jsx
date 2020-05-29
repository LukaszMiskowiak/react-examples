import React, {useState} from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);
    function handleIncrement() {
        setCounter(counter + 1);
    }

    return (
        <>
            {counter}
            <button onClick={handleIncrement}>increment</button>
        </>
    )
}

export default Counter;
