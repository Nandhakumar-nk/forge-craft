import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs-content',
  template: `
    <div *ngIf="isActive" class="p-4 bg-white rounded-lg border-2 border-blue-100">
      <ng-content></ng-content>
    </div>
  `,
})
export class TabsContentComponent {
  @Input() value: string = '';
  @Input() isActive: boolean = false;
}
