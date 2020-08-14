import { Component, OnInit } from '@angular/core';
import {BlogPost} from '../BlogPost';
import { PostService } from '../post.service'

@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.css']
})
export class FooterPostsComponent implements OnInit {posts: Array<BlogPost>;

  private latestPost;
  
  constructor(private data:PostService) { }

  ngOnInit(): void {
	  this.latestPost = this.data.getPosts(1, null, null).subscribe(data => {
      if(data.length>3){
          this.posts=data.slice(0,3);
          } else{
            this.posts=data;
          }
    });
  }

}
