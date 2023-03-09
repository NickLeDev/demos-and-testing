import ScreenReaderOnly from "../ScreenReaderOnly";
import { IDeferProps } from "./Defer.interface";


export default function Defer({ children, predicate, fallback, loadingText }: IDeferProps) {
  const a11yText = predicate ? loadingText.onLoad : loadingText.onLoaded;

  return (<>
    <ScreenReaderOnly aria-live="polite">{a11yText}</ScreenReaderOnly>

    {predicate ? (<>{fallback}</>) : (children)}</>)
}

export type { IDeferProps };