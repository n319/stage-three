import { Component, OnInit } from '@angular/core';
import { getContext } from '@angular/core/src/render3/discovery_utils';

@Component({
  selector: 'app-pinboard',
  templateUrl: './pinboard.component.html',
  styleUrls: ['./pinboard.component.scss']
})
export class PinboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickTheWall(event: MouseEvent): void{
    this.showPinBoardCreateMenu(event);
  }

  private showPinBoardCreateMenu(event: MouseEvent):void{
    
    debugger;
    this.initPinboardCreateMenu(event.clientX, event.clientY);
    document.querySelector("#CreateMenuPanel").setAttribute("visbility", "show");
  }

  private initPinboardCreateMenu(x: number, y: number){

  }


}
