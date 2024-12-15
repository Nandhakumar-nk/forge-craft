import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as StoryActions from './story.actions';
import { of } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';

@Injectable()
export class StoryEffects {
  generateStory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoryActions.generateStory),
      switchMap(({ prompt }) =>
        of({
          title: 'User Authentication and Login Enhancement',
          description: 'Implement a new user authentication system with a modern login screen to improve security, usability, and user experience across all platforms.',
          stories: [
            {
              title: 'Add New Login Screen',
              description: ' As a user, I want a new login screen so that I can securely access the application using my credentials (username and password). The login screen should have a clean and modern UI, be responsive, and support error handling for incorrect login attempts.',
              acceptanceCriteria: ['The login screen must have fields for the username and password', 'There should be a "Login" button below the fields.',
                'There should be a "Forgot Password?" link below the login button.',
                'The screen should have a "Sign Up" link that directs users to the registration page (if applicable).'
              ],
              testCases: ['Test Case 1', 'Test Case 2'],
            },
          ],
        }).pipe(
          delay(1500),
          map((epic) => StoryActions.storyGenerated({ epic }))
        )
      )
    )
  );

  constructor(private actions$: Actions) {}
}
