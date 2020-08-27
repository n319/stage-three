import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = false;

  slidesChangeMessage = '';

  slides = [
    { label: '01' },
    { label: '12' },
    { label: '23' },
    { label: '34' },
    { label: '45' },
    { label: '56' },
    { label: '67' },
    { label: '78' },
    { label: '89' },
    { label: '90' }
  ];

  onSlideRangeChange(indexes: number[]): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }

  constructor() { }

  ngOnInit() {
  }

}
