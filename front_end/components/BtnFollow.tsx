"use client";

import { DataActions } from "@/actions/dataActions";
import { useUserContext } from "@/context/MyState";
import { useRouter } from "next-nprogress-bar";
import { Dispatch, SetStateAction, useState } from "react";
import { RiUserFollowLine, RiUserUnfollowLine } from "react-icons/ri";
import { toast } from "react-toastify";

type IBtnFollow = {
  followCounts?: number;
  setFollowCounts?: Dispatch<SetStateAction<number>>;
  userFollowId: string;
  isFollow: boolean;
};

const BtnFollow = ({ setFollowCounts, isFollow, userFollowId }: IBtnFollow) => {
  const { user } = useUserContext();
  const [IsFollow, setIsFollow] = useState(isFollow || false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleButtonClick = async () => {
    if (!user?.id) return router.push("/log-in");
    if (loading) return;

    setLoading(true);
    const result = await DataActions("post", `followers/${userFollowId}`);
    if (!result.success) {
      toast.error(result.message);
      setLoading(false);
      return;
    }
    setIsFollow(result.data.data);
    if (setFollowCounts) {
      setFollowCounts((prev) =>
        result.data.data ? prev + 1 : Math.max(0, prev - 1),
      );
    }

    if (result.success) toast.success(result.message);
    setLoading(false);
  };

  return (
    <button
      onClick={handleButtonClick}
      disabled={loading}
      className="px-5 py-2 bg-light-purple h-fit rounded-lg font-semibold cursor-pointer disabled:opacity-50"
    >
      {user?.id && IsFollow ? (
        <span className="flex items-center gap-2">
          <RiUserUnfollowLine />
          <span>Following</span>
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <RiUserFollowLine />
          <span>Follow</span>
        </span>
      )}
    </button>
  );
};

export default BtnFollow;
