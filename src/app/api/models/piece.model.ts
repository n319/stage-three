export interface IPiece {
  Id: string | null;
  Name: string | null;
  AuthorId: string | null;
  CreatedOn: string | null;
  CompletedOn: string | null;
  Pieces: string[] | null;
}

export class PieceModel implements IPiece {
  Id: string | null;
  Name: string | null;
  AuthorId: string | null;
  CreatedOn: string | null;
  CompletedOn: string | null;
  Pieces: string[] | null;
}
