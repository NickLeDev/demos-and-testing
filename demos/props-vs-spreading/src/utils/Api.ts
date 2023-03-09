import Posts from "../lib/Posts";

const posts = new Posts();

export async function getPosts() {
  return posts.fetch(posts.limit);
}