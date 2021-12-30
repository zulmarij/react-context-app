import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "toggleTheme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error("unexpected action");
  }
};

const initialState = {
  count: 0,
  theme: "light",
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
        -
      </button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
        +
      </button>
      <hr />
      Theme: {state.theme}
      <button onClick={() => dispatch({ type: "toggleTheme" })}>
        Toggle Theme
      </button>
    </>
  );
};

export default Reducer;
