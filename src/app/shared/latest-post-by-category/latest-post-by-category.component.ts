import { Component, OnInit } from '@angular/core';
import { PostService } from '@app/api/post.service';

@Component({
  selector: 'app-latest-post-by-category',
  templateUrl: './latest-post-by-category.component.html',
  styleUrls: ['./latest-post-by-category.component.scss']
})
export class LatestPostByCategoryComponent implements OnInit {
  
  constructor(private postSvc: PostService) { }

  ngOnInit() {
    //TODO grab initial categories from user.favoriteTags, also need user.FavoriteHosts
    
  }

}
