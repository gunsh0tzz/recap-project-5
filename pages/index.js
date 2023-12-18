console.clear();

import ArtPiecePreview from "@/components/ArtPiecePreview";
import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ randomPiece }) {
  return (
    <>
      <h1>Art Gallery: Spotlight</h1>
      <Spotlight randomPiece={randomPiece} />
    </>
  );
}
