import { useEffect, useState } from 'react'
import './App.css'
import QuizStart from './components/QuizStart'
import QuestionCard from './components/QuestionCard'
import ScoreSummary from './components/ScoreSummary'
// import questions from './data/questions'

function App() {
  const [showQuizStart, setShowQuizStart] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScoreSummary, setShowScoreSummary] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [totalScore, setTotalScore] = useState(0);

  // States for questions fetching and use
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const startQuiz = () => {setShowQuizStart(false)};

  useEffect(() => {
    async function loadQuestions() {
      setIsLoading(true)
      try {
        const response = await fetch("https://opentdb.com/api.php?amount=10")
        if (!response.ok) {
          throw new Error(`Network error: ${response.status}`)
        }
        const data = await response.json()
        setQuestions(data.results)
      } catch (err) {
        setError(err)
        console.error('Error fetching questions:', err)
      } finally {
        setIsLoading(false)
      }
    }
    loadQuestions()
  }, [])

  if (isLoading) return <p>Loading questions...</p>
  if (error && !questions) return <p>Error loading quiz: {error.message}</p>

  return (
    <>
      <div>
        {showQuizStart && (
          <QuizStart
            onStart={startQuiz}
            totalScore={totalScore}
            answers={answers}
            />
          )}
        {!showQuizStart && !showScoreSummary && (
          <QuestionCard 
            questions={questions}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            answers={answers}
            setAnswers={setAnswers}
            setShowScoreSummary={setShowScoreSummary}
          />
        )}
        {!showQuizStart && showScoreSummary && (
          <ScoreSummary
            questions={questions}
            answers={answers}
            totalScore={totalScore}
            setTotalScore={setTotalScore}
            />
          )}

      </div>
    </>
  )
}

export default App
