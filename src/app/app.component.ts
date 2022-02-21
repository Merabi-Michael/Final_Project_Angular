import { Component, OnInit } from '@angular/core';
import { faImages, faClipboard, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { postType, PostsService } from '../Services/posts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Final_Project_Angular';
  faImages = faImages;
  faClipboard = faClipboard;
  faSquareCheck = faSquareCheck;
  
  //

  //
  posts!: postType[];

  constructor (private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPost().subscribe((data) => {
      this.posts = data;
    })
  }
}
