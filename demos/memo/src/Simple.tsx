import Card from "packages-utils/shared/Card";
import { PropsWithChildren, useState } from "react";
import MemoizedCard from "./Components/Card";

export default function Simple() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ height: "100vh", margin: "40px" }}>
      <h2>Simple card</h2>
      <p>Count {count}</p>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px", justifyContent: "center"}}>
        <Card text="Base card" />
        <MemoizedCard text="Memoized card" />
      </div>
    <button onClick={() => setCount(c => c + 1)} style={{ marginTop: "20px"}}>
      Trigger re-render
    </button>
  </div>)
}