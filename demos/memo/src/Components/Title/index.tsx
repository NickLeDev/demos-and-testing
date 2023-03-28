import useRendererDebugger from "packages-utils/shared/Hooks/useRendererDebugger";
import { memo, PropsWithChildren } from "react";
import './Title.css';

function Title({ text }: PropsWithChildren & { text?: string}) {
  const ref = useRendererDebugger("turbo_title")
  return (
    <p className="turbo_title" ref={ref}>
        { text ? text  : null }
    </p>)
};

export default memo(Title);
