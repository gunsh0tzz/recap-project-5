import useSWR from "swr";
import Image from "next/image";

export default function ArtPiecePreview({ pieces }) {
  console.clear();

  return pieces.map(({ slug, imageSource, name, artist }) => (
    <li className="debug" key={slug}>
      <Image src={imageSource} height={300} width={300} alt={slug} />
      <h2>{name}</h2>
      <p>{artist}</p>
    </li>
  ));
}
