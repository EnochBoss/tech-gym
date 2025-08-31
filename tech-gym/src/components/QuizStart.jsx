import React from 'react'

const QuizStart = ({onStart, categories, quizCategory, setQuizCategory}) => {

  function handleCategoryChange(e){
    setQuizCategory(e.target.value);
        console.log(e.target.value);
  }

  return (
    <div className="flex flex-col h-screen gap-y-6 bg-gray-900 items-center
    bg-[url('/your-image-path.jpg')]
    "
    >
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

      <div className="flex flex-col items-center mt-8 px-4">
        <p className="text-gray-300 max-w-md text-center text-sm mb-6">
          Check your understanding of your tech field or subject that you are developing
          competency in, and see the progress you’ve made.
        </p>

        <h2 className="text-gray-300 text-sm mb-2">Select Category</h2>

        <select
          className="w-64 bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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


      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-2 rounded-2xl transition-all duration-200"
        onClick={onStart}
      >
        Start Quick
      </button>

            <p className="text-gray-500 text-sm pt-[70px]">Powered By: EBiNK Creatives</p>
          </div>
        )
      }

export default QuizStart