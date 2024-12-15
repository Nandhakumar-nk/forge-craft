
import { Component, Input, OnInit } from '@angular/core';
import { StoryFacade } from '../../services/story.facade';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Epic, Story } from 'src/app/state/story.model';

@Component({
  selector: 'app-generated-content',
  templateUrl: './generated-content.component.html',
})
export class GeneratedContentComponent implements OnInit {
  isSubmitting$ = this.storyFacade.isSubmitting$;
  isSuccess$ = this.storyFacade.isSuccess$;
  @Input() epic!: Epic | null;
  epicForm!: FormGroup;
  activeTab = "epic";

  constructor(private fb: FormBuilder,private storyFacade: StoryFacade) {
  }

  ngOnInit(): void {
    console.log("epic", this.epic)
    this.buildEpicForm({
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
    })

  }

  buildEpicForm(epic: Epic |null) {
    this.epicForm = this.fb.group({
      title: [epic?.title || ''],
      description: [epic?.description || ''],
      stories: this.buildStoriesFormArray(epic?.stories),
    });
  }

  buildStoriesFormArray(stories?: Story[]) {
    const storiesFormArray = this.fb.array([]) as FormArray;

    stories?.forEach((story: Story) => {
      storiesFormArray.push(this.buildStoryForm(story))
    }
    )

    return storiesFormArray;
  }

  buildStoryForm(story: Story) {
    return this.fb.group({
      title: [story.title || ''],
      description: [story.description || ''],
      acceptanceCriteria: this.buildAcceptanceCriteriaFormArray(story.acceptanceCriteria),
      testCases: this.buildTestCasesFormArray(story.testCases),
    })
  }

  buildAcceptanceCriteriaFormArray(acceptanceCriteria: string[]) {
    const acceptanceCriteriaFormArray = this.fb.array([]) as FormArray;

    acceptanceCriteria.forEach((criteria: string) => {
      acceptanceCriteriaFormArray.push(this.fb.control(criteria))
    }
    )
    return acceptanceCriteriaFormArray;
  }

  buildTestCasesFormArray(testCases: string[]) {
    const testCasesFormArray = this.fb.array([]) as FormArray;

    testCases.forEach((testCase: string) => {
      testCasesFormArray.push(this.fb.control(testCase))
    }
    )
    return testCasesFormArray;
  }

  addUserStory() {
    this.stories.push(
      this.buildStoryForm({
        title: '',
        description: '',
        acceptanceCriteria: [],
        testCases: []
      })
    );
  }

  get stories()
  {
    return this.epicForm.get('stories') as FormArray;
  }

  getAcceptanceCriteria(index:number)
  {
    return this.stories.at(index).get('acceptanceCriteria') as FormArray
  }

  getTestCases(index:number)
  {
    return this.stories.at(index).get('testCases') as FormArray
  }

  addAcceptanceCriteria(storyIndex: number) {
    const userStory = this.stories.at(storyIndex);
    (userStory.get('acceptanceCriteria') as FormArray).push(this.fb.control(''));
  }

  addTestCase(storyIndex: number) {
    const userStory = this.stories.at(storyIndex);
    (userStory.get('testCases') as FormArray).push(this.fb.control(''));
  }

  removeAcceptanceCriteria(storyIndex: number, acceptanceCriteriaIndex: number) {
    const userStory = this.stories.at(storyIndex);
    (userStory.get('acceptanceCriteria') as FormArray).removeAt(acceptanceCriteriaIndex);
  }

  removeTestCase(storyIndex: number, testCaseIndex: number) {
    const userStory = this.stories.at(storyIndex);
    (userStory.get('testCases') as FormArray).removeAt(testCaseIndex);
  }

  submitEpic() {
    this.storyFacade.submitToJira(this.epicForm.value)
  }

  onTabSelect(selectedTab: string) {
    this.activeTab = selectedTab;
  }

  getStoryTitleControl(index: number): FormControl {
    const storyGroup = this.stories.at(index) as FormGroup;
    return storyGroup.get('title') as FormControl;
  }
}
