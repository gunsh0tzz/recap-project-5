import ArtPiecePreview from "@/components/ArtPiecePreview";
import ArtPieces from "@/components/ArtPieces";
import FavoriteButton from "@/components/FavoriteButton";

export default function ArtPiecesPage({ pieces }) {
  return (
    <>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={pieces} />
    </>
  );
}
