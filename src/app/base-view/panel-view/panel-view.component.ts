import { Component, OnInit } from '@angular/core';
import { IList, ListModel } from './node_modules/@app/api/models/list.modell
import { KanbanService } from './node_modules/@app/api/kanban.servicee
import { ICardMovement } from './node_modules/@app/api/models/card-movement.modell

@Component({
  selector: 'app-panel-view',
  template: '',
  styleUrls: ['./panel-view.component.scss']
})
export class PanelViewComponent implements OnInit {


  lists: IList[];

  constructor(public kanbanService: KanbanService) {}

  ngOnInit() {
    const board = this.kanbanService.getBoardModel();

    // ideally retrieve and initialize from some storage.
  }

  moveCardAcrossList(movementInformation: ICardMovement) {
    const cardMoved = this.lists[movementInformation.fromListIdx].cards.splice(movementInformation.fromCardIdx, 1);
    this.lists[movementInformation.toListIdx].cards.splice(movementInformation.toCardIdx, 0, ...cardMoved);
  }

  deleteList(listIndex: number) {
    this.lists.splice(listIndex, 1);
  }

  addList(): void {
    const newList: IList = new ListModel();
    newList.position = this.lists.length + 1;
    newList.name = `List #${newList.position}`;
    if (this.lists === undefined) {
      this.lists = [];
    }
    this.lists.push(newList);
  }
}
