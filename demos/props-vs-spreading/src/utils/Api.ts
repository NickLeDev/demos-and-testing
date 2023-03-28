import Posts from "../lib/Posts";

const posts = new Posts();

export async function getPosts(limit = 10) {
  return posts.fetch(limit);
}