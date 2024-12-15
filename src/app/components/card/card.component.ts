import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-4">
        <h3 class="text-blue-700">{{ title }}</h3>
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class CardComponent {
  @Input() title: string = '';
}
