import React from 'react'
import { FaTrophy } from 'react-icons/fa'


const ScoreSummary = ({questions, answers, totalScore, setTotalScore}) => {
  console.log(answers)
  const myScore = questions.filter((question, idx) => question.correct_answer === answers[idx]).length;
  setTotalScore(myScore);

  return (
    <div className="flex flex-col gap-y-12 bg-gray-900 items-center pt-[50px] pb-[50px] parent">
      <div>
        <FaTrophy size={72} color="gold" className='mt-6'/>
      </div>
      <h2 className='text-white text-3xl mt-[-24px] mb-2'>Score Summary</h2>
      <h2 className='text-white text-5xl mt-[-24px] mb-12'>{totalScore}/{questions.length}</h2>
     
      {questions.map((question, idx) => (
        <div className='text-white child w-[70%]'>
          {(question.correct_answer === answers[idx]) ?
            (<p key={idx} className='bg-green-700 border-amber-300 border-1 rounded-2xl text-center px-12 py-3 text-white font-bold'>{question.question}</p>)
              : <div className='border-1 rounded-2xl flex flex-col gap-1 items-center'>
                  <p key={idx} className='text-center px-12 py-3 bg-red-900 text-white font-semibold child w-full rounded-t-2xl
                  '>{question.question}</p>
                  {/* <span className='text-white/70 text-sm mt-[5px] mb-[-5px]'>Correct Answer:</span> */}
                  <h2 className='my-3 text-green-300 text-xl'>{answers[idx]}</h2>
                </div>
          }          
        </div>
      ))}

      <img
        className="h-auto w-40 mt-24 ml-0"
        src="../src/assets/tech-gym-logo-2-small.svg"
        alt="TechGym Logo"
      />
      <p className="text-gray-500 text-sm">Powered By: EBiNK Creatives</p>
    </div>
  )
}
    
export default ScoreSummary