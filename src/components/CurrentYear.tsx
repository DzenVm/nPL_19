import { cacheLife } from "next/cache";

export async function CurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}
