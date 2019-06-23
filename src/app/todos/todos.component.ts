import { Todo } from './todo.dto';
import { Component } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  constructor(private todoDataService: TodosService) {}

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
