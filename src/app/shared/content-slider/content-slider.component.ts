import { Component, OnInit } from '@angular/core';
import { ProjectService } from '@app/api/project.service';

@Component({
  selector: 'app-content-slider',
  templateUrl: './content-slider.component.html',
  styleUrls: ['./content-slider.component.scss']
})
export class ContentSliderComponent implements OnInit {

  constructor(private projectSvc: ProjectService) { }

  ngOnInit() {
  }

}
