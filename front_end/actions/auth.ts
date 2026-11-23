"use server";

import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function loginAction(data: { email: string; password: string }) {
  try {
    const response = await fetch(`${API_URL}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Login failed",
      };
    }

    const cookieStore = await cookies();

    const setCookie = response.headers.getSetCookie();

    for (const cookie of setCookie) {
      const [cookiePair] = cookie.split(";");
      const separator = cookiePair.indexOf("=");

      if (separator === -1) continue;

      const name = cookiePair.slice(0, separator);
      const value = cookiePair.slice(separator + 1);

      const options = cookie
        .split(";")
        .slice(1)
        .reduce((acc: Record<string, string>, part) => {
          const [key, ...rest] = part.trim().split("=");

          acc[key.toLowerCase()] = rest.join("=");
          return acc;
        }, {});

      cookieStore.set(name, value, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        // sameSite: "lax",
        path: options.path || "/",
        maxAge: options["max-age"] ? Number(options["max-age"]) : undefined,
      });
    }

    return {
      success: true,
      message: "Login successful",
    };
  } catch (error) {
    console.error("Login Action Error:", error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
