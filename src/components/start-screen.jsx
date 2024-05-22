
//başlangıç ekranı
export default function StartScreen({ onStart }) {
  return (
    <div className="  border border-transparent rounded-xl shadow-[0_0_5px_5px_rgba(255,255,255,0.6)] bg-orange-300 max-w-[500px] h-[500px] flex items-center justify-center flex-col gap-4 text-center">
      <p className="w-[80%] mx-auto text-center text-wrap text-md sm:text-lg text-white font-medium ">
        "Karşınızda beyin gücünüzü test etmeye hazır olduğunuz bir genel kültür
        yarışması! Her soru için 30 saniye süreniz var, ancak işin içine biraz
        heyecan katıldı:{' '}
        <span className="text-red-600 font-bold">
          İlk 10 saniye cevap şıkları görünmeyecek, ayrıca bir önceki soruya
          dönüş ne yazık ki olamayacak!
        </span>{' '}
        Yarışmanın sonunda, doğru ve yanlış cevaplarınızı öğreneceksiniz. Şimdi,
        hazırsanız, zihinsel kapasitenizi zorlayacak bu yolculuğa başlayalım!"
      </p>
      <button
        onClick={onStart}
        id="start"
        className="bg-purple-500 hover:shadow-[0_0_8px_5px_rgba(255,255,255,0.6)] text-white rounded-full px-4 py-2 shadow-md"
      >
        Let&apos;s Start
      </button>
    </div>
  )
}
