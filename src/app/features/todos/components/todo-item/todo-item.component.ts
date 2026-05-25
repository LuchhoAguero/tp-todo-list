import { DatePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';

import { Todo } from '../../../../core/models/todo.model';

@Component({
  selector: 'app-todo-item',
  imports: [DatePipe],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  todo = input.required<Todo>();
  todoToggled = output<number>();
  todoDeleted = output<number>();

  toggleTodo(): void {
    this.todoToggled.emit(this.todo().id);
  }

  deleteTodo(): void {
    this.todoDeleted.emit(this.todo().id);
  }
}
