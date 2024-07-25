import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  newToDo: Todo = {} as Todo;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getToDos();
  }

  getToDos() {
    this.todoService.getTodos().subscribe((x) => {
      this.todos = x;
    });
  }

  createToDo(): void {
    const newTodo1 = {
      id: Date.now().toString(), // Assuming you generate IDs this way
      title: this.newToDo.title,
      completed: false,
    };
    this.todoService.createToDo(newTodo1).subscribe((todo) => {
      this.todos.push(todo);
      this.newToDo = {} as Todo; // Reset the form
    });
  }

  deleteToDo(todoId: string): void {
    this.todoService.deleteToDo(todoId).subscribe(() => {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    });
  }

  updateToDo(todo: Todo): void {
    this.todoService.updateToDo(todo).subscribe(() => {
      // Handle update response if necessary
    });
  }

  trackById(index: number, item: Todo) {
    return item.id;
  }
}
