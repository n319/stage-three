import { Component, OnInit } from '@angular/core';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';

interface NestableListItem {
  content: string;
  disable?: boolean;
  handle?: boolean;
  customDragImage?: boolean;
  children?: NestableListItem[];
}

@Component({
  selector: 'app-nested-dnd',
  templateUrl: './nested-dnd.component.html',
  styleUrls: ['./nested-dnd.component.scss']
})
export class NestedDndComponent implements OnInit {
  public currentDraggableEvent: DragEvent;
  public currentDragEffectMsg: string;

  nestableList: NestableListItem[] = [
    {
      content: 'Got something nested',
      children: [
        {
          content: 'Nested'
        }
      ]
    },
    {
      content: 'Got more than one',
      children: [
        {
          content: 'Nested 1'
        },
        {
          content: 'Nested 2'
        },
        {
          content: 'Nested 3'
        }
      ]
    },
    {
      content: 'Drop something, Ill catch!',
      children: []
    }
  ];

  constructor(private snackBarService: MatSnackBar) {}

  ngOnInit() {}

  onDragStart(event: DragEvent) {
    this.currentDragEffectMsg = '';
    this.currentDraggableEvent = event;

    this.snackBarService.dismiss();
    this.snackBarService.open('Drag started!', undefined, { duration: 2000 });
  }

  onDragged(item: any, list: any[], effect: DropEffect) {
    this.currentDragEffectMsg = `Drag ended with effect "${effect}"!`;

    if (effect === 'move') {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  onDragEnd(event: DragEvent) {
    this.currentDraggableEvent = event;
    this.snackBarService.dismiss();
    this.snackBarService.open(this.currentDragEffectMsg || `Drag ended!`, undefined, { duration: 2000 });
  }

  onDrop(event: DndDropEvent, list?: any[]) {
    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = list.length;
      }

      list.splice(index, 0, event.data);
    }
  }
}
