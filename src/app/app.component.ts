import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  providers: [TodoDataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private todoDataService: TodoDataService) {}

  newTodo: string;

  get todos(): Todo[] {
    return this.todoDataService.getTodos();
  }

  addTodo() {
    this.todoDataService.addTodo(new Todo({ title: this.newTodo }));
    this.newTodo = '';
  }

  deleteTodo(index: number) {
    this.todoDataService.deleteTodoByIndex(index);
  }
}
