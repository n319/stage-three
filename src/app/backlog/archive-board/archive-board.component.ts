import { Component, NgModule, OnInit } from '@angular/core';
import { IList, ListModel } from '@app/api/models/list.model';
import { ICardMovement } from '@app/api/models/card-movement.model';

@Component({
  selector: 'app-archive-board',
  templateUrl: './archive-board.component.html',
  styleUrls: ['./archive-board.component.scss']
})
export class ArchiveBoardComponent implements OnInit {

  lists: IList[];

  constructor() {}

  ngOnInit() {
    // const board = this.kanbanSvc.getBoardModel();

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

