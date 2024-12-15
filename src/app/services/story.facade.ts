
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as StoryActions from '../state/story.actions';
import * as StorySelectors from '../state/story.selectors';
import { Epic } from '../state/story.model';

@Injectable({ providedIn: 'root' })
export class StoryFacade {
  isGenerating$ = this.store.select(StorySelectors.selectIsGenerating);
  epic$ = this.store.select(StorySelectors.selectEpic);
  isSubmitting$ = this.store.select(StorySelectors.selectIsSubmitting);
  isSuccess$ = this.store.select(StorySelectors.selectIsSuccess);


  constructor(private store: Store) {}

  generateStory(prompt: string) {
    this.store.dispatch(StoryActions.generateStory({ prompt }));
  }

  submitToJira(epic: Epic) {
    this.store.dispatch(StoryActions.submitToJira({epic}));
  }
}
