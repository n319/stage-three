import { Component, OnInit, Input } from '@angular/core';
import { CardModel } from '@app/api/models/card.model';

@Component({
  selector: 'app-archive-card-summary',
  templateUrl: './archive-card-summary.component.html',
  styleUrls: ['./archive-card-summary.component.scss']
})
export class ArchiveCardSummaryComponent implements OnInit {

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
