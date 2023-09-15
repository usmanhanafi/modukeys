import "@/styles/globals.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Modukeys</title>
        <meta name="author" content="Tholib Usman Hanafi" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
