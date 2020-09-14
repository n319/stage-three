import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpEventType, HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();
  public showProgress: boolean;

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
  }

  uploadFile(files){
    if (files.length === 0) {
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.authService.accessToken
    });

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.http.post('https://localhost:44350/api/imagerecords/upload', formData, { headers: headers, reportProgress: true, observe: 'events' })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.showProgress = true;
          this.progress = Math.round(100 * event.loaded / event.total);
          if (this.progress == 100) {
            this.showProgress = false;
          }
        }
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      });
  }
}
