export interface AIStoryGeneratorState {
    prompt: string;
    isGenerating: boolean;
    epic: Epic | null;
    isSubmitting: boolean;
    isSuccess: boolean;
  }

  export interface Story {
    title: string;
    description: string;
    acceptanceCriteria: string[];
    testCases: string[];
  }
  
  export interface Epic {
    title: string;
    description: string;
    stories: Story[];
  }