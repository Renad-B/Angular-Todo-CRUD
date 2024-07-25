import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css',
})
export class TodoDetailsComponent implements OnInit {
  todo: Todo | undefined;
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getToDo();
  }
  getToDo(){
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.todoService.getToDoById(id).subscribe(todo=>{
      this.todo = todo;
    });
  }
  updateTodo():void{
    if(this.todo){
      this.todoService.updateToDo(this.todo).subscribe(()=>{
        this.router.navigate(['/todos'])
      })
    }
  }
}
