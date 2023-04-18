import Date from "../../molecules/Date/Date";
import CoverImage from "../../molecules/CoverImage/CoverImage";
import Link from "next/link";
import styles from "./SidebarPreview.module.css";

export default function PostPreview({
  title,
  date,
  slug,
}) {
  return (
    <article className={styles.article}>
      <div className={styles.wrap}>
        <h3 className={styles.title}>
          <Link
            href={`/posts/${slug}`}
            className={styles.link}
            dangerouslySetInnerHTML={{ __html: title }}
          ></Link>
        </h3>
        <div className={styles.date}>
          <Date dateString={date} />
        </div>
      </div>
    </article>
  );
}
