import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-image',
  templateUrl: './content-image.component.html',
  styleUrls: ['./content-image.component.scss']
})
export class ContentImageComponent implements OnInit {

  @Output() imageAdded = new EventEmitter<string>();
  public images: string[];

  constructor() {
    this.images = [];
  }

  ngOnInit() {
  }

  uploadFinished(event) {
    this.images.push(this.createPath(event.trustedFileNameForFileStorage));
    this.imageAdded.emit(event.trustedFileNameForFileStorage);
  }

  private createPath(fileName):string {
    return `content/${fileName}`;
  }

}
