import React from 'react'

const QuestionCard = ({
  questions,
  currentQuestion,
  setCurrentQuestion,
  answers,
  setAnswers,
  setShowScoreSummary
}) => {
  const question = questions[currentQuestion]

  const handleAnswer = (option) => {
    setAnswers(prev => [...prev, option])
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(current => current + 1)
    } else {
      setShowScoreSummary(true)
    }
  }

  return (
    <div className="flex flex-col min-h-screen gap-y-3 bg-gray-900 items-center px-4 sm:px-6 md:px-10 py-6">
      <p className='text-white/50 mt-12 text-sm sm:text-base'>Question Category</p>
      <h2 className='text-xl sm:text-2xl text-white font-medium text-center'>{question.category}</h2>
      <hr className='w-full max-w-md h-[2px] bg-white opacity-50 my-2'/>
      <div className='flex justify-between w-full max-w-md gap-4'>
        <div className='flex-1 bg-white text-gray-900 font-bold px-6 py-1 text-center rounded'>
          {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1).toLowerCase()}
        </div>
        <div className='flex-1 bg-white text-gray-900 font-bold px-6 py-1 text-center rounded'>
          #{currentQuestion + 1}
        </div>
      </div>
      <span className='text-white/65 text-xs mt-[-8px]'>Question Number and Difficulty</span>

      <h2 className='mt-10 text-white text-lg sm:text-xl'>Question</h2>
      <div className='bg-amber-700 text-white px-6 sm:px-12 py-6 rounded-2xl w-full max-w-xl'>
        <p className='text-center mb-5 text-white text-sm sm:text-base' dangerouslySetInnerHTML={{ __html: question.question }} />
        {question.incorrect_answers.concat(question.correct_answer)
          .sort(() => Math.random() - 0.5)
          .map((ans, idx) => (
            <button key={idx} onClick={() => handleAnswer(ans)}
              dangerouslySetInnerHTML={{ __html: ans }}
              className='mt-2 bg-white px-6 py-2 w-full text-gray-900 font-semibold text-sm sm:text-lg rounded hover:text-blue-900 hover:font-bold transition'
            />
        ))}
      </div>

      <img
        className="h-auto w-32 sm:w-40 mt-16"
        src="../src/assets/tech-gym-logo-2-small.svg"
        alt="TechGym Logo"
      />
      <p className="text-gray-500 text-xs sm:text-sm text-center">Powered By: EBiNK Creatives</p>
    </div>
  )
}

export default QuestionCard