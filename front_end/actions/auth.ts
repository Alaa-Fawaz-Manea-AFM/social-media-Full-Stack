"use server";

import { AxiosServer } from "@/lib/axios-server";
import { IFormSign_up, IFormLog_In } from "@/types";
import { AxiosResponse } from "axios";
import { cookies } from "next/headers";

export const loginAction = async (form: IFormLog_In) => {
  try {
    const response = await AxiosServer("post", "auth/login", undefined, form);
    await saveAuthCookies(response);

    return {
      success: true,
      data: response.data.data || null,
    };
  } catch {
    return {
      success: false,
      data: null,
    };
  }
};

export const signUpAction = async (
  form: IFormSign_up & { password: string },
) => {
  try {
    const response = await AxiosServer("post", "auth/signup", undefined, form);
    await saveAuthCookies(response);
    return {
      success: true,
      data: response.data.data || null,
    };
  } catch {
    return {
      success: false,
      data: null,
    };
  }
};

const saveAuthCookies = async (response: AxiosResponse) => {
  const cookieStore = await cookies();

  response.headers["set-cookie"]?.forEach((cookie: string) => {
    const [pair] = cookie.split(";");
    const [name, ...value] = pair.split("=");

    if (["accessToken"].includes(name)) {
      cookieStore.set(name, value.join("="), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
      });
    }
  });
};

export const logoutAction = async () => {
  try {
    await AxiosServer("post", "auth/logout");
  } catch {
    return { success: false };
  }

  const cookieStore = await cookies();

  cookieStore.delete("accessToken");

  return { success: true };
};

export const updateProfileAction = async (
  userId: string,
  updatedData: Partial<IFormSign_up>,
) => {
  try {
    const { data } = await AxiosServer(
      "patch",
      `users/${userId}`,
      undefined,
      updatedData,
    );

    return {
      success: true,
      message: data.message || "Profile Updated successfully",
    };
  } catch {
    return {
      success: false,
      message: "Error updating profile",
    };
  }
};

export const getUserDataAction = async () => {
  try {
    const { data } = await AxiosServer("get", "auth/me");

    return {
      success: true,
      user: data?.data || null,
    };
  } catch {
    return {
      success: false,
      user: null,
    };
  }
};
