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
      <p className='text-white/50 mt-[50px]'>Question Category</p>
      <h2 className='text-2xl text-white font-medium'>{question.category}</h2>
      <hr className='w-96 h-[2px] bg-white opacity-50'/>
      <div className='flex w-125 justify-between'>
        <div className='bg-white/100 text-gray-900 font-bold px-12 py-0.5'>Easy</div>
        <div className='bg-white/100 text-gray-900 font-bold px-12 py-0.5'>#{currentQuestion + 1}</div>
      </div>
      <span className='text-white/65 ml-[390px] mt-[-8px]'>Question No.</span>

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

      <img
        className="h-auto w-40 mt-24 ml-0"
        src="../src/assets/tech-gym-logo-2-small.svg"
        alt="TechGym Logo"
      />
      <p className="text-gray-500 text-sm">Powered By: EBiNK Creatives</p>
    </div>
  )
}

export default QuestionCard