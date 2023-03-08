import Posts from "../lib/Posts";

const posts = new Posts();

export async function getPosts() {
  return Posts.fetch(posts.limit);
}