import { Component, inject } from '@angular/core';

import { TodoService } from '../../../../core/services/todo.service';
import { TodoFormComponent } from '../../components/todo-form/todo-form.component';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import { TodoStatsComponent } from '../../components/todo-stats/todo-stats.component';

@Component({
  selector: 'app-todo-page',
  imports: [TodoFormComponent, TodoListComponent, TodoStatsComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css',
})
export class TodoPageComponent {
  private readonly todoService = inject(TodoService);
  readonly todos = this.todoService.todos;
  readonly totalTodos = this.todoService.totalTodos;
  readonly pendingTodos = this.todoService.pendingTodos;
  readonly completedTodos = this.todoService.completedTodos;

  addTodo(title: string): void {
    this.todoService.addTodo(title);
  }

  toggleTodo(id: number): void {
    this.todoService.toggleTodo(id);
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }

  clearCompleted(): void {
    this.todoService.clearCompleted();
  }

  clearAll(): void {
    this.todoService.clearAll();
  }
}
