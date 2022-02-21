import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PhotosComponent } from './photos/photos.component';
import { AlbumsComponent } from './albums/albums.component';
import { CommentsComponent } from './comments/comments.component';
import { TodosComponent } from './todos/todos.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {
  path: `home`,
  component: HomeComponent,
  },
  {
    path: `posts`,
    component: PostsComponent,
  },
  {
    path: `albums`,
    component: AlbumsComponent,
  },
  {
    path: `albums/:id`,
    component: PhotosComponent
  },
  {
    path: `posts/:id`,
    component: CommentsComponent,
  },
  {
    path: `todos`,
    component: TodosComponent
  },
  {
    path: ``,
    redirectTo: `home`,
    pathMatch: `full`
  },
  {
    path: `**`,
    component: PagenotfoundComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
