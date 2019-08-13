import { Component, OnInit } from '@angular/core';
import { ContentDetailViewComponent } from '@app/base-view/content-detail-view.component';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent extends ContentDetailViewComponent {}
