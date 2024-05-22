import { useState, useEffect } from 'react'


//her sorunun kalan süresini belirten component
export default function TimeCount({ questionIndex }) {
  const INITIAL_TIME = 30 //her soru için zaman sayacı başlangıç değeri
  const INITIAL_RED_TIME =10 //10 sn kalınca sayaç kırmızı rengi alır
  const [count, setCount] = useState(INITIAL_TIME)

  useEffect(() => {
    
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1)
      if (count ===1) {
        setCount(INITIAL_TIME)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [count])

  // questionIndex değeri değiştiğinde count'u sıfırla
  useEffect(() => {
    setCount(30)
  }, [questionIndex])

  return (
    <div
      className={`border border-transparent mt-6  w-[3rem] h-[3rem] text-2xl font-bold rounded-full flex justify-center items-center ${
        count > INITIAL_RED_TIME
          ? 'bg-purple-500  text-purple-500 '
          : 'bg-red-900 text-red-900'
      }`}
    >
      <div className="bg-white w-[2rem] h-[2rem] rounded-full flex justify-center items-center">
        {count}
      </div>
    </div>
  )
}
