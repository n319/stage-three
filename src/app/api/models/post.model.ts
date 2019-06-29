export interface IPost {
  id: string;
  type: string;
  name: string;
  authorId: string;
}

export class PostModel implements IPost {
  id: string;
  type: string;
  name: string;
  authorId: string;
}
