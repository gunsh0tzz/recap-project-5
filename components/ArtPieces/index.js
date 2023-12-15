import useSWR from "swr";
import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  console.clear();

  return (
    <ul>
      <ArtPiecePreview pieces={pieces} />
    </ul>
  );
}
