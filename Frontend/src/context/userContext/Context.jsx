import { useEffect, useReducer, createContext } from "react";
import Reducer from "./Reducer";

// Initial state
const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
}

// Create context
export const Context = createContext(initialState);


// Provider component
export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return (
        <Context.Provider
            value={{ user: state.user, dispatch, }}>
            {children}
        </Context.Provider>
    );
}

