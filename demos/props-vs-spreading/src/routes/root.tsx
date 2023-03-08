import { useEffect, useState } from "react";
import { Posts } from "../lib/Posts";

import { getPosts } from "../utils/Api";

export default function Root() {
  const [data, setData] = useState<Posts | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();

      if (data) setData(data);
    }

    if (data) return;

    fetchData().catch();
  }, []);

  console.log(data);
  return (
    <>

    </>
  );
}