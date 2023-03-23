import { PropsWithChildren, use, cache } from "react";
import { User, UserContext } from "../Contexts/UserContext";
import { getTodos, Todos } from "../utils/todos";

export default function AfterHook({ loadData }: PropsWithChildren<{ loadData: boolean }>) {
  let data: Todos | null = null;
  let user: User | null = null;

  if (loadData) {
    const e = use<UserContext>(UserContext);
    user = e.user;
  }

  if (!data) {
    // uncomment to see the difference
    // not cached
    // data = use<Todos>(getTodos());

    // cached
    data = use<Todos>(fetchTodos());
  }


  return <div>
    {user ? <div>
      <span>{user.firstName} {user.lastName}, {user.age}</span>
    </div> : null}

    {data ? <ul>{data.todos?.map((todo, index) =>
      <li key={index}>{todo.todo}</li>
    )}</ul> : null}
  </div>
}

const fetchTodos = cache(() => {
  return getTodos();
});
