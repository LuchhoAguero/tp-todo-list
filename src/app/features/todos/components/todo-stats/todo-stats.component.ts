import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-todo-stats',
  imports: [],
  templateUrl: './todo-stats.component.html',
  styleUrl: './todo-stats.component.css',
})
export class TodoStatsComponent {
  total = input.required<number>();
  pending = input.required<number>();
  completed = input.required<number>();
  progressPercentage = computed(() => {
    const total = this.total();

    if (total === 0) {
      return 0;
    }

    return Math.round((this.completed() / total) * 100);
  });
}
