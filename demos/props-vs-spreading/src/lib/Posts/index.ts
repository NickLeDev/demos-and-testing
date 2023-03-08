import DummyIOPosts from "./DummyIO.posts";

export type PostsType = {
  list: Array<any>;
  total: number;
  page: number;
  limit: number;
}

export abstract class Posts {
  public list: Array<any> = [];
  public total: number = 0;
  public page: number = 0;
  public limit: number = 0;

  public static async fetch() {}
}



export default DummyIOPosts;