import Defer, { IDeferProps } from "../../../packages/shared/Defer";

export default function DeferButton({
                                      children,
                                      fallback,
                                      loadingText,
                                      predicate,
                                      onClick
                                    }: IDeferProps & { onClick: () => void }) {

  return <button onClick={onClick} disabled={predicate}>
    <Defer fallback={fallback} predicate={predicate} loadingText={loadingText}>
      {children}
    </Defer>
  </button>
}