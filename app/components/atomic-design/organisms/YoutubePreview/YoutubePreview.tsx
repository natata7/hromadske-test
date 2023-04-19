"use client";
import { useEffect, useRef, useState } from "react";
import Date from "../../molecules/Date/Date";
import CoverImage from "../../molecules/CoverImage/CoverImage";
import Link from "next/link";
import styles from "./YoutubePreview.module.css";

export default function YoutubePreview({ iframe }: any) {
  const divRef = useRef<HTMLIFrameElement>();
  const [loading, setLoading] = useState(true);

  function urlify(text: string) {
    const urlRegex = /(https?:\/\/www.youtube[^\s\"]+)/g;
    return text.match(urlRegex);
  }
  const result = urlify(iframe);
  let link: any = null;
  if (result && result[0]) {
    link = result[0];
  }

  console.log(link);
  const [src, setSrc] = useState("");

  // useEffect(() => {
  //   if (loading) {
  //     setTimeout(() => {
  //       if (loading) {
  //         setLoading(false);
  //         console.log(loading);
  //       }
  //     }, 1000);
  //   }
  // }, [loading, setLoading]);

  // useEffect(() => {
  //   console.log(link);
  //   if (loading === true) {
  //     divRef.current.src =
  //       "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif";
  //   } else {
  //     divRef.current.src = link;
  //   }
  // }, [link, divRef]);

  return (
    <article className={styles.article}>
      <div
        className={styles.wrap}
        // dangerouslySetInnerHTML={{ __html: iframe }}
      >
        <iframe
          // ref={divRef}
          src={link} width="320" loading="lazy" height="640"></iframe>
      </div>
    </article>
  );
}
