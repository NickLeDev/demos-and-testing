import { useContext, useEffect, useState } from "react";
import { UserContext } from "./Contexts/UserContext";
import { Todos, getTodos } from "./utils/todos";

export default function Before() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Todos | null>(null);
  const [error, setError] = useState<string>("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);

      try {
        const data = await getTodos();
        setData(data);
      } catch (e) {
        setError("Oh oh!");
      } finally {
        setIsLoading(false);
      }
    }

    if (data || !user.id) return;

    fetch().catch();

  }, [data, user.id])

  return (
    <>
      <h1>Before - the classic</h1>
      <div>
        {user ? <div>
          <span>{user.firstName} {user.lastName}, {user.age}</span>
        </div> : null}
      </div>
      {isLoading ? <div>... is loading your todos</div> :
        error ? <div>{error}</div> :
          data ? <ul>{data.todos?.map((todo, index) =>
            <li key={index}>{todo.todo}</li>
          )}</ul> : null}
    </>
  );
}
