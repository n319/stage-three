import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-slider',
  templateUrl: './content-slider.component.html',
  styleUrls: ['./content-slider.component.scss']
})
export class ContentSliderComponent<T> implements OnInit {
  @Input() contentList: T;

  constructor() {}

  ngOnInit(): void {}
}
