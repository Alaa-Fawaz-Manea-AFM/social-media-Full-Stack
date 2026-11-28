"use client";

import { Save_Icon, Saved_Icon } from "@/public/assets";
import { useUserContext } from "@/context/MyState";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import { DataActions } from "@/actions/dataActions";

const BtnSaved = ({
  savedPage,
  postId,
  isSaved,
}: {
  savedPage?: boolean;
  postId: string;
  isSaved: boolean;
}) => {
  const { user } = useUserContext();
  const router = useRouter();

  const [saved, setSaved] = useState<boolean>(isSaved || false);
  const [loading, setLoading] = useState(false);

  const handleBtnRoute = async () => {
    if (!user?.id) return router.push("/log-in");
    if (loading) return;
    try {
      setLoading(true);
      const result = await DataActions("post", `saves/${postId}`);
      if (!result.success) return toast.error(result.message);
      setSaved(result.data.data);
      toast.success(result.message);
      if (savedPage) router.refresh();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-1">
      <Image
        onClick={handleBtnRoute}
        src={
          savedPage ? Saved_Icon : user?.id && saved ? Saved_Icon : Save_Icon
        }
        alt="Saved_Icon"
        width={32}
        height={32}
        className={`cursor-pointer ${loading ? "opacity-50" : ""}`}
        unoptimized
      />
    </div>
  );
};

export default BtnSaved;
