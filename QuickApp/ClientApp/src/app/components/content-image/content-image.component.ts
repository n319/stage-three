import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-image',
  templateUrl: './content-image.component.html',
  styleUrls: ['./content-image.component.scss']
})
export class ContentImageComponent implements OnInit {

  public images: string[];

  constructor() {
    this.images = [];
  }

  ngOnInit() {
  }


  uploadFinished(event) {
    this.images.push(this.createPath(event.trustedFileNameForFileStorage));
    //create IMG display component
    //insert new image into div.imageContent
  }

  private createPath(fileName):string {
    return `content/${fileName}`;
  }

}
