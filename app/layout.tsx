import Head from "next/head";
import Link from "next/link";
import { ReactElement, ReactNode } from "react";

//SEO
export const metadata = {
  title: "Громадське радіо | Слухайте. думайте.",
  description:
    "«Громадське радіо» — незалежна «розмовна» радіостанція, яка надає неупереджену, об’єктивну та достовірну інформацію й аналіз подій в Україні та світі.",
  keywords: "ds ds",
  openGraph: {
    title: 'Громадське радіо | Слухайте. думайте.',
    description: "«Громадське радіо» — незалежна «розмовна» радіостанція, яка надає неупереджену, об’єктивну та достовірну інформацію й аналіз подій в Україні та світі.",
    images: "https://hromadske.radio/assets/logo_og.jpeg",
  },
  metadataBase: new URL('https://hromadske.radio/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'uk-UA': '/uk',
    },
  },
  twitter: {
    title: "Громадське радіо | Слухайте. думайте.",
    description:
    "«Громадське радіо» — незалежна «розмовна» радіостанція, яка надає неупереджену, об’єктивну та достовірну інформацію й аналіз подій в Україні та світі.",
    images: ['https://hromadske.radio/assets/logo_og.jpeg'],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
        <Link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>{children}</body>
    </html>
  )
}
