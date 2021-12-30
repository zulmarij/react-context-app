import { useAppContext } from "../context/AppContext";

const DisplayTheme = () => {
  const [state] = useAppContext();
  return <div>{state.theme}</div>;
};

export default DisplayTheme;
