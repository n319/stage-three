import { Component, OnInit, Input } from '@angular/core';
import { PanelViewComponent } from '@app/base-view/panel-view.component';
import { ActivatedRoute } from '@angular/router';
import { PanelViewService } from '@app/ah-application/panel-view.service';
import { Observable } from 'rxjs';
import { ProjectModel } from '@app/api/models/project.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pin-board',
  templateUrl: './pin-board.component.html',
  styleUrls: ['./pin-board.component.scss']
})
export class PinBoardComponent extends PanelViewComponent implements OnInit {
  @Input() currentProjectId: string;
  currentProjectPieces: Observable<string[]>;

  constructor(private route: ActivatedRoute, public data: PanelViewService) {
    super(data);
  }

  ngOnInit() {
    this.currentProjectPieces = this.data.projectService
      .getProject(this.currentProjectId)
      .pipe(map(result => result.pieces));
  }
}
