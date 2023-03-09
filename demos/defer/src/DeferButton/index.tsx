import Defer, { IDeferProps } from "../../../packages/shared/Defer";

export default function DeferButton({ children, fallback, a11yText, predicate, onClick }: IDeferProps & { onClick: () => void }) {
  const buttonA11yText = predicate ? `En chargement de l'épisode ${a11yText}` : `Prêt à jouer l'épisode ${a11yText}`;

  return <button onClick={onClick}><Defer fallback={fallback} predicate={predicate} a11yText={buttonA11yText}>
    {children}
  </Defer></button>
}