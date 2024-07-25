import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  //Here we start the crud operation + Backend actions
  private apiUrl = 'http://localhost:3000/todos';
  constructor(private httpClint: HttpClient) {}

  //Get all
  getTodos(): Observable<Todo[]> {
    return this.httpClint.get<Todo[]>(this.apiUrl);
  }

  //Create
  createToDo(todo: Todo): Observable<Todo> {
    return this.httpClint.post<Todo>(this.apiUrl, JSON.stringify(todo));
  }

  //Get id
  getToDoById(id: string): Observable<Todo> {
    return this.httpClint.get<Todo>(`${this.apiUrl}/${id}`);
  }

  //Update id
  updateToDo(todo: Todo): Observable<Todo> {
    return this.httpClint.put<Todo>(`${this.apiUrl}/${todo.id}`, todo)
  }

  //Delete id
   deleteToDo(todoId: string): Observable<void> {
    return this.httpClint.delete<void>(`${this.apiUrl}/${todoId}`)
  }
}
