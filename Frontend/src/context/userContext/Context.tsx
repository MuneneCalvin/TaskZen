import { useEffect, useReducer, createContext, ReactNode } from "react";
import Reducer from "./Reducer.tsx";

interface State {
  user: string | null;
}

interface ContextProps {
  user: string | null;
  dispatch: React.Dispatch<any>;
}

const initialState: State = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const Context = createContext<ContextProps>({
  user: initialState.user,
  dispatch: () => {},
});

interface ContextProviderProps {
  children: ReactNode;
}

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
