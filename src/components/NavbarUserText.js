import { useAppContext } from "../context/AppContext";

export default function NavbarUserText() {
  const [state] = useAppContext();
  return <span>Hi, {state?.user?.name}!</span>;
}
