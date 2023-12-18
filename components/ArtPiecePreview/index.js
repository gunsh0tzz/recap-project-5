import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ pieces }) {
  return pieces.map(({ slug, imageSource, name, artist }) => (
    <li className="debug" key={slug}>
      <Link href={"/art-pieces/" + slug}>
        <Image src={imageSource} height={300} width={300} alt={slug} />
      </Link>
      <h2>{name}</h2>
      <p>{artist}</p>
    </li>
  ));
}
