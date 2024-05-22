import { useEffect, useState } from "react";

import StartScreen from "./components/start-screen";
import Question from "./components/question";
import FinishScreen from "./components/finish-screen";
import { questions } from "./data/questions";

export default function App() {
  const [questionsData, setQuestionsData] = useState()
  const [isActive, setIsActive] = useState(false) // Question componentini açmak için
  const [questionIndex, setQuestionIndex] = useState(0) //Question ekranında question indexi ayarlar
  const [selectedOption, setSelectedOption] = useState(null) // question seçenekleri seçim state
  const [isFinishScreenOpen, setIsFinishScreenOpen] = useState(false) //FinishScreen state
  const [isOptionsOpen, setIsOptionsOpen] = useState(false) //question ların seçenklerinin açılması için state
  const [correctQuestions, setCorrectQuestions] = useState([]) //question lara verilen doğru cevaplar için state
  const [wrongQuestions, setWrongQuestions] = useState([]) //question lara verilen yanlış cevaplar için state

  const handleStart = () => {
    //başlangıç ekranında Let's Start butonu
    setIsActive(true)
  }

  useEffect(() => {
    setQuestionsData(questions)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center relative w-4/5 mx-auto">
      <main className="flex items-center justify-center">
        {isFinishScreenOpen && (
          <FinishScreen
            correctQuestions={correctQuestions}
            wrongQuestions={wrongQuestions}
          />
        )}

        {isActive ? (
          <>
            <Question
              question={questionsData[questionIndex]}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              isOptionsOpen={isOptionsOpen}
              setIsOptionsOpen={setIsOptionsOpen}
              questionIndex={questionIndex}
              setQuestionIndex={setQuestionIndex}
              questions={questions}
              setIsFinishScreenOpen={setIsFinishScreenOpen}
              correctQuestions={correctQuestions}
              setCorrectQuestions={setCorrectQuestions}
              wrongQuestions={wrongQuestions}
              setWrongQuestions={setWrongQuestions}
            />
          </>
        ) : (
          <StartScreen onStart={handleStart} />
        )}
      </main>
    </div>
  )
}
