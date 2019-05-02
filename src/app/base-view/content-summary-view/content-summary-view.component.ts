import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-summary-view',
  template: '',
  styleUrls: ['./content-summary-view.component.scss']
})
export class ContentSummaryViewComponent implements OnInit {

  @Input() card: CardSummaryModel;
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
