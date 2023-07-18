import { useEffect, useReducer, createContext, ReactNode } from "react";
import Reducer from "./Reducer.tsx";

interface State {
  user: string | null;
}

interface ContextProps {
  user: string | null;
  dispatch: React.Dispatch<any>;
}

// Initial state
const storedUser = localStorage.getItem("user");
const initialState: State = {
  user: storedUser ? JSON.parse(storedUser) : null,
};

// Create context
export const Context = createContext<ContextProps>({
  user: initialState.user,
  dispatch: () => {},
});

// 
interface ContextProviderProps {
  children: ReactNode;
}

// Context provider
export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider value={{ user: state.user, dispatch }}>
      {children}
    </Context.Provider>
  );
};
