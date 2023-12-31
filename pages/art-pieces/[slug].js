import DetailArtPiece from "@/components/DetailedArtPiece";
import { useRouter } from "next/router";
import FavoriteButton from "@/components/FavoriteButton";

export default function DetailPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <DetailArtPiece slug={slug} pieces={pieces} />
    </>
  );
}
