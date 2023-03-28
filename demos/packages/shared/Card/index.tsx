import { PropsWithChildren, useEffect, useRef } from "react";
import './Card.css'
import useRendererDebugger from "../Hooks/useRendererDebugger";

export default function Card({ children, text }: PropsWithChildren & { text?: string }) {
  const ref = useRendererDebugger("card");

  return <div className="card" ref={ref} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
    { text ? (<p>
      { text }
    </p>) : null }
    {children ? (<div style={{ padding: "6px 3px", borderRadius: "10px", backgroundColor: "white"}}>
      {children}
    </div>) : null}
  </div>
}