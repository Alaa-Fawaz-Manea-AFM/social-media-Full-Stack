"use client";
import { DataActions } from "@/actions/dataActions";
import { useUserContext } from "@/context/MyState";
import { Delete, Edit } from "@/public/assets";
import { IPosts } from "@/types";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const BtnEditPost = ({
  profile,
  post,
}: {
  profile?: boolean;
  post: IPosts;
}) => {
  const { setEditPost } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleRemovePostsFUN = async () => {
    setIsOpen(false);
    const result = await DataActions("delete", `posts/${post.id}`);
    // const result = await removePostAction(post.id);

    if (result.success) {
      router.refresh();
      router.push("/");
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div
      className={`${profile ? "justify-between" : ""} flex items-center gap-2`}
    >
      <Image
        onClick={() => setIsOpen(!isOpen)}
        src={Delete}
        alt="Delete"
        width={32}
        height={32}
        className="cursor-pointer hover:opacity-80 transition-opacity"
        unoptimized
      />
      <Link href={`/post/edit/${post?.id}`}>
        <Image
          onClick={() => {
            setEditPost(post);
          }}
          src={Edit}
          alt="Edit"
          width={32}
          height={32}
          className="cursor-pointer hover:opacity-80 transition-opacity"
          unoptimized
        />
      </Link>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-10 cursor-default"
          style={{ direction: "ltr" }}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-black p-6 rounded-2xl shadow-2xl text-white max-w-sm w-full mx-4"
          >
            <h3 className="text-lg font-bold mb-2 text-left">Confirm Delete</h3>
            <p className="text-gray-400 text-sm text-left leading-relaxed">
              Are you sure you want to delete this post? This action cannot be
              undone.
            </p>

            <div className="mt-5 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-xl text-sm font-medium text-gray-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleRemovePostsFUN}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 transition-colors text-white rounded-xl text-sm font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BtnEditPost;
