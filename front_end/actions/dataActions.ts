"use server";

import { AxiosServer } from "@/lib/axios-server";

export const DataActions = async (
  method: "get" | "post" | "delete" | "patch" | "put",
  endPoint: string,
  query?: Record<string, unknown>,
  data?: unknown,
) => {
  try {
    const res = await AxiosServer(method, endPoint, query, data);

    return {
      success: true,
      data: res.data,
      message: res.data.message,
    };
  } catch {
    return {
      success: false,
      data: null,
      message: "Something With Wrong",
    };
  }
};
