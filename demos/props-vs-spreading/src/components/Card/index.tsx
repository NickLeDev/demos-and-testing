import { CardProps } from "./Card.type";

export default function Card({ title }: CardProps) {
  const cardTitle = title ?? "Default title";

  return (<>
    <div className="card">
      <span className="card__title">
        {cardTitle}
      </span>
    </div>
  </>);
}