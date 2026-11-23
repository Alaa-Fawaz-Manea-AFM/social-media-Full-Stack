"use client";

import { abbreviateNumber } from "js-abbreviation-number";
import { Like_Icon, Liked_Icon } from "@/public/assets";
import { toggleLikeAction } from "@/actions/posts";
import { useUserContext } from "@/context/MyState";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";

const BtnLike = ({
  likeCounts,
  isliked,
  postId,
}: {
  likeCounts: number;
  isliked: boolean;
  postId: string;
}) => {
  const { user } = useUserContext();
  const router = useRouter();

  const [liked, setLiked] = useState(isliked || false);
  const [likeCount, setLikeCount] = useState<number>(likeCounts);
  const [loading, setLoading] = useState(false);

  const handleBtnRoute = async () => {
    if (!user?.id) return router.push("/log-in");
    if (loading) return;
    try {
      setLoading(true);
      const result = await toggleLikeAction(postId);
      if (!result.success) return toast.error(result.message);

      setLiked(result.liked);
      setLikeCount((prev) => (result.liked ? prev + 1 : prev - 1));
      toast.success(result.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-1">
      <Image
        onClick={handleBtnRoute}
        src={user?.id && liked ? Liked_Icon : Like_Icon}
        alt="liked"
        width={32}
        height={32}
        className={`cursor-pointer ${loading ? "opacity-50" : ""}`}
        unoptimized
      />

      {abbreviateNumber(likeCount, 2)}
    </div>
  );
};

export default BtnLike;
