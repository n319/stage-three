import { Component, OnInit, Input } from '@angular/core';
import { ISliderContentModel } from '@app/api/models/project.model';

@Component({
  selector: 'app-content-slider',
  templateUrl: './content-slider.component.html',
  styleUrls: ['./content-slider.component.scss']
})
export class ContentSliderComponent<T extends ISliderContentModel[]> {

  @Input() contentList: T;

  constructor() { }

}
