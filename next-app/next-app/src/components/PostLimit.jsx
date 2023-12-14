"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

//Client components allowing  user to choose the number of posts displayed and set new value in search params

export default function PostsLimit(defaultlimit) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const limit = searchParams.has("limit")
    ? searchParams.get("limit")
    : defaultlimit;

  const handleChangeLimit = (e) => {
    //change the route to the exsisting path plus the new search param
    router.replace(
      pathname +
        "?limit=" +
        e.target.value +
        "&page=" +
        searchParams.get("page")
    );
  };

  return (
    <label className="PostLimit">
      Number of posts:
      <select onChange={handleChangeLimit} value={limit}>
        <option>5</option>
        <option>10</option>
        <option>20</option>
      </select>
    </label>
  );
}

// //see posts/[id]/pages.jsx
