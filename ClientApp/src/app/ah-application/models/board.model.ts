import { CardModel, ICard } from './card.model';
import { IList } from './list.model';

export interface IBoard {
  id: string;
  name: string;
  lists: IList[];
}

export class BoardModel implements IBoard {
  id: string;
  name: string;
  lists: IList[];

  constructor() {}

  // addCard(card: CardInterface) {
  //   if (this.isCardEmpty()) {
  //     this.cards = [];
  //   }
  //   this.cards.push(card);
  // }
  //
  // removeCard(id: string): CardInterface {
  //   if (this.isCardEmpty()) {
  //     return null;
  //   }
  //   const cardIndex = this.cards.findIndex(x => x.id === id);
  //   if ( cardIndex > -1 ) {
  //     const cardInterfaces = this.cards.splice(cardIndex, 1);
  //     return cardInterfaces[0];
  //   }
  //
  //   return null;
  //
  // }
  //
  // private isCardEmpty() {
  //   return this.cards === undefined || this.cards === null;
  // }
}
