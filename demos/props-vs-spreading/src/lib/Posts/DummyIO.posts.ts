import { get } from "../Api";
import { Posts } from "./index";

export type DummyIOPostsType = {
  data: any;
  total: number;
  page: number;
  limit: number;
}

export default class DummyIOPosts implements Posts {
  limit = 10;
  list = [];
  page = 0;
  total = 0;

  constructor(DummyIOData?: DummyIOPostsType) {
    this.list = DummyIOData?.data ?? this.list;
    this.limit = DummyIOData?.limit ?? this.limit;
    this.total = DummyIOData?.total ?? this.total;
    this.page = DummyIOData?.page ?? this.page;
  }

  async fetch(limit: number = 0) {
    const data = await get(`https://dummyapi.io/data/v1/post?limit=${limit}`).then(response => response.json());
    return new DummyIOPosts(data);
  }
}