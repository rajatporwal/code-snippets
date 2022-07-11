import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head><link
      href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i|Nunito:300,300i"
      rel="stylesheet"
    /></Head>
      <Component {...pageProps} />
    </>
  );
}
