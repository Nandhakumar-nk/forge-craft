
import { Component } from '@angular/core';
import { StoryFacade } from '../../services/story.facade';

@Component({
  selector: 'app-input-section',
  templateUrl: './input-section.component.html',

})
export class InputSectionComponent {
  prompt: string = '';
  isGenerating$ = this.storyFacade.isGenerating$;

  constructor(private storyFacade: StoryFacade) {}

  generate() {
    this.storyFacade.generateStory(this.prompt);
  }
}
