TechGym Quiz Application Documentation
Overview

The TechGym Quiz Application is an interactive web-based quiz platform designed to help users assess and enhance their knowledge in various technical fields. Users can select quiz categories, answer multiple-choice questions, view their scores, and review detailed summaries of their performance.

Features

Category selection from a dynamically fetched list

Multiple-choice quizzes with randomized answers

Immediate progress tracking and score summary

Clear, responsive design for desktop and mobile devices

Instruction modal to guide users

Technology Stack

React.js (with functional components and hooks)

Tailwind CSS for styling and responsive design

Fetch API to retrieve questions and categories from Open Trivia Database

JavaScript (ES6+)

Installation
Prerequisites

Node.js (v14 or newer)

npm or yarn package manager

Steps
git clone https://github.com/your-username/techgym-quiz-app.git
cd tech-gym
npm install
npm run dev


Open http://localhost:5173 in your browser to start using the application locally.

Usage

Select a quiz category from the dropdown menu on the start screen.

Click "Start Quiz" to begin.

Answer each question by selecting one of the provided options.

After completing all questions, view your score summary with details on each question’s correct and selected answers.

Optionally, retake the quiz in the same category or choose a different category to start a new quiz.

Use the "Instructions" button on the start screen to review how to use the application.

Folder Structure
/tech-gym
├── /src
│   ├── /assets         # Images and icons  
│   ├── /components     # React components (QuizStart, QuestionCard, ScoreSummary)  
│   ├── App.jsx         # Main app component  
│   └── index.jsx       # Entry point  
├── package.json  
└── tailwind.config.js  

Component Summary

QuizStart: Landing page with category selection and quiz instructions modal.

QuestionCard: Displays current quiz question and multiple-choice options.

ScoreSummary: Shows final quiz results with question-wise feedback.


Notes

The app fetches quiz questions and categories in real-time from the Open Trivia Database API.

Tailwind CSS ensures the interface is fully responsive across screen sizes.

User answers are safely rendered to avoid HTML encoding issues.