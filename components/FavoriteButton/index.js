import Image from "next/image";

export default function FavoriteButton({ onToggleFavorite }) {
  return (
    <>
      <button type="button" onClick={onToggleFavorite}>
        <Image
          src="/assets/heart.svg"
          height={30}
          width={30}
          alt="favoriteIcon"
        />
      </button>
    </>
  );
}
