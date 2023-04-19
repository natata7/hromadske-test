import Date from "../../molecules/Date/Date";
import CoverImage from "../../molecules/CoverImage/CoverImage";
import Link from "next/link";
import styles from "./YoutubePreview.module.css";

export default function YoutubePreview({
  iframe
}: any) {

  return (
    <article className={styles.article}>
      <div className={styles.wrap} dangerouslySetInnerHTML={{ __html:  iframe  }}>
      </div>
    </article>
  );
}
