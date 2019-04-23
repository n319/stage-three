import {CardModel, ICard} from './card.model';

export interface IList {
  id: string;
  name: string;
  position: number;
  cards: ICard[];

}


export class ListModel implements IList {

  cards: ICard[] = [];
  id: string;
  name: string;
  position: number;


  constructor() {
  }



  addCard(card: ICard) {
    if (this.isCardEmpty()) {
      this.cards = [];
    }
    this.cards.push(card);
  }

  removeCard(id: string): ICard {
    if (this.isCardEmpty()) {
      return null;
    }
    const cardIndex = this.cards.findIndex(x => x.id === id);
    if ( cardIndex > -1 ) {
      const cardInterfaces = this.cards.splice(cardIndex, 1);
      return cardInterfaces[0];
    }

    return null;

  }

  private isCardEmpty() {
    return this.cards === undefined || this.cards === null;
  }


}
