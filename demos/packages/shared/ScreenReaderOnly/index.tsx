import { ScreenReaderOnlyProps } from "./ScreenReaderOnly.interface";
import "./ScreenReaderOnly.style.css"

export default function ScreenReaderOnly({ children }: ScreenReaderOnlyProps) {
  return children ? <span className="screenReaderOnlyText">
    {children}
  </span> : null
}