import MarqueeItem from "./MarqueeItem";

export default async function Marquee({ translation }) {
  console.log("questo è il data", translation);

  return <MarqueeItem translation={translation.marquee} />;
}
