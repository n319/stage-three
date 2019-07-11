import { ISliderContentModel, UISliderContentModel } from "./project.model";

export interface IPiece extends ISliderContentModel {
  Id: string | null;
  Name: string | null;
  AuthorId: string | null;
  CreatedOn: string | null;
  CompletedOn: string | null;
  Pieces: string[] | null;
}

export class PieceModel implements IPiece {

  getContent() : UISliderContentModel {
    const model: UISliderContentModel = {
      thumbnail: '',
      title: this.Name,
      subtext: '',
      link: ''
    };
    return model;
  };
  
  Id: string | null;
  Name: string | null;
  AuthorId: string | null;
  CreatedOn: string | null;
  CompletedOn: string | null;
  Pieces: string[] | null;
}
