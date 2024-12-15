import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <div class="bg-green-50 border-2 border-green-200 text-green-700 p-4 rounded-md">
      <ng-content></ng-content>
    </div>
  `,
})
export class AlertComponent {
  @Input() type: string = 'success';
}
