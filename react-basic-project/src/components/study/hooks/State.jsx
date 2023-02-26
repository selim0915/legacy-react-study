import { useState } from "react";

export default function State() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount((prev) => prev+1)}>+</button>
            <button onClick={() => setCount((prev) => prev-1)}>-</button>
        </div>
    );
}