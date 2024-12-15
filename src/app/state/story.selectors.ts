
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AIStoryGeneratorState } from './story.model';

export const selectStoryState = createFeatureSelector<AIStoryGeneratorState>('story');
export const selectIsGenerating = createSelector(selectStoryState, (state) => state.isGenerating);
export const selectEpic = createSelector(selectStoryState, (state) => state.epic);
export const selectIsSubmitting= createSelector(selectStoryState, (state) => state.isSubmitting);
export const selectIsSuccess= createSelector(selectStoryState, (state) => state.isSuccess);

