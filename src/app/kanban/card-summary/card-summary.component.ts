import {Component, Input, OnInit} from '@angular/core';
import { CardModel } from '@app/api/models/card.model';


@Component({
  selector: 'app-card-summary',
  templateUrl: './card-summary.component.html',
  styleUrls: ['./card-summary.component.scss']
})
export class CardSummaryComponent implements OnInit {

  @Input() card: CardModel;
  @Input() listIndex: number;
  @Input() cardIndex: number;


  constructor() { }

  ngOnInit() {
    
  }

  identifyCardBeingDragged(dragEvent: DragEvent) {
    dragEvent.dataTransfer.effectAllowed = 'move'
    dragEvent.dataTransfer.dropEffect= 'move'
    const transferObject = {
      'listIndex' : this.listIndex,
      'cardIndex' : this.cardIndex
    };
    dragEvent.dataTransfer.setData( 'text', JSON.stringify(transferObject));
  }

  allowCardDragToBeDropped(dragEvent: DragEvent) {
    dragEvent.dataTransfer.dropEffect= 'move'
    dragEvent.preventDefault();
  }
}
