export interface ICard {
  id: string;
  header: string;
  summary: string;
  attr: CardDataModel;
}

export class CardDataModel {}

export class CardModel implements ICard {
  constructor(public id: string, public header: string, public summary: string, public attr: CardDataModel) {}
}
