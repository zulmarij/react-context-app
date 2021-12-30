import { useAppContext } from "../context/AppContext";

export default function NavbarUserAvatar() {
  const [state] = useAppContext();
  return <img src={state?.user?.avatar} alt="avatar" width="50" />;
}
