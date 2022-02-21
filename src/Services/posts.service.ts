import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export interface postType {
  userId: number,
  id: number,
  title: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  writepost: any;
  writePost(newPost: object) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get<postType[]>('https://jsonplaceholder.typicode.com/posts')
    .pipe(catchError((error) => this.handleError(error)))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
    console.error('An Error Occurred:', error.error);
    } else {console.error(`Service Returned Code: ${error.status}, Body Was:`, error.error);}

    return throwError('Something happened; please Try Again Later.');
  }



}

function Returned(Service: any, Returned: any, Code: any, $: any, arg4: { error: HttpErrorResponse; "": any; }, Body: any, Was: any, error: any) {
  throw new Error('Function not implemented.');
}
