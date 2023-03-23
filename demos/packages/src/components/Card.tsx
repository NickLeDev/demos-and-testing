import { useContext } from "react";
import { PropsContext } from "../contexts/ContextProps";

export default function Card() {
  const props = useContext(PropsContext);
  return <>
    {props.name}
  </>
}