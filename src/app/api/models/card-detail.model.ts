export interface ICardDetail {
  id: string;
  header: string;
  summary: string;
  attr: CardDataModel;
}

export class CardDataModel{

}

export class CardDetailModel implements ICardDetail {

  constructor(public id: string, public header: string, public summary: string, public attr: CardDataModel) {
  }






}
