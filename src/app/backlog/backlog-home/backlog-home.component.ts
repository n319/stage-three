import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-backlog-home',
  templateUrl: './backlog-home.component.html',
  styleUrls: ['./backlog-home.component.scss']
})
export class BacklogHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  

  ngOnInit() {
    
  }

}
