import { Component, OnInit } from '@angular/core';
import { ContentSummaryViewComponent } from '@app/base-view/content-summary-view.component';

@Component({
  selector: 'app-card-summary',
  templateUrl: './card-summary.component.html',
  styleUrls: ['./card-summary.component.scss']
})
export class CardSummaryComponent extends ContentSummaryViewComponent {}
