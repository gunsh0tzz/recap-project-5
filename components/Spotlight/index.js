import useSWR from "swr";
import Image from "next/image";

export default function Spotlight({ pieces }) {
  function getRandomArtPiece() {
    return pieces[Math.floor(Math.random() * array.length)];
  }

  return getRandomArtPiece();
}
