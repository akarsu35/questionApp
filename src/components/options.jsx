export default function Options({
  question,
  selectedOption,
  setSelectedOption,
  questionIndex,
  setQuestionIndex,
  setIsOptionsOpen,
  questions,
  setIsFinishScreenOpen,
  correctQuestions,
  setCorrectQuestions,
  wrongQuestions,
  setWrongQuestions,
}) {
  const handleNextQuestion = (option) => {
    setSelectedOption(option)

    if (option === question.answer) {
      console.log('DOĞRU')
      setCorrectQuestions((prevCorrectQuestions) => [
        ...prevCorrectQuestions,
        option,
      ])
    } else {
      console.log('YANLIŞ')
      setWrongQuestions((prevWrongQuestions) => [...prevWrongQuestions, option])
    }

    setQuestionIndex((oldIndex) => {
      let index = oldIndex + 1
      if (index > questions.length - 1) {
        index = 0
        setIsFinishScreenOpen(true)
      }

      return index
    })

    setSelectedOption(null)
    setIsOptionsOpen(false)
  }

  return (
    <div className="flex flex-col gap-2 max-w-[500px] w-full">
      {question.options.map((option, idx) => {
        return (
          <button
            key={option}
            className="border border-gray-200 rounded-full px-4 py-1 hover:ml-4 transition-all text-white bg-orange-500 hover:shadow-[0_0_8px_5px_rgba(255,255,255,0.6)]"
            onClick={() => handleNextQuestion(option)}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}
