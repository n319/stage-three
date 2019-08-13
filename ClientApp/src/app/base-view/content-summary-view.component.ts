import { Component, OnInit, Input } from '@angular/core';
import { CardModel } from '@app/ah-application/models/card.model';
import { ContentViewService } from '@app/ah-application/content-view.service';

@Component({
  template: ''
})
export class ContentSummaryViewComponent {
  @Input() card: CardModel;
  @Input() listIndex: number;
  @Input() cardIndex: number;

  constructor(public data: ContentViewService) {}

  identifyCardBeingDragged(dragEvent: DragEvent) {
    dragEvent.dataTransfer.effectAllowed = 'move';
    dragEvent.dataTransfer.dropEffect = 'move';
    const transferObject = {
      listIndex: this.listIndex,
      cardIndex: this.cardIndex
    };
    dragEvent.dataTransfer.setData('text', JSON.stringify(transferObject));
  }

  allowCardDragToBeDropped(dragEvent: DragEvent) {
    dragEvent.dataTransfer.dropEffect = 'move';
    dragEvent.preventDefault();
  }
}
