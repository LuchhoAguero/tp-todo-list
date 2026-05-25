import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  todoCreated = output<string>();
  title = '';

  submitTodo(): void {
    const trimmedTitle = this.title.trim();

    if (!trimmedTitle) {
      return;
    }

    this.todoCreated.emit(trimmedTitle);
    this.title = '';
  }
}
