import { Component, OnInit } from './node_modules/@app/base/shared/latest-post-by-category/node_modules/@angular/core';
import { PostService } from './node_modules/@app/base/api/post.service';

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
