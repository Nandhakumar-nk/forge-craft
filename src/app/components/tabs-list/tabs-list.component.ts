import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-list',
  template: `
    <div class="flex space-x-20 m-2"  style="justify-content: space-between;">
      <ng-content></ng-content>
    </div>
  `,
})
export class TabsListComponent {}
