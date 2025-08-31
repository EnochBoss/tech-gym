import { useEffect, useState } from 'react'
import './App.css'
import QuizStart from './components/QuizStart'
import QuestionCard from './components/QuestionCard'
import ScoreSummary from './components/ScoreSummary'

function App() {
  const [showQuizStart, setShowQuizStart] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScoreSummary, setShowScoreSummary] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [quizCategory, setQuizCategory] = useState('');
  const [categories, setCategories] = useState([])

  //States for fetching questions
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retakeQuiz = () => {
    setAnswers([]);
    setTotalScore(0);
    setCurrentQuestion(0);
    setShowScoreSummary(false);
    startQuiz();
  };

  const restartQuiz = () => {
    setAnswers([]);
    setTotalScore(0);
    setCurrentQuestion(0);
    setShowScoreSummary(false);
    setShowQuizStart(true);
  };

  const startQuiz = async () => {
    setIsLoading(true);
    try {
      const url = `https://opentdb.com/api.php?amount=10${quizCategory ? `&category=${quizCategory}` : ''}`
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Network error: ${response.status}`);
      }
      const data = await response.json();
      setQuestions(data.results);
      setShowQuizStart(false);
    } catch (err) {
      setError(err);
      console.error('Error fetching questions:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function loadCategories() {
      setIsLoading(true)
      try {
        const categoriesData = await fetch("https://opentdb.com/api_category.php")
        if (!categoriesData.ok) {
          throw new Error(`Network error: ${categoriesData.status}`)
        }
        const catData = await categoriesData.json()
        setCategories(catData.trivia_categories)
      } catch (err) {
        setError(err)
        console.error('Error fetching categories:', err)
      } finally {
        setIsLoading(false)
      }
    }
    loadCategories()
  }, [])

  console.log(quizCategory)

  if (isLoading) return <p className="text-center text-white p-4">Loading questions...</p>
  if (error && !questions) return <p className="text-center text-red-400 p-4">Error loading quiz: {error.message}</p>

  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 px-4 sm:px-6 md:px-10">
        {showQuizStart && (
          <QuizStart
            onStart={startQuiz}
            answers={answers}
            categories={categories}
            quizCategory={quizCategory}
            setQuizCategory={setQuizCategory}
            showInstructions={showInstructions}
            setShowInstructions={setShowInstructions}
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
            retakeQuiz={retakeQuiz}
            restartQuiz={restartQuiz}
          />
        )}
      </div>
    </>
  )
}

export default App
