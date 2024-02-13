import Link from "next/link";
import styles from "./LinkMarquee.module.css";
const myFont2 = localFont({ src: "../../fonts/Sneak-Regular.ttf" });
import localFont from "next/font/local";

const LinkMarquee = () => {
  return (
    <Link href="/works">
      <div class={styles.marquee}>
        <div className={`${styles.content} ${myFont2.className}`}>
          <span className="text-second">tutte le storie</span>
          <span className="text-pink">tutte le storie</span>
          <span className="text-white dark:text-third">tutte le storie</span>
          <span className="text-second">tutte le storie</span>
          <span className="text-pink">tutte le storie</span>
          <span className="text-white dark:text-third">tutte le storie</span>
        </div>
      </div>
    </Link>
  );
};

export default LinkMarquee;
