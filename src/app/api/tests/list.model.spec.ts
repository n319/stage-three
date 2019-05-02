import {ListModel, IList} from '../models/list.model';
import {CardModel, ICard} from '../models/card.model';


describe('List Interface Test Cases' , () => {

  it('must create', () => {
    const list = new ListModel();
    expect(list).toBeTruthy();
  });
  it('must contain a list of cards', () => {

    const c = new CardModel('', '', '', '');
    const c1 = new CardModel('', '', '', '');

    const cards: ICard[] = [];
    cards.push(c);
    cards.push(c1);
    const list: IList = new ListModel();
    list.cards = cards;
    expect(list).toBeTruthy();
    expect(list.cards).toBeTruthy();
    expect(list.cards).toBeTruthy();
    expect(list.cards.length).toEqual(2);
  });
  it('must constain a unique id', () => {
    const list = new ListModel();
    list.id = '1';
    expect(list).toBeTruthy();
    expect(list.id).toBeTruthy();
  });


  it('must allow addition of card', () => {
    const list = new ListModel();
    expect(list).toBeTruthy();
    expect(list.cards).toBeFalsy();

    const card: ICard = new CardModel('1', 'header', '', '');
    list.addCard(card);
    expect(list.cards).toBeTruthy();
    expect(list.cards.length).toEqual(1);
    expect(list.cards[0]).toEqual(card);

    const card2: ICard = new CardModel('1', 'header', '', '');
    list.addCard(card2);

    expect(list.cards).toBeTruthy();
    expect(list.cards.length).toEqual(2);
    expect(list.cards[0]).toEqual(card);
    expect(list.cards[1]).toEqual(card2);

  });


  it('must allow removal of card by id', () => {

    const cards: ICard[] = [];
    cards.push(new CardModel('1', 'header', '', ''));
    cards.push(new CardModel('2', 'header', '', ''));
    cards.push(new CardModel('3', 'header', '', ''));
    cards.push(new CardModel('4', 'header', '', ''));

    const list = new ListModel();
    list.cards = cards;
    expect(list).toBeTruthy();
    expect(list.cards).toBeTruthy();
    expect(list.cards.length).toEqual(4);

    const removedCard = list.removeCard('2');
    expect(removedCard).toBeTruthy();
    expect(removedCard.id).toBeTruthy();
    expect(removedCard.id).toEqual('2');

    expect(list.cards).toBeTruthy();
    expect(list.cards.length).toEqual(3);
    expect(list.cards[0].id).toEqual('1');
    expect(list.cards[1].id).toEqual('3');

  });

  it('must not give error when removing empty list', () => {

    const list = new ListModel();
    expect(list).toBeTruthy();
    expect(list.cards).toBeFalsy();

    const removedCard = list.removeCard('2');
    expect(removedCard).toBeFalsy();

  });

  it('must not give error when removing a card not existing', () => {

    const cards: ICard[] = [];
    cards.push(new CardModel('1', 'header', '', ''));
    cards.push(new CardModel('2', 'header', '', ''));
    cards.push(new CardModel('3', 'header', '', ''));
    cards.push(new CardModel('4', 'header', '', ''));

    const list = new ListModel();
    list.cards = cards;
    expect(list).toBeTruthy();
    expect(list.cards).toBeTruthy();
    expect(list.cards.length).toEqual(4);

    const removeNotExistentCard = list.removeCard('7');
    expect(removeNotExistentCard).toBeFalsy();


    const removeExistingCard = list.removeCard('3');

    expect(list.cards).toBeTruthy();
    expect(list.cards.length).toEqual(3);
    expect(removeExistingCard).toBeTruthy();
    expect(removeExistingCard.id).toBeTruthy();
    expect(removeExistingCard.id).toEqual('3');

  });



});


