import { toast } from "react-toastify";
import {
  IPosts,
  IForm_Create_Update_Post,
  TypeCreateAndUpdatePost,
} from "@/types";
import { Dispatch, SetStateAction } from "react";
import axios from "axios";
import { CREATE_POST, EDIT_POST } from "./Constant";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { DataActions } from "@/actions/dataActions";

export const formateDate = (date: string = ""): string => {
  const seconds: number = Math.floor(
    (new Date().getTime() - new Date(date).getTime()) / 1000,
  );

  switch (true) {
    case seconds < 60:
      return `${Math.floor(seconds)} seconds ago`;
    case seconds < 3600:
      const minutes = Math.floor(seconds / 60);
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    case seconds < 86400:
      const hours = Math.floor(seconds / 3600);
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    case seconds < 2592000:
      const days = Math.floor(seconds / 86400);
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    case seconds < 31536000:
      const months = Math.floor(seconds / 2592000);
      return `${months} ${months === 1 ? "month" : "months"} ago`;
    default:
      const years = Math.floor(seconds / 31536000);
      return `${years} ${years === 1 ? "year" : "years"} ago`;
  }
};

export const handleNavigate = (
  currentUser: string,
  userId: string,
  router: AppRouterInstance,
) => router.push(currentUser === userId ? `/user/profile` : `/user/${userId}`);

export const handleSubmitCreateAndUpdatePosts = async (
  type: TypeCreateAndUpdatePost,
  form: IForm_Create_Update_Post,
  router: AppRouterInstance,
  editPost: IPosts | null,
  setEditPost: Dispatch<SetStateAction<IPosts | null>>,
  setForm: Dispatch<SetStateAction<IForm_Create_Update_Post>>,
  setValid: Dispatch<SetStateAction<boolean>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
) => {
  const { imageUrl, caption } = form;

  try {
    setValid(true);
    setLoading(true);

    const body: Partial<IForm_Create_Update_Post> = {};

    if (caption !== editPost?.caption) {
      body.caption = caption;
    }

    if (type === CREATE_POST) {
      if (!(imageUrl instanceof File)) {
        toast.error("Please select image");
        return;
      }

      const typeImages = /image\/(png|jpg|jpeg|svg|webp)/i.test(imageUrl.type);

      if (imageUrl.size > 2 * 1024 * 1024 || !typeImages) {
        toast.error(
          "Image Size should be <= 2MB and type should be (svg, png, jpg)",
        );
        return;
      }

      const formData = new FormData();
      formData.append("file", imageUrl);
      formData.append("folderName", "cloudinary-tutorial");

      const { data } = await axios.post("/api/fileupload", formData);

      if (data.error) {
        toast.error("Error uploading image");
        return;
      }

      body.imageUrl = data.res.secure_url;
      body.public_id = data.res.public_id;

      const result = await DataActions("post", "posts", undefined, body);
      if (!result.success) {
        toast.error("Oops, Please try again.");
        return;
      }
    } else if (type === EDIT_POST) {
      const oldPublicId = editPost?.public_id;

      if (imageUrl instanceof File) {
        const typeImages = /image\/(png|jpg|jpeg|svg|webp)/i.test(
          imageUrl.type,
        );

        if (imageUrl.size > 2 * 1024 * 1024 || !typeImages) {
          toast.error(
            "Image Size should be <= 2MB and type should be (svg, png, jpg)",
          );
          return;
        }

        const formData = new FormData();
        formData.append("file", imageUrl);
        formData.append("folderName", "cloudinary-tutorial");

        const { data } = await axios.post("/api/fileupload", formData);

        if (data.error) {
          toast.error("Error uploading image");
          return;
        }

        body.imageUrl = data.res.secure_url;
        body.public_id = data.res.public_id;
      }

      if (Object.keys(body).length === 0) {
        toast.error("No changes found");
        return;
      }

      if (!editPost?.id) {
        toast.error("Post not found");
        return;
      }

      const result = await DataActions(
        "patch",
        `posts/${editPost.id}`,
        undefined,
        body,
      );
      if (!result.success) {
        toast.error("Oops, Please try again.");
        return;
      }

      if (imageUrl instanceof File && oldPublicId) {
        try {
          await axios.delete("/api/fileupload", {
            data: {
              public_id: oldPublicId,
            },
          });
        } catch {
          console.error("Failed to delete old Cloudinary image");
        }
      }

      router.refresh();
      router.back();
      setEditPost(null);
    }

    setForm({
      imageUrl: "",
      caption: "",
    });

    toast.success(`${type} Post Successfully`);
  } catch {
    toast.error("Oops, Please try again.");
  } finally {
    setValid(false);
    setLoading(false);
  }
};
