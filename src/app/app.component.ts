import { Component } from '@angular/core';
import { StoryFacade } from './services/story.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  epic$ = this.storyFacade.epic$;
  
  constructor(private storyFacade: StoryFacade) {
  }
}
