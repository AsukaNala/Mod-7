"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function PageLimit(defaultpage) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const limit = searchParams.has("page")
    ? searchParams.get("page")
    : defaultpage;

  const handleSelectPage = (e) => {
    router.replace(
      pathname +
        "?limit=" +
        searchParams.get("limit") +
        "&page=" +
        e.target.value
    );
  };

  return (
    <div>
      <label className="SelectPage">
        Select Page:
        <select onChange={handleSelectPage} value={limit}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
    </div>
  );
}
