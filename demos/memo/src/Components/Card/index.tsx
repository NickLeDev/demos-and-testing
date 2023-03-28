
import { memo, PropsWithChildren } from "react";
import './Card.css'
import SharedCard from "packages-utils/shared/Card";
function Card({ children, text }: PropsWithChildren & { text?: string }) {
  return <SharedCard text={text}>{ children }</SharedCard>
}

export default memo(Card);



