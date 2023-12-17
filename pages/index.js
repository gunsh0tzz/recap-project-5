import ArtPiecePreview from "@/components/ArtPiecePreview";
import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";
import Spotlight from '@/components/Spotlight';

function getRandomPiece(pieces) {
  return pieces[Math.floor(Math.random() * pieces.length)];
}

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <ArtPieces pieces={data} />
    </>
  );
}
