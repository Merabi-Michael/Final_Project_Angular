import { Component, OnInit } from '@angular/core';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import { TodosService, todosType } from 'src/Services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  faCheck = faCheck;
  faXmark = faXmark;
  
  // 
  todos!: todosType[];

  constructor(private todosservice: TodosService) { }

  ngOnInit(): void {
    this.todosservice.getTodos().subscribe((value: todosType[]) => {
      this.todos = value;
    });
}
}
