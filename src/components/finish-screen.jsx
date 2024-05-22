import { useState } from 'react'


//son ekran---> doğru cevaplar ve yanlış cevaplar görünüyor.
const FinishScreen = ({ correctQuestions, wrongQuestions }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-green-100 flex items-center justify-center z-50"
    >
      <div className="rounded-md shadow-lg max-w-5xl">
        <div className=" bg-white p-4 rounded-md  pt-12">
          

          <div className="flex flex-col justify-center items-center gap-6 md:flex-row md:w-[600px]">
            <div className="w-1/2">
              <h3 className="text-green-800 underline text-xl font-semibold">
                Doğru Cevaplar ({correctQuestions.length})
              </h3>
              {correctQuestions.map((answer) => { //doğru yanıtlar
                return (
                  <div className="text-green-800 font-semibold" key={answer}>
                    {answer}
                  </div>
                )
              })}
            </div>

            <div className="w-1/2">
              <h3 className="text-red-800 underline text-xl font-semibold">
                Yanlış Cevaplar ({wrongQuestions.length})
              </h3>
              {wrongQuestions.map((answer) => {//yanlış yanıtlar
                return (
                  <div key={answer} className="text-red-800 font-semibold">
                    {answer}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FinishScreen
