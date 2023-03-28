import Card from "packages-utils/shared/Card";
import MemoizedCard from "./Components/Card";
import DummyIOPosts from "props-vs-spreading/src/lib/Posts";
import { getPosts } from "props-vs-spreading/src/utils/Api";
import { useEffect, useState } from "react";

export default function List() {
  const [data, setData] = useState<DummyIOPosts | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const data = await getPosts(5);
      setData(data);
    }

    if (!data) {
      fetch().catch();
    }
  }, [data]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", height: "100vh", margin: "40px" }}>
      <h2>List item vs Memoized list item</h2>
      <div>
        Counter: {count}
      </div>
      <div>
        <h2>List with basic card</h2>
        <div style={{ display: "flex", alignItems: "stretch", gap: "10px" }}>
          {data?.list.map((post: any, index) => (
            <Card text={post?.text} key={`basic-post-${index}`} />
          ))}
        </div>
      </div>
      <div style={{ marginTop: "60px" }}>
        <h2>List with memo</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          {data?.list.map((post: any, index) => (
            <MemoizedCard text={post?.text} key={`memoized-post-${index}`} />
          ))}
        </div>
      </div>
      <button onClick={() => setCount(c => c + 1)}>
        Trigger rerender
      </button>
    </div>
  )
}