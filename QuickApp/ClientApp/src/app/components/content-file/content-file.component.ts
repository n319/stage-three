import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-content-file',
  templateUrl: './content-file.component.html',
  styleUrls: ['./content-file.component.scss']
})
export class ContentFileComponent implements OnInit {


  @Output() fileAdded = new EventEmitter<string>();
  @Input() fileInput: string[];

  public label = "Upload File";

  constructor() { }

  ngOnInit() {

    if (this.fileInput != null) {
      for (let i in this.fileInput) {
        this.fileInput[i] = this.createPath(this.fileInput[i]);
      }
    }
  }

  uploadFinished(event) {
    if (this.fileInput === null) {
      this.fileInput = [];
    }

    let imgPath = this.createPath(event.trustedFileNameForFileStorage);
    //this.fileInput.push(imgPath);

    this.fileAdded.emit(imgPath);
    //this.imageAdded.emit(JSON.stringify(event.trustedFileNameForFileStorage));
  }

  private createPath(fileName: string): string {
    fileName = fileName.replace("\"", "");
    return `content/selif/${fileName}`;
  }

}
