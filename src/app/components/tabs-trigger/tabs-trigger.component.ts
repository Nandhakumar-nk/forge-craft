import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs-trigger',
  template: `
    <button 
      (click)="selectTab()"
      [class.selected]="isActive" 
      class="py-2 px-20 font-medium text-blue-700 hover:bg-blue-100 rounded-md">
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
    .selected {
      background-color: #dbeafe; /* Light blue */
    }
    `
  ]
})
export class TabsTriggerComponent {
  @Input() value: string = '';
  @Input() isActive: boolean = false;
  @Output() tabSelected = new EventEmitter<string>();

  selectTab() {
    // Emit the selected tab value to the parent component (TabsComponent)
    this.tabSelected.emit(this.value);
  }
}
