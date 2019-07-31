import { Component, OnInit } from '@angular/core';
import { PanelViewComponent } from '@app/base-view/panel-view.component';

@Component({
  selector: 'app-archive-board',
  templateUrl: './archive-board.component.html',
  styleUrls: ['./archive-board.component.scss']
})
export class ArchiveBoardComponent extends PanelViewComponent implements OnInit {
  ngOnInit() {}
}
