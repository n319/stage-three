import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-content-image',
  templateUrl: './content-image.component.html',
  styleUrls: ['./content-image.component.scss']
})
export class ContentImageComponent implements OnInit {

  @Output() imageAdded = new EventEmitter<string>();
  @Input() imageInput: string[];

  public label = "Upload Image";

  constructor() {
  }

  ngOnInit() {

    if (this.imageInput != null) {
      for (let i in this.imageInput) {
        this.imageInput[i] = this.createPath(this.imageInput[i]);
      }
    }
  }

  uploadFinished(event) {
    if (this.imageInput === null) {
      this.imageInput = [];
    }

    let imgPath = this.createPath(event.trustedFileNameForFileStorage);
    this.imageInput.push(imgPath);

    this.imageAdded.emit(imgPath);
    //this.imageAdded.emit(JSON.stringify(event.trustedFileNameForFileStorage));
  }

  private createPath(fileName: string): string {
    fileName = fileName.replace("\"", "");
    return `content/${fileName}`;
  }

}
