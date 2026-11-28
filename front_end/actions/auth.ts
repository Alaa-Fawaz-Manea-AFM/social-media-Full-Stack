"use server";

import { AxiosServer } from "@/lib/axios-server";
import { IFormSign_up, IFormLog_In } from "@/types";
import { AxiosResponse } from "axios";
import { cookies } from "next/headers";

export const loginAndsignUpAction = async (
  form: IFormLog_In | (IFormSign_up & { password: string }),
) => {
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
