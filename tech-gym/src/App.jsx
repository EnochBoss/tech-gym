import { useState } from 'react'
import './App.css'
import QuizStart from './components/QuizStart'
import QuestionCard from './components/QuestionCard'
import ScoreSummary from './components/ScoreSummary'
// import questions from './data/questions'

function App() {
  const [showQuizStart, setShowQuizStart] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScoreSummary, setShowScoreSummary] = useState(false);

  return (
    <>
      <div>
        {showQuizStart && <QuizStart />}
        {!showQuizStart && !showScoreSummary && <QuestionCard />}
        {!showQuizStart && showScoreSummary && <ScoreSummary />}

      </div>
    </>
  )
}

export default App
