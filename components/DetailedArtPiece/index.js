import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "@/components/FavoriteButton";

const StyledLink = styled(Link)`
  text-decoration: none;
  fontsize: 2rem;
  color: black;
`;

export default function DetailArtPiece({ pieces, slug }) {
  const result = pieces.filter((piece) => piece.slug === slug);
  return (
    <>
      <h2>Art Gallery: Detailpage</h2>
      <ul>
        <li className="debug" key={result[0].slug}>
          <Image
            src={result[0].imageSource}
            height={300}
            width={300}
            alt={result[0].slug}
          />
          <FavoriteButton />
          <h3>{result[0].name}</h3>
          <p>{result[0].artist}</p>
          <p>{result[0].year}</p>
          <p>{result[0].genre}</p>
          <button>
            <StyledLink href="/art-pieces">Back to all Art pieces</StyledLink>
          </button>
        </li>
      </ul>
    </>
  );
}
