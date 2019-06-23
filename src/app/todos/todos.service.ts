import { Injectable } from '@angular/core';
import { Todo } from './todo.dto';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos: Todo[] = [];

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  deleteTodoByIndex(index: number) {
    this.todos = [...this.todos.slice(0, index), ...this.todos.slice(++index)];
  }

  toggleDone(index: number) {
    const todo = this.todos[index];
    todo.isDone = !todo.isDone;
  }
}
