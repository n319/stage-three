import {Component, ElementRef, Input, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import { IList } from '@app/api/models/list.model';
import { ICardMovement, CardMovementModel } from '@app/api/models/card-movement.model';
import { ICard, CardModel, CardDataModel } from '@app/api/models/card.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})




export class ListComponent implements OnInit {

  @Input() list: IList;
  @Input() listIndex: number;
  @Output() moveCardAcrossList: EventEmitter<ICardMovement> = new EventEmitter<ICardMovement>();
  @Output() newCardAdded: EventEmitter<CardModel> = new EventEmitter<ICard>();
  @Output() deleteList: EventEmitter<number> = new EventEmitter<number>();

  private cardCount = 0;

  constructor(private elementRef: ElementRef , @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {

  }

  addNewCard() {
    const card = new CardModel(this.cardCount++ + '', 'header' + this.cardCount, "test stuff", new CardDataModel());
    this.list.cards.push(card);
    this.newCardAdded.emit(card);
  }


  allowCardReplacement(dragEvent: DragEvent) {
    dragEvent.dataTransfer.dropEffect = 'move';
    dragEvent.preventDefault();
  }

  delete(){
    this.deleteList.emit(this.listIndex);
  
  }


  dropCard(dragEvent: DragEvent) {
    const data = JSON.parse(dragEvent.dataTransfer.getData('text'));
    const elements: Element[] = this.document.elementsFromPoint(dragEvent.x, dragEvent.y);
    const cardElementBeingDroppedOn = elements.find( x => x.tagName.toLowerCase() === 'app-card-summary');
    const listElementBeingDroppedOn = elements.find( x => x.tagName.toLowerCase() === 'app-list');
    const listIndexDroppedOn = parseInt(listElementBeingDroppedOn.getAttribute('listIndex'), 10);
    const cardIndexDroppedOn  = cardElementBeingDroppedOn === undefined ? undefined :
          parseInt(cardElementBeingDroppedOn.getAttribute('cardIndex'), 10);
    const listIndexDragged = parseInt(data.listIndex, 10);
    const cardIndexDragged = parseInt(data.cardIndex, 10);

    if (listIndexDragged === listIndexDroppedOn) {
        // same list just re-organize the cards
        const cardDragged = this.list.cards.splice(cardIndexDragged,1);
        this.list.cards.splice(cardIndexDroppedOn , 0 , ...cardDragged);
    } else {
      this.moveCardAcrossList.emit(new CardMovementModel(listIndexDragged, listIndexDroppedOn , cardIndexDragged , cardIndexDroppedOn));
    }

  }


  
}
