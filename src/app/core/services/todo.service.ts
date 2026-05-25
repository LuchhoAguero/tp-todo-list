import { computed, Injectable, signal } from '@angular/core';

import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly todosSignal = signal<Todo[]>([]);
  private nextId = 1;

  readonly todos = this.todosSignal.asReadonly();
  readonly totalTodos = computed(() => this.todos().length);
  readonly pendingTodos = computed(() => this.todos().filter((todo) => !todo.completed).length);
  readonly completedTodos = computed(() => this.todos().filter((todo) => todo.completed).length);

  addTodo(title: string): void {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    const newTodo: Todo = {
      id: this.nextId,
      title: trimmedTitle,
      completed: false,
      createdAt: new Date(),
    };

    this.nextId++;
    this.todosSignal.update((todos) => [...todos, newTodo]);
  }

  toggleTodo(id: number): void {
    this.todosSignal.update((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  }

  deleteTodo(id: number): void {
    this.todosSignal.update((todos) => todos.filter((todo) => todo.id !== id));
  }

  clearCompleted(): void {
    this.todosSignal.update((todos) => todos.filter((todo) => !todo.completed));
  }

  clearAll(): void {
    this.todosSignal.set([]);
  }
}
