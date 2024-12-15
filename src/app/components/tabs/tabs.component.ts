import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  template: `
    <div class="space-y-4">
      <ng-content></ng-content>
    </div>
  `,
})
export class TabsComponent {}
