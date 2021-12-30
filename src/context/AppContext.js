import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const AppContext = createContext({});

export const useAppContext = () => {
  return useContext(AppContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateUser":
      return { ...state, user: action.payload };
    case "toggleTheme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const initialState = {
  user: {},
  theme: "dark",
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const user = {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    };

    dispatch({
      type: "updateUser",
      payload: user,
    });
  }, []);

  const appContextValue = [state, dispatch];

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
