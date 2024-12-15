
import { createReducer, on } from '@ngrx/store';
import * as StoryActions from './story.actions';
import { AIStoryGeneratorState } from './story.model';



const initialState: AIStoryGeneratorState = {
  prompt: '',
  isGenerating: false,
  epic: null,
  isSubmitting: false,
  isSuccess: false,
};

export const storyReducer = createReducer(
  initialState,
  on(StoryActions.generateStory, (state) => ({ ...state, isGenerating: true })),
  on(StoryActions.storyGenerated, (state, { epic }) => ({ ...state, epic, isGenerating: false })),
  on(StoryActions.generateStoryFailure, (state) => ({ ...state, isGenerating: false })),
  on(StoryActions.submitToJira, (state) => ({
    ...state,
    isSubmitting: true,
  })),
  on(StoryActions.submitToJiraSuccess, (state) => ({
    ...state,
    isSuccess: true,
    isSubmitting: false,
  })),
  on(StoryActions.submitToJiraFailure, (state) => ({
    ...state,
    isSubmitting: false,
  }))
);
