import React from 'react'

const QuizStart = ({onStart, totalScore, answers}) => {

  return (
    <div className="flex flex-col h-screen gap-y-6 bg-gray-900 items-center">
      <img
        className="h-40 w-40 mt-[100px] ml-[28px] mb-12"
        src="../src/assets/tech-gym-head-icon.svg"
        alt="TechGym Logo"
      />

      <img
        className="h-auto w-60 mt-0 ml-0"
        src="../src/assets/tech-gym-logo-1.svg"
        alt="TechGym Logo"
      />

      <p className="text-gray-300 max-w-[55%] text-center text-sm mt-0">
        Check your understanding of your tech field or subject that you are developing
        competency in and see the progress you’ve made
      </p>

      <button className="bg-white  px-8 py-1 rounded-2xl mt-12 mb-12"
      onClick={onStart}
      >
        Start
      </button>

      <h2 className="text-white font-medium text-center text-xl">
        Last Score
      </h2>

      <div>
        <h1 className="bg-gray-100/20 px-8 py-3 mt-[-15px] text-white text-5xl font-bold">{totalScore} <span>OUT OF</span> {answers.length}</h1>
      </div>

      <p className="text-gray-500 text-sm pt-[70px]">Powered By: EBiNK Creatives</p>
    </div>
  )
}

export default QuizStart