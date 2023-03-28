import useRendererDebugger from "packages-utils/shared/Hooks/useRendererDebugger";
import { memo, PropsWithChildren } from "react";
import Title from "../Title";

function TurboCard({ children, text }: PropsWithChildren & { text?: string }) {
  const ref = useRendererDebugger("card");

  return (<div className="card" ref={ref} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
    <Title text={text} />
    {children ? (<div style={{ padding: "6px 3px", borderRadius: "10px", backgroundColor: "white"}}>
      {children}
    </div>) : null}
  </div>)
};

export default memo(TurboCard);
