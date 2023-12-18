console.clear();

import ArtPiecePreview from "@/components/ArtPiecePreview";
import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ randomPiece }) {
  return (
    <>
      <Spotlight randomPiece={randomPiece} />
    </>
  );
}
