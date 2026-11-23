"use server";
import { AxiosServer } from "@/lib/axios-server";

export const createPostAction = async (body: Record<string, unknown>) => {
  try {
    await AxiosServer("post", "posts", undefined, body);
    return { success: true };
  } catch {
    return { success: false };
  }
};

export const updatePostAction = async (
  postId: string,
  body: Record<string, unknown>,
) => {
  try {
    await AxiosServer("patch", `posts/${postId}`, undefined, body);
    return { success: true };
  } catch {
    return { success: false };
  }
};

export const removePostAction = async (postId: string) => {
  try {
    await AxiosServer("delete", `posts/${postId}`);

    return {
      success: true,
      message: "Post deleted",
    };
  } catch {
    return {
      success: false,
      message: "Failed to delete post, please try again.",
    };
  }
};

export const getMorePosts = async (url: string) => {
  try {
    const { data } = await AxiosServer("get", url);

    return {
      success: true,
      data,
    };
  } catch {
    return {
      success: false,
      data: null,
      message: "Failed to load posts",
    };
  }
};

export const toggleLikeAction = async (postId: string) => {
  try {
    const { data } = await AxiosServer("post", `likes/${postId}`);

    return {
      liked: data.data,
      success: true,
      message: data.message,
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong, Please try again.",
    };
  }
};

export const toggleSavedAction = async (postId: string) => {
  try {
    const { data } = await AxiosServer("post", `saves/${postId}`);

    return {
      success: true,
      saved: data.data,
      message: data.message,
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong, Please try again.",
    };
  }
};

export const toggleFollowingAction = async (userFollowId: string) => {
  try {
    const { data } = await AxiosServer("post", `followers/${userFollowId}`);

    return {
      success: true,
      following: data.data,
      message: data.message,
    };
  } catch {
    return {
      success: false,
      following: false,
      message: "Something went wrong, Please try again.",
    };
  }
};
