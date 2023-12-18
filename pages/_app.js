import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    {
      defaultValue: [],
    }
  );

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  function handleToggleFavorite(slug) {
    setArtPiecesInfo(
      artPiecesInfo.map((pieceInfo) =>
        pieceInfo.slug === slug
          ? { ...pieceInfo, isFavorite: !pieceInfo.isFavorite }
          : pieceInfo
      )
    );
    console.log("buttonclicked");
  }

  function getRandomArtPiece() {
    return data[Math.floor(Math.random() * data.length)];
  }
  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component
        onToggleFavorite={handleToggleFavorite}
        favoriteFlaggs={artPiecesInfo}
        {...pageProps}
        pieces={data}
        randomPiece={getRandomArtPiece()}
      />
    </>
  );
}
