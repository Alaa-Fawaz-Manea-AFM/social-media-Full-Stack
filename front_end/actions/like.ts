"use server";

import { cookies } from "next/headers";

export const toggleLikeAction = async (postId: string) => {
  try {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;
    const refreshToken = cookieStore.get("refreshToken")?.value;

    if (!accessToken) {
      return {
        success: false,
        message: "Please log in first.",
      };
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/likes/${postId}`,
      {
        method: "POST",
        headers: {
          Cookie: [
            `accessToken=${accessToken}`,
            ...(refreshToken ? [`refreshToken=${refreshToken}`] : []),
          ].join("; "),
        },
        cache: "no-store",
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Something went wrong.",
      };
    }

    return {
      success: true,
      liked: data.data,
      message: data.message,
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong, Please try again.",
    };
  }
};
