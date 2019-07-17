import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectModel } from '@app/api/models/project.model';

@Component({
  selector: 'app-backlog-home',
  templateUrl: './backlog-home.component.html',
  styleUrls: ['./backlog-home.component.scss']
})
export class BacklogHomeComponent implements OnInit {

  currentProject: ProjectModel[];

  constructor(private route: ActivatedRoute) { }
  

  ngOnInit() {
    
  }

}
