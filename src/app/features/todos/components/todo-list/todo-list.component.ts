import { Component, input, output } from '@angular/core';

import { Todo } from '../../../../core/models/todo.model';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todos = input.required<Todo[]>();
  todoToggled = output<number>();
  todoDeleted = output<number>();
}
