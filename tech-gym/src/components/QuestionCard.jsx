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
    <div className="flex flex-col h-screen gap-y-3 bg-gray-900 items-center">
      <h2 className='mt-[50px] text-white text-xl'>Question</h2>
      <div className='bg-amber-700 text-white px-12 py-6 rounded-2xl parent max-w-xl'>
        <p className='text-center mb-5 text-white' dangerouslySetInnerHTML={{ __html: question.question }} />
        {question.incorrect_answers.concat(question.correct_answer)
          .sort(() => Math.random() - 0.5)
          .map((ans, idx) => (
            <button key={idx} onClick={() => handleAnswer(ans)}
              dangerouslySetInnerHTML={{ __html: ans }}
              className='mt-[10px] bg-white/100 px-20 py-2 child w-full text-gray-900 font-semibold text-xl cursor-pointer hover:text-blue-900 hover:font-bold'
            />
        ))}
      </div>
    </div>
  )
}

export default QuestionCard