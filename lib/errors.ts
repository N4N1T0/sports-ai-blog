// when the ID for the post is invalid
export class PostNotFoundError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'PostNotFoundError'
  }
}

// When an error ocurs in the subcriber API.
export class SubscriberError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'InvalidParameterError'
  }
}

// Handle errors related to interactions with the AI service or API you're using for content rewriting. This could include rate limits exceeded, API key authentication failures, or service outages.
export class AIApiError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'AIApiError'
  }
}

// Use this error class to handle errors that occur during the content rewriting process itself, such as when the AI service returns unexpected or invalid results.
export class AIProcessingError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'AIProcessingError'
  }
}
