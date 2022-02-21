import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService, postType } from 'src/Services/posts.service'
import { UsersService, userType } from 'src/Services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  // 
  postform!: FormGroup;

  nameValue!: any;
  titleValue!: any; 
  bodyValue!: any;
  
  Author!: any;
  Title!: any;
  Body!: any;

  newUserName!: object;
  userName!: any;
  newPost!: object;
  userPost!: any;
  
  // 
  posts!: postType[];
  users!: userType[];

  showMode: boolean = false;

  constructor(
    private postservice: PostsService,
    private userservice: UsersService,
    private fb: FormBuilder, 
    ) {

      //
      this.postform = this.fb.group({
        author: ['', Validators.required],
        title: ['', Validators.required],
        body: ['', Validators.required]
      });

      // 
      this.Author = this.postform.get('author')
      this.Title = this.postform.get('title');
      this.Body = this.postform.get('body');

      // 
      this.newPost = {
        title: this.titleValue,
        body: this.bodyValue
      }

    }

    //  
    editShow() {
      this.showMode = !this.showMode
    }

  ngOnInit(): void {

    this.postservice.getPost().subscribe((value: postType[]) => {
      this.posts = value;
    });

    this.userservice.getUsers().subscribe((value: userType[]) => {
      this.users = value
    });

  }

  sendUserPost() {
    this.userservice.sendUser(this.newUserName).subscribe((data: any) => {
      this.userName = data
    })
  }  

  sendPost() {
    this.postservice.writepost(this.newPost).subscribe((data: any) => {
      this.userPost = data;
    })
  } 
  
  onAdd() {
    this.nameValue = this.postform.get('author')?.value;

    this.titleValue = this.postform.get('title')?.value;
    this.bodyValue = this.postform.get('body')?.value;

    this.userName = {name: this.nameValue}
    this.userPost = {title: this.titleValue, body: this.bodyValue};

    this.users.push(this.userName)
    this.posts.push(this.userPost);
  }

  getName(userId: number) {
    const user = this.users?.find((user) => user.id === userId)
    return user?.name
  }

}