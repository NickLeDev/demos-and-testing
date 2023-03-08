import { UserPreview } from "../Users";

export type DummyIOPostPreview = {
  id: string;
  text: string;
  image: string;
  likes: number;
  tags: [string];
  publishDate: string;
  owner: UserPreview
}