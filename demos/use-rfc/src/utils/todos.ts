type Todo = {
  id: number,
  todo: string,
};

export type Todos = {
limit: number,
skip: number,
todos: [Todo],
total: number
};

export async function getTodos(): Promise<Todos> {
  //return Promise.reject();
  return fetch('https://dummyjson.com/todos').then(res => res.json());
}
