import { Component, OnInit, Input } from './node_modules/@app/base/shared/loader/node_modules/@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() isLoading = false;
  @Input() message: string;

  constructor() {}

  ngOnInit() {}
}
