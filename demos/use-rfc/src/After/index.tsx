import { Suspense, useCallback, useContext, useState } from "react";
import ErrorBoundary from "../ErrorBoundary";
import AfterError from "./error";
import AfterHook from "./hook";
import AfterLoading from "./loading";

export default function After() {
  const [loadData, setLoadData] = useState(false);

  const load = useCallback(() => {
    setLoadData(true);
  }, []);


  return <>
    <h1>After - composition</h1>
    <ErrorBoundary fallback={AfterError()}>
      <Suspense fallback={AfterLoading()}>
        <AfterHook loadData={loadData} />
        <button onClick={load}>LOAD USER</button>
      </Suspense>
    </ErrorBoundary>
  </>
}
