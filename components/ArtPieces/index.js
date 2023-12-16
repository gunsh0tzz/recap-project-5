import useSWR from "swr";
import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      <ArtPiecePreview pieces={pieces} />
    </ul>
  );
}
