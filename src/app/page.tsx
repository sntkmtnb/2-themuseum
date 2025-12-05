"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const sections = [
  {
    id: "section1",
    // 画像取得不可のためプレースホルダー
    image: "/assets/figma/hero_frame_content.png", 
    title: "『マリリン・モンロー』\nアンディ・ウォーホル",
    catch: "「派手派手なお姉さん」",
    body: "髪の毛が黄色で、顔がピンク！塗り絵みたいで楽しい。はみ出しても気にしないのがコツだって先生が言ってた。唇はママの口紅みたいに真っ赤にしたよ。"
  },
  {
    id: "section2",
    image: "/assets/figma/hero_frame_content.png",
    title: "『アメリカン・ゴシック』\nグラント・ウッド",
    catch: "「真面目な二人とフォーク」",
    body: "髪の毛が黄色で、顔がピンク！塗り絵みたいで楽しい。はみ出しても気にしないのがコツだって先生が言ってた。唇はママの口紅みたいに真っ赤にしたよ。"
  },
  {
    id: "section3",
    image: "/assets/figma/hero_frame_content.png",
    title: "『Untitled (Skull)』\nジャン＝ミシェル・バスキア",
    catch: "「落書きガイコツ」",
    body: "これなら僕にも描ける！クレヨンでグチャグチャって塗って、歯をガタガタに描くのが楽しい。ちょっと怖そうだけど、よく見ると笑ってるみたいで面白い顔だよね。"
  },
  {
    id: "section4",
    image: "/assets/figma/hero_frame_content.png",
    title: "『ダンス』\nアンリ・マティス",
    catch: "「赤人間たちの盆踊り」",
    body: "髪の毛が黄色で、顔がピンク！塗り絵みたいで楽しい。はみ出しても気にしないのがコツだって先生が言ってた。唇はママの口紅みたいに真っ赤にしたよ。"
  },
  {
    id: "section5",
    image: "/assets/figma/hero_frame_content.png",
    title: "『叫び』\nエドヴァルド・ムンク",
    catch: "「アイス落としちゃった」",
    body: "顔がぐにゃぐにゃしてる。お化けを見たのかな？それとも、楽しみにしていたプリンを落としちゃったのかな。空がオレンジ色で、夕焼けみたいで暑そうだから、僕も叫びたい気分。"
  },
  {
    id: "section6",
    image: "/assets/figma/hero_frame_content.png",
    title: "『記憶の固執』\nサルバドール・ダリ",
    catch: "「とろける時計」",
    body: "時計ってこんなに柔らかいっけ？チーズみたいに溶けてる。ダリおじさんは、時計をストーブの上に置いちゃったのかな。数字を描くのが難しかったけど、歪んでるから適当でも大丈夫！"
  },
  {
    id: "section7",
    image: "/assets/figma/hero_frame_content.png",
    title: "『富嶽三十六景』\n葛飾北斎",
    catch: "「ザパーーーーン！！」",
    body: "波がすごい！船の人が食べられそう。青い絵の具をたくさん使って、指でグワーッてやったんだ。水しぶきが飛んでくる感じ、出てるかな？"
  },
  {
    id: "section8",
    image: "/assets/figma/hero_frame_content.png",
    title: "『モナ・リザ』\nレオナルド・ダ・ヴィンチ",
    catch: "「眉毛のないおばさん」",
    body: "この人、なんで笑ってるんだろう？いいことあったのかな。眉毛を描くのを忘れちゃったわけじゃないよ。最初からなかったんだもん。ほっぺたを赤くしたら、もっと優しそうになったよ。"
  },
  {
    id: "section9",
    image: "/assets/figma/hero_frame_content.png",
    title: "『睡蓮』\nクロード・モネ",
    catch: "「池の葉っぱとお花」",
    body: "カエルがいそうな池だね。緑の葉っぱをいっぱい描いて、その上にお花を浮かべたよ。水の色を黒っぽくしたら、夜の池みたいでかっこよくなった。"
  },
  {
    id: "section10",
    image: "/assets/figma/hero_frame_content.png",
    title: "『赤カンナ』\nジョージア・オキーフ",
    catch: "「画面いっぱいの赤」",
    body: "お花をこんなに大きく描くの初めて！紙からはみ出しそう。真ん中の黄色と黒のところが、目玉みたいでこっちを見てる気がする。"
  },
  {
    id: "section11",
    image: "/assets/figma/hero_frame_content.png",
    title: "『ヴィーナスの誕生』\nサンドロ・ボッティチェリ",
    catch: "「貝殻サーファー」",
    body: "こんな大きな貝殻に乗ったら、普通は転ぶよ。バランス感覚がすごいね。裸ん坊だから風邪ひかないか心配。周りにヒラヒラしてるのを描くのが大変だった。"
  },
  {
    id: "section12",
    image: "/assets/figma/hero_frame_content.png",
    title: "『接吻』\nグスタフ・クリムト",
    catch: "「金色のぐるぐる抱っこ」",
    body: "金色がいっぱい！クレヨンだけじゃ足りないから、絵の具も重ねたよ。服の模様が四角だったり丸だったりして面白い。二人は仲良しなんだね。ちょっと羨ましいな。"
  },
  {
    id: "section13",
    image: "/assets/figma/hero_frame_content.png",
    title: "『星月夜』\nフィンセント・ファン・ゴッホ",
    catch: "「ぐるぐる回るお星さま」",
    body: "夜なのにすごく明るい！空が川みたいに流れてて、見てると目が回りそう。お星さまは目玉焼きみたいに黄色く塗ったよ。手前の黒い木は、メラメラ燃えてる火みたいでカッコいいでしょ。"
  },
];

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        rootMargin: "-10% 0px -10% 0px", 
        threshold: 0
      }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main className="w-full min-h-screen flex flex-col items-center pb-32">
      {/* Hero Section */}
      <section className="relative w-full max-w-[600px] flex flex-col items-center pt-12 pb-16 px-6">
        {/* 額縁エリア */}
        <div className="relative w-full aspect-[4/3] flex items-center justify-center mb-8">
          <div className="absolute inset-0 z-10">
            <Image
              src="/assets/figma/hero_frame_mask.png"
              alt="Frame"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <div className="absolute inset-[15%] z-0 bg-[#E7DBB2]">
             <Image
              src="/assets/figma/hero_frame_content.png"
              alt="Background"
              fill
              className="object-cover opacity-80"
            />
          </div>

          <div className="relative z-20 text-center text-[#573c28]">
            <h1 className="text-3xl md:text-5xl font-black mb-2 tracking-widest font-serif">
              THE MUSEUM
            </h1>
            <p className="text-xl md:text-2xl font-bold font-serif">
              巨匠（5歳）、降臨。
            </p>
          </div>
        </div>

        {/* 導入テキスト */}
        <div className="text-center space-y-4 fade-in">
          <p className="text-lg md:text-xl font-medium leading-relaxed drop-shadow-md">
            ここは、世界で一番
            <br />
            ハードルの低い美術館
            <br />
            「THE MUSEUM」
          </p>
          <p className="text-lg md:text-xl font-medium leading-relaxed drop-shadow-md">
            教科書の権威を
            <br />
            脱ぎ捨てて、
            <br />
            直感と衝動だけで
            <br />
            名画を描き直しました。
          </p>
          <p className="text-lg md:text-xl font-medium leading-relaxed drop-shadow-md">
            技術はありませんが、
            <br />
            愛嬌なら負けません。
          </p>
        </div>
      </section>

      {/* Art Sections */}
      {sections.map((section) => (
        <section key={section.id} className="relative w-full max-w-[500px] px-6 py-12 flex flex-col items-center fade-in">
          {/* スポットライト効果 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-yellow-200/20 blur-3xl rounded-full pointer-events-none"></div>

          {/* 額縁と絵 */}
          <div className="relative w-full aspect-square bg-[#8B5A2B] p-4 shadow-2xl mb-8 border-4 border-[#FFD700] rounded-sm">
             <div className="w-full h-full relative overflow-hidden bg-black flex items-center justify-center">
                {/* 
                  Note: FigmaのMCP制限により詳細画像データが取得できなかったため、
                  現在はプレースホルダー画像を表示しています。
                  本来は section.image に正しい画像パスが入るはずです。
                */}
                <Image
                  src={section.image}
                  alt={section.title.replace("\n", " ")}
                  fill
                  className="object-cover"
                />
                {/* 画像がないことの代替表示（文字で作品名を表示など）はデザインを崩すのでしない */}
             </div>
          </div>

          {/* キャプションプレート */}
          <div className="relative bg-gradient-to-b from-[#FFEEB0] to-[#Ceb768] py-3 px-8 rounded-lg shadow-lg mb-8 border border-[#967F35] text-center min-w-[280px]">
              {/* 四隅のネジ */}
              <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-gray-400 shadow-inner border border-gray-500"></div>
              <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-gray-400 shadow-inner border border-gray-500"></div>
              <div className="absolute bottom-1 left-1 w-2 h-2 rounded-full bg-gray-400 shadow-inner border border-gray-500"></div>
              <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-gray-400 shadow-inner border border-gray-500"></div>
              
              <h3 className="text-[#573c28] font-bold text-sm md:text-base whitespace-pre-line leading-tight">
                {section.title}
              </h3>
          </div>

          {/* 解説テキスト */}
          <div className="text-center text-[#f3f3f3] max-w-[400px]">
             <h4 className="text-xl font-bold mb-4">{section.catch}</h4>
             <p className="leading-relaxed font-medium">
               {section.body}
             </p>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="w-full py-16 text-center h-32 mt-12">
        <p className="text-xs font-bold tracking-widest text-[#f3f3f3] opacity-80">© 2025 THE MUSEUM</p>
      </footer>

    </main>
  );
}
