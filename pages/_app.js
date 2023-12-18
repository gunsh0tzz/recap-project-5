import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  function getRandomArtPiece() {
    return data[Math.floor(Math.random() * data.length)];
  }
  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component
        {...pageProps}
        pieces={data}
        randomPiece={getRandomArtPiece()}
      />
    </>
  );
}
