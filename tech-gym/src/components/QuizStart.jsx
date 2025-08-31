import React from 'react'

const QuizStart = ({onStart, categories, quizCategory, setQuizCategory, showInstructions, setShowInstructions}) => {

  function handleCategoryChange(e){
    setQuizCategory(e.target.value);
        console.log(e.target.value);
  }

  return (
    <div className="flex flex-col min-h-screen gap-y-6 bg-gray-900 items-center px-4 sm:px-6 md:px-10 lg:px-16 py-6">

      <img
        className="h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 mt-12 mb-8"
        src="../src/assets/tech-gym-head-icon.svg"
        alt="TechGym Logo"
      />

      <img
        className="h-auto w-48 sm:w-56 md:w-64 mb-8"
        src="../src/assets/tech-gym-logo-1.svg"
        alt="TechGym Logo"
      />

      <div className="flex flex-col items-center mt-8 px-4 w-full max-w-md">
        <p className="text-gray-300 text-center text-sm sm:text-base mb-6 px-2">
          Check your understanding of your tech field or subject that you are developing
          competency in, and see the progress you’ve made.
        </p>

        <h2 className="text-gray-300 text-sm sm:text-base mb-2">Select Category</h2>

        <select
          className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          onChange={handleCategoryChange}
          value={quizCategory}
        >
          <option value="" disabled>Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center mt-2">
        <button
          className="w-48 bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-2 rounded-2xl transition-all duration-200"
          onClick={onStart}
        >
          Start Quiz
        </button>

        <button
          className="w-48 bg-gray-700 hover:bg-gray-600 text-white font-medium px-6 py-2 rounded-2xl transition-all duration-200"
          onClick={() => setShowInstructions(true)}
        >
          Instructions
        </button>
      </div>

      <p className="text-gray-500 text-sm pt-12 sm:pt-16 text-center">Powered By: EBiNK Creatives</p>

      {showInstructions && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md text-gray-800 relative">
            <h2 className="text-2xl font-bold mb-4">Quiz Instructions</h2>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
              <li>Select a category from the dropdown menu.</li>
              <li>Each quiz consists of 10 questions.</li>
              <li>Click the correct answer from the choices provided.</li>
              <li>Your score will be shown at the end of the quiz.</li>
              <li>You can retake the quiz or choose a new category after finishing.</li>
            </ul>
            <button
              onClick={() => setShowInstructions(false)}
              className="absolute top-2 right-3 text-gray-600 hover:text-red-600 text-lg font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default QuizStart