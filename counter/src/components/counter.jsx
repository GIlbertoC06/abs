import { useState } from "react";

const Counter = () => {
    const[count, setCount] = useState(0)

    const countHandler = () => {
        setCount(count + 1)
        setCount(count - 1)
    };

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={countHandler}> +1 </button>
            <button onClick={countHandler}> -1 </button>
        </div>
    )
};

export default Counter;
