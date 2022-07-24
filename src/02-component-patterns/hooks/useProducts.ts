import { useState } from "react";

export const useProducts = ( initialState: number ) => {
    
    const [counter, setCounter] = useState( initialState );

    const increaseBy = ( value: number ) => {
        setCounter( prev =>  Math.max( prev + value, 0 ) );
    }

    return {
        counter,
        increaseBy
    }

}