import ScreenReaderOnly from "../ScreenReaderOnly";
import { IDeferProps } from "./Defer.interface";


export default function Defer({ children, predicate, fallback, a11yText }: IDeferProps) {
  return (<>{predicate ? (<>
    <ScreenReaderOnly>{a11yText}</ScreenReaderOnly>{fallback}</>) : (children)}</>)
}

export type { IDeferProps };