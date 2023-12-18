console.clear();

import ArtPiecePreview from "@/components/ArtPiecePreview";
import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";
import FavoriteButton from "@/components/FavoriteButton";

export default function SpotlightPage({ randomPiece }) {
  return (
    <>
      <h1>Art Gallery: Spotlight</h1>
      <FavoriteButton />

      <Spotlight randomPiece={randomPiece} />
    </>
  );
}
