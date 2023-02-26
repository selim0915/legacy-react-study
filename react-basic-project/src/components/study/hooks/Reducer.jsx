import { useReducer } from "react";

export default function Reducer() {
    const initialCount = {count: 0, name: 'none'};
    const [state, dispatch] = useReducer(reducer, initialCount);

    function reducer(state, action){
        switch(action.type){
            case 'reset':
                return initialCount;
            case 'increment':
                return {count: state.count+1, name: 'good'};
            case 'decrement':
                return {count: state.count-1, name: 'bad'};
            default:
                throw new Error();
        }
    }
    
    return (
        <div>
            <p>Count Reducer: {state.count}</p>
            <p>Name: {state.name}</p>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </div>
    );
}