
import { createAction, props } from '@ngrx/store';
import { Epic } from './story.model';

export const generateStory = createAction('[Story] Generate Story', props<{ prompt: string }>());
export const storyGenerated = createAction('[Story] Story Generated', props<{ epic: Epic }>());
export const generateStoryFailure = createAction('[Story] generateStoryFailure');
export const submitToJira = createAction('[Story] Submit to Jira', props<{ epic: Epic }>());
export const submitToJiraSuccess = createAction('[Story] Submit to Jira Success');
export const submitToJiraFailure = createAction('[Story] Submit to Jira Failure');