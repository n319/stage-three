import { Component, OnInit } from '@angular/core';
import { PanelViewComponent } from '@app/base-view/panel-view.component';

@Component({
  selector: 'app-pin-board',
  templateUrl: './pin-board.component.html',
  styleUrls: ['./pin-board.component.scss']
})
export class PinBoardComponent extends PanelViewComponent implements OnInit {

  ngOnInit() {
  }

}
