import { useAppContext } from "../context/AppContext";

const Setting = () => {
  const [state, dispatch] = useAppContext();

  return (
    <input
      type="text"
      onChange={(e) =>
        dispatch({
          type: "updateUser",
          payload: {
            ...state.user,
            name: e.target.value,
          },
        })
      }
      placeholder="Change Name"
      value={state.user.name ?? ""}
    />
  );
};

export default Setting;
