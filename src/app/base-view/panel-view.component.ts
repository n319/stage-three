import { Component, OnInit, Input, Output, EventEmitter, ElementRef, Inject } from '@angular/core';
import { PanelViewService } from '@app/ah-application/panel-view.service';
import { ViewType } from '@app/api/models/project.model';

@Component({
  template: ''
})
export class PanelViewComponent {

  projectContent: any;
  
  view: ViewType;

  constructor(public data: PanelViewService) { }
  
  ngOnInit() {
    
    this.projectContent = this.data.getUserProjectsByViewType(this.view);

  }

  addList() {
    // const newList: ListInterface = new List();
    // newList.position = this.lists.length + 1;
    // newList.name = `List #${newList.position}`;
    // if (this.lists === undefined) {
    //   this.lists = [];
    // }
    // this.lists.push(newList);
  }

  moveCardAcrossList(movementInformation: any) {
    // const cardMoved = this.lists[movementInformation.fromListIdx].cards.splice(movementInformation.fromCardIdx, 1);
    // this.lists[movementInformation.toListIdx].cards.splice(movementInformation.toCardIdx , 0 , ...cardMoved);
  }

  saveBoard() {
    // const boardModel = new BoardModel();
    // boardModel.lists = this.lists;
    // this.localService.saveBoard(boardModel);
  }

  deleteList(listIndex: number){
      // this.lists.splice(listIndex,1);
  }
}
