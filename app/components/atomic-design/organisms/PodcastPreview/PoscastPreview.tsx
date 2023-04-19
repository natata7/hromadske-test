import Date from "../../molecules/Date/Date";
import CoverImage from "../../molecules/CoverImage/CoverImage";
import Link from "next/link";
import styles from "./PodcastPreview.module.css";

export default function PodcastPreview({
  title,
  coverImage,
  date,
  slug,
}: {
  title: string;
  coverImage: string;
  date: string;
  slug: string;
}) {
  return (
    <article className={styles.article}>
      <div className={styles.wrap}>
        <div className={styles.searchArea}>
          {coverImage && (
            <CoverImage title={title} coverImage={coverImage} slug={slug} />
          )}
        </div>
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
