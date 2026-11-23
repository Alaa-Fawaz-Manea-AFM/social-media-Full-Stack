// import axios from "axios";
// import { cookies } from "next/headers";
// import { DOMAIN } from "./axios-client";

// export const AxiosServer = async (
//   method: "get" | "post" | "delete" | "patch",
//   url: string,
//   query?: Record<string, unknown>,
//   data?: unknown,
// ) => {
//   const cookieStore = await cookies();

//   const allCookies = cookieStore
//     .getAll()
//     .map((c) => `${c.name}=${c.value}`)
//     .join("; ");

//   return axios({
//     method,
//     url: `${DOMAIN}${url}`,
//     data,
//     params: query,
//     headers: {
//       cookie: allCookies,
//     },
//   });
// };

import axios from "axios";
import { cookies, headers } from "next/headers";
import { DOMAIN } from "./axios-client";

export const AxiosServer = async (
  method: "get" | "post" | "delete" | "patch",
  url: string,
  query?: Record<string, unknown>,
  data?: unknown,
) => {
  const cookieStore = await cookies();
  const requestHeaders = await headers();

  const cookieNames = cookieStore.getAll().map((c) => c.name);

  console.log("========== REQUEST DEBUG ==========");
  console.log("URL:", url);
  console.log("Cookie names:", cookieNames);
  console.log("Cookie count:", cookieNames.length);
  console.log("Incoming Cookie Header exists:", !!requestHeaders.get("cookie"));
  console.log("===================================");

  const allCookies = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  return axios({
    method,
    url: `${DOMAIN}${url}`,
    data,
    params: query,
    headers: {
      Cookie: allCookies,
    },
  });
};
