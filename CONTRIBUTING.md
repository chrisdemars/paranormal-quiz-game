# Contributing to the Birds of a Feather Quiz CLI

Thank you for your interest in contributing to the Paranormal Quiz CLI! This document provides guidelines and steps for contributing to this open source project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Adding Questions](#adding-questions)
- [Styling Guidelines](#styling-guidelines)
- [Testing](#testing)
- [Documentation](#documentation)
- [Community](#community)

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct. Please report unacceptable behavior to the project maintainers.

## Getting Started

### Prerequisites

- Node.js (v20.11.0 or higher)
- npm (v10 or higher)
- git

### Setting Up Local Development

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```
   git clone https://github.com/YOUR-USERNAME/paranormal-quiz.git
   cd bird-nerd-quiz-game
   ```
3. Add the original repository as an upstream remote:
   ```
   git remote add upstream https://github.com/ORIGINAL-OWNER/paranormal-quiz.git
   ```
4. Install dependencies:
   ```
   npm install
   ```
5. Create a new branch for your feature or bugfix:
   ```
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

1. Make sure your branch is up to date with the main repository:
   ```
   git fetch upstream
   git merge upstream/main
   ```
2. Make your changes
3. Run the application locally to test your changes:
   ```
   npm start
   ```
4. Commit your changes with a descriptive commit message:
   ```
   git commit -m "Add feature: description of your changes"
   ```

## Pull Request Process

1. Push your changes to your fork:
   ```
   git push origin feature/your-feature-name
   ```
2. Go to the GitHub page of your fork and create a Pull Request against the main repository's `main` branch
3. Fill in the PR template with all relevant information
4. Wait for project maintainer(s) to review your PR
5. Address any requested changes
6. Once approved, your PR will be merged

## Adding Questions

One of the easiest ways to contribute is by adding new questions to the game:

1. Open the `questions.js` file
2. Add new question objects following the existing format:
   ```javascript
   {
     question: "Your paranoraml question here?",
     choices: ["Option 1", "Option 2", "Option 3", "Option 4"],
     correctAnswer: "Option 2",
     explanation: "A brief explanation of why this answer is correct."
   }
   ```
3. Make sure each question:
   - Is related to the paranormal field
   - Has 4 answer choices
   - Has only one correct answer
   - Includes a brief explanation

## Styling Guidelines

We use ESLint and Prettier to maintain code quality:

1. Install the recommended extensions for your editor
2. Run linting before committing:
   ```
   npm run lint
   ```
3. Follow these general guidelines:
   - Use ES6+ features when appropriate
   - Use meaningful variable and function names
   - Add comments for complex logic
   - Keep functions focused on a single responsibility

## Documentation

If you add new features, please update the documentation:

1. Update the README.md with any new features or changes
2. Add JSDoc comments to any new functions or methods
3. Update the help text within the application if necessary

## Community

- Join our discussions in the GitHub Issues section
- Ask questions in the Discussions tab
- Help answer questions from other contributors
- Share the project with others who might be interested

---

Thank you for contributing to Paranormal Quiz CLI! Your efforts help make this project better for everyone.
