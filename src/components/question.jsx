import { useEffect } from 'react'
import Options from './options'
import TimeCount from './TimeCount'

//soruların alındığı component
export default function Question({
  question,
  selectedOption,
  setSelectedOption,
  isOptionsOpen,
  setIsOptionsOpen,
  questionIndex,
  setQuestionIndex,
  questions,
  setIsFinishScreenOpen,
  correctQuestions,
  setCorrectQuestions,
  wrongQuestions,
  setWrongQuestions,
}) {
  // soruların seçenekleri 10 sn sonra açılacak
  useEffect(() => {
    const timer = setInterval(() => {
      setIsOptionsOpen(true)
    }, 10000)

    return () => {
      clearInterval(timer)
    }
  }, [questionIndex])

  // sonraki soruya geçiş için soru indeksini 1 arttır
  useEffect(() => {
    const timer = setInterval(() => {
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
    }, 30000)

    return () => {
      clearInterval(timer)
    }
  }, [questionIndex])

  return (
    <div className="flex flex-col justify-center items-center w-4/5">
      <div className="flex flex-col items-center justify-center gap-4 px-4">
        <img
          src={`/images/${question.media}`}
          alt=""
          className="sm:h-[18rem]  w-[20rem] rounded-xl shadow-[0_0_8px_5px_rgba(255,255,255,0.6)] "
        />
        <h2 className="m-4 sm:text-xl text-white max-w-[40rem] text-center">
          <span className='text-red-500 font-semibold'>{`Soru ${questionIndex + 1}`}</span><br />{`${question.question}`}
          {/* {question.question} */}
        </h2>
      </div>

      {isOptionsOpen && ( //soruların altında seneçekler açılır
        <Options
          question={question}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          questionIndex={questionIndex}
          setQuestionIndex={setQuestionIndex}
          setIsOptionsOpen={setIsOptionsOpen}
          questions={questions}
          setIsFinishScreenOpen={setIsFinishScreenOpen}
          correctQuestions={correctQuestions}
          setCorrectQuestions={setCorrectQuestions}
          wrongQuestions={wrongQuestions}
          setWrongQuestions={setWrongQuestions}
        />
      )}

      {/* her sorunun kalan süresini belirten component */}
      <TimeCount questionIndex={questionIndex} />
    </div>
  )
}
