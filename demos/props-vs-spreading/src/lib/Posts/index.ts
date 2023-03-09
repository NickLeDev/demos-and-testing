import DummyIOPosts from "./DummyIO.posts";

export type PostsType = {
  list: Array<any>;
  total: number;
  page: number;
  limit: number;
}

export interface Posts {
  list: Array<any>;
  total: number;
  page: number;
  limit: number;

  fetch(): Promise<PostsType>;
}



export default DummyIOPosts;