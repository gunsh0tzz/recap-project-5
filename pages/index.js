console.clear();

import ArtPiecePreview from "@/components/ArtPiecePreview";
import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";
import useSWR from "swr";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  function getRandomArtPiece() {
    return data[Math.floor(Math.random() * data.length)];
  }

  return (
    <>
      <Spotlight piece={getRandomArtPiece()} />
      <ArtPieces pieces={data} />
    </>
  );
}
