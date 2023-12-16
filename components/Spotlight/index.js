import useSWR from "swr";
import Image from "next/image";

export default function Spotlight({ piece }) {
  console.log("piece:", piece);

  return (
    <div className="debug">
      <h2>Random Art Piece</h2>
      <Image src={piece.imageSource} alt="Image" width={300} height={300} />
      <p>Artist of random art piece: {piece.artist}</p>
    </div>
  );
}

// TODO: Finish User Story 2
// https://github.com/neuefische/web-exercises/blob/main/sessions/recap-project-5/art-gallery-app/README.md
