"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// セクションデータ
const sections = [
  {
    id: "section1",
    image: "/assets/img2.png",
    width: 1537,
    height: 2732,
    alt: "土の中の世界",
    heading: "土の下の賑やかな隣人たち。",
    body: `私たちが歩く地面の皮一枚下では、
根っこたちが手をつなぎ、
情報のやり取りをしています。

冬眠するカエル、働き者のモグラ、
そして誰かが隠したタイムカプセル。

土の匂いは、生命の匂いです。`,
    textColor: "text-[#f3f3f3]",
    overlay: true,
  },
  {
    id: "section2",
    image: "/assets/img3.png",
    width: 1537,
    height: 2732,
    alt: "化石の世界",
    heading: "時を止めた、石の図書館。",
    body: `さらに深く潜りましょう。

ここでは、時間は
「流れる」ものではなく
「積み重なる」もの。

一億年前の雨の跡、王様のいない王冠、
そして名前のない恐竜の骨。

静寂の中で、彼らは
今も物語を語り続けています。`,
    textColor: "text-[#f3f3f3]",
    overlay: true,
  },
  {
    id: "section3",
    image: "/assets/img4.png",
    width: 1537,
    height: 2731,
    alt: "地底の洞窟",
    heading: "星のない夜空と、地底の海。",
    body: `岩盤を抜けた先に広がっていたのは、
巨大な空洞でした。

天井には水晶の星々が瞬き、
足元には冷たく澄んだ
湖が広がっています。

地上の喧騒はもう届きません。
聞こえるのは、水滴が落ちる音だけ。`,
    textColor: "text-[#f3f3f3]",
    overlay: true,
  },
  {
    id: "section4",
    image: "/assets/img5.png",
    width: 1537,
    height: 2732,
    alt: "地球の核",
    heading: "はじまりの熱。",
    body: `ついに、世界の底へ辿り着きました。

この圧倒的な赤。
肌を焦がすような熱気。
ここは地球の心臓。

すべての生命は、この熱から生まれ、
そして還ってくるのです。`,
    textColor: "text-[#573c28]",
    overlay: false,
  },
];

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer for fade-in/out animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 要素が画面内に入っているかどうか
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            // 画面外に出たらクラスを削除してフェードアウト
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        // 画面の上下10%を「画面外」とみなすマージンを設定すると、
        // 完全に消える前にフェードアウトが始まりますが、
        // 今回は「画面上部に消えるタイミング」なので、
        // rootMarginを調整して、上部付近で交差判定が外れるようにします。
        rootMargin: "-50% 0px -10% 0px", 
        threshold: 0 // 1ピクセルでも入れば検知、逆に出れば検知
      }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main className="w-full min-h-screen flex justify-center">
      {/* 背景色削除: bodyのテクスチャを見せる */}
      <div className="w-full max-w-[600px] shadow-2xl overflow-hidden">
        {/* Hero Section */}
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/assets/img1.png"
              alt="空と森のイラスト"
              width={1537}
              height={2731}
              className="w-full h-auto block"
              priority
            />
            
            {/* Title Overlay */}
            <div className="absolute top-[20%] left-0 right-0 text-center z-10 px-4">
              <h1 className="title-main mb-2 drop-shadow-glow">The Dive</h1>
              <p className="title-sub drop-shadow-glow">根源への潜行</p>
            </div>

            {/* Text Overlay */}
            <div className="absolute bottom-[4%] left-0 right-0 px-6 z-10 flex justify-center fade-in">
              <div className="w-full text-center">
                <h2 className="heading text-[#f3f3f3] drop-shadow-lg">
                  深く、もっと深く。
                  <br />
                  地球の心臓の音を聞きにいく。
                </h2>
                <p className="body-text text-[#f3f3f3] drop-shadow-lg font-medium">
                  見上げれば空があるように、
                  <br />
                  足元には、果てしない
                  <br />
                  奥行きが広がっています。
                  <br />
                  <br />
                  そこは、太陽の届かない場所。
                  <br />
                  <br />
                  けれど、決して暗闇だけの
                  <br />
                  世界ではありません。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        {sections.map((section) => (
          <section key={section.id} className="relative w-full">
            {section.overlay ? (
              <div className="relative w-full">
                <Image
                  src={section.image}
                  alt={section.alt}
                  width={section.width}
                  height={section.height}
                  className="w-full h-auto block"
                />
                
                <div className="absolute bottom-[4%] left-0 right-0 px-6 z-10 flex justify-center fade-in">
                  <div className="w-full text-center">
                    <h2 className={`heading ${section.textColor} drop-shadow-lg`}>
                      {section.heading}
                    </h2>
                    <p className={`body-text ${section.textColor} drop-shadow-lg font-medium`}>
                      {section.body.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < section.body.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              // Footer Section (画像の下にテキスト)
              <div className="w-full flex flex-col items-center">
                <div className="relative w-full">
                  <Image
                    src={section.image}
                    alt={section.alt}
                    width={section.width}
                    height={section.height}
                    className="w-full h-auto block"
                  />
                </div>
                <div className="absolute bottom-[0%] left-0 right-0 px-6 z-10 flex justify-center fade-in">
                  <div className="w-full text-center">
                    <h2 className={`heading ${section.textColor}`}>
                      {section.heading}
                    </h2>
                    <p className={`body-text ${section.textColor}`}>
                      {section.body.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < section.body.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>
        ))}

        {/* Footer */}
        <footer className="w-full py-16 text-center h-32">
          <p className="footer-text h-full flex flex-col items-center justify-end">© 2025 newhello.jp</p>
        </footer>
      </div>
    </main>
  );
}
