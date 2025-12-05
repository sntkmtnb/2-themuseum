"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// =============================================================================
// Image Assets (converted from Figma localhost URLs)
// =============================================================================
const imgTagFrame = "/assets/figma/tag_frame.png";
const imgPaintFrame = "/assets/figma/paint_frame.png";
const imgRay = "/assets/figma/ray.png";
const imgLight = "/assets/figma/light.png";
const imgHeroFrame = "/assets/figma/hero_frame.png";
const imgHeroBgInner = "/assets/figma/hero_bg_inner.png";
const imgHeroLogo = "/assets/figma/hero_logo.png";

// Paint images for each section
const paintImages = [
  "/assets/figma/paint/01_marilyn.png",
  "/assets/figma/paint/02_american.png",
  "/assets/figma/paint/03_skull.png",
  "/assets/figma/paint/04_dance.png",
  "/assets/figma/paint/05_scream.png",
  "/assets/figma/paint/06_persistence.png",
  "/assets/figma/paint/07_wave.png",
  "/assets/figma/paint/08_monalisa.png",
  "/assets/figma/paint/09_waterlilies.png",
  "/assets/figma/paint/10_canna.png",
  "/assets/figma/paint/11_venus.png",
  "/assets/figma/paint/12_kiss.png",
  "/assets/figma/paint/13_starry.png",
];

// =============================================================================
// Section Data
// =============================================================================
const sectionsData = [
  {
    title1: "『マリリン・モンロー』",
    title2: "アンディ・ウォーホル",
    catch: "「派手派手なお姉さん」",
    body: "髪の毛が黄色で、顔がピンク！塗り絵みたいで楽しい。はみ出しても気にしないのがコツだって先生が言ってた。唇はママの口紅みたいに真っ赤にしたよ。",
  },
  {
    title1: "『アメリカン・ゴシック』",
    title2: "グラント・ウッド",
    catch: "「真面目な二人とフォーク」",
    body: "髪の毛が黄色で、顔がピンク！塗り絵みたいで楽しい。はみ出しても気にしないのがコツだって先生が言ってた。唇はママの口紅みたいに真っ赤にしたよ。",
  },
  {
    title1: "『Untitled (Skull)』",
    title2: "ジャン＝ミシェル・バスキア",
    catch: "「落書きガイコツ」",
    body: "これなら僕にも描ける！ クレヨンでグチャグチャって塗って、歯をガタガタに描くのが楽しい。ちょっと怖そうだけど、よく見ると笑ってるみたいで面白い顔だよね。",
  },
  {
    title1: "『ダンス』",
    title2: "アンリ・マティス",
    catch: "「赤人間たちの盆踊り」",
    body: "髪の毛が黄色で、顔がピンク！塗り絵みたいで楽しい。はみ出しても気にしないのがコツだって先生が言ってた。唇はママの口紅みたいに真っ赤にしたよ。",
  },
  {
    title1: "『叫び』",
    title2: "エドヴァルド・ムンク",
    catch: "「アイス落としちゃった」",
    body: "顔がぐにゃぐにゃしてる。お化けを見たのかな？ それとも、楽しみにしていたプリンを落としちゃったのかな。空がオレンジ色で、夕焼けみたいに暑そうだから、僕も叫びたい気分。",
  },
  {
    title1: "『記憶の固執』",
    title2: "サルバドール・ダリ",
    catch: "「とろける時計」",
    body: "時計ってこんなに柔らかいっけ？ チーズみたいに溶けてる。ダリおじさんは、時計をストーブの上に置いちゃったのかな。数字を描くのが難しかったけど、歪んでるから適当でも大丈夫！",
  },
  {
    title1: "『富嶽三十六景』",
    title2: "葛飾北斎",
    catch: "「ザパーーーン！！」",
    body: "波がすごい！ 船の人が食べられそう。青い絵の具をたくさん使って、指でグワーッてやったんだ。水しぶきが飛んでくる感じ、出てるかな？",
  },
  {
    title1: "『モナ・リザ』",
    title2: "レオナルド・ダ・ヴィンチ",
    catch: "「眉毛のないおばさん」",
    body: "この人、なんで笑ってるんだろう？ いいことあったのかな。眉毛を描くのを忘れちゃったわけじゃないよ。最初からなかったんだもん。ほっぺたを赤くしたら、もっと優しそうになったよ。",
  },
  {
    title1: "『睡蓮』",
    title2: "クロード・モネ",
    catch: "「池の葉っぱとお花」",
    body: "カエルがいそうな池だね。緑の葉っぱをいっぱい描いて、その上にお花を浮かべたよ。水の色を黒っぽくしたら、夜の池みたいでかっこよくなった。",
  },
  {
    title1: "『赤カンナ』",
    title2: "ジョージア・オキーフ",
    catch: "「画面いっぱいの赤」",
    body: "お花をこんなに大きく描くの初めて！ 紙からはみ出しそう。真ん中の黄色と黒のところが、目玉みたいでこっちを見てる気がする。",
  },
  {
    title1: "『ヴィーナスの誕生』",
    title2: "サンドロ・ボッティチェリ",
    catch: "「貝殻サーファー」",
    body: "こんな大きな貝殻に乗ったら、普通は転ぶよ。バランス感覚がすごいね。裸ん坊だから風邪ひかないか心配。周りにヒラヒラしてるのを描くのが大変だった。",
  },
  {
    title1: "『接吻』",
    title2: "グスタフ・クリムト",
    catch: "「金色のぐるぐる抱っこ」",
    body: "金色がいっぱい！ クレヨンだけじゃ足りないから、絵の具も重ねたよ。服の模様が四角だったり丸だったりして面白い。二人は仲良しなんだね。ちょっと羨ましいな。",
  },
  {
    title1: "『星月夜』",
    title2: "フィンセント・ファン・ゴッホ",
    catch: "「ぐるぐる回るお星さま」",
    body: "夜なのにすごく明るい！ 空が川みたいに流れてて、見てると目が回りそう。お星さまは目玉焼きみたいに黄色く塗ったよ。手前の黒い木は、メラメラ燃えてる火みたいでカッコいいでしょ。",
  },
];

// =============================================================================
// Components
// =============================================================================

/**
 * HeroImage Component
 * Figma: data-name="Hero Image", data-node-id="5:324"
 */
function HeroImage() {
  return (
    <div className="box-border content-stretch flex flex-col items-center px-0 py-[24px] relative shrink-0 w-full">
      {/* Title (額縁 + テキスト) */}
      <div className="box-border content-stretch flex gap-[10px] h-[253px] items-center justify-center px-[55px] py-0 relative shrink-0 w-[323px]">
        {/* img1 - 額縁画像 */}
        <div className="absolute h-[253px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[323px]">
          {/* Clip path group > Group > Rectangle (背景画像) */}
          <div className="absolute inset-[3.91%_13.64%_3.56%_13.91%]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                src={imgHeroBgInner}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* iStock-497315730 (額縁) */}
          <div className="absolute bottom-[0.23%] left-0 right-[0.23%] top-0">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                src={imgHeroFrame}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        {/* Logo - THE MUSEUM タイトル画像 */}
        <div className="h-[56px] relative shrink-0 w-[184px] z-10">
          <Image
            src={imgHeroLogo}
            alt="THE MUSEUM - 巨匠（5歳）、降臨。"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Text - 導入文 */}
      <div className="box-border content-stretch flex flex-col gap-[16px] items-center px-[48px] py-[12px] relative shrink-0 w-[375px]">
        <div className="font-medium leading-[1.6] relative shrink-0 text-[20px] text-[#f3f3f3] tracking-[1px] w-full">
          <p className="mb-0">ここは、世界で一番</p>
          <p className="mb-0">ハードルの低い美術館 </p>
          <p className="mb-0">「THE MUSEUM」</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">教科書の権威を</p>
          <p className="mb-0">脱ぎ捨てて、</p>
          <p className="mb-0">直感と衝動だけで</p>
          <p className="mb-0">名画を描き直しました。</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">技術はありませんが、</p>
          <p>愛嬌なら負けません。</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Section Component
 * Figma: data-name="Section"
 */
interface SectionProps {
  id: string; // Add ID for observer
  paintImage: string;
  title1: string;
  title2: string;
  catchPhrase: string;
  body: string;
}

function Section({ id, paintImage, title1, title2, catchPhrase, body }: SectionProps) {
  return (
    <div
      id={id}
      className="section-container box-border content-stretch flex flex-col items-center px-0 py-[24px] relative shrink-0 w-full transition-all duration-700 ease-out"
      data-active="false"
    >
      {/* Frame */}
      <div className="frame-content box-border content-stretch flex flex-col gap-[24px] items-center pb-[24px] pt-[128px] px-0 relative shrink-0 w-full transition-all duration-700 ease-out filter brightness-[0.4]">
        {/* Paint */}
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-0 py-[24px] relative shrink-0">
          {/* PaintImg */}
          <div className="overflow-clip relative shrink-0 size-[246px]">
            <div className="absolute bottom-[-0.64%] left-0 right-[-0.64%] top-0">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Image
                  src={paintImage}
                  alt={title1}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          {/* PaintFrame */}
          <div className="absolute h-[334px] left-[-51.5px] overflow-clip top-[-20px] w-[349px]">
            <div className="absolute bottom-[-0.31%] left-0 right-[-0.31%] top-0">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Image
                  src={imgPaintFrame}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tag */}
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-0 py-[24px] relative shrink-0">
          {/* TagFrame */}
          <div className="h-[87px] relative shrink-0 w-[278px]">
            <Image
              src={imgTagFrame}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          {/* Tag Text */}
          <div className="absolute font-bold leading-[1.6] left-1/2 text-[15px] text-[#303030] text-center text-nowrap top-[calc(50%-23.5px)] tracking-[0.75px] translate-x-[-50%] whitespace-pre">
            <p className="mb-0">{title1}</p>
            <p>{title2}</p>
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="card-content box-border content-stretch flex flex-col gap-[12px] items-center leading-[1.6] max-w-[375px] p-[24px] relative shrink-0 text-[#f3f3f3] w-full transition-all duration-700 ease-out filter brightness-[0.4]">
        <p className="font-bold relative shrink-0 text-[20px] tracking-[1px] w-full">
          {catchPhrase}
        </p>
        <p className="font-medium relative shrink-0 text-[16px] tracking-[0.8px] w-full">
          {body}
        </p>
      </div>

      {/* Ray - Updated layout: Centered */}
      <div className="light-effect absolute h-[367px] left-1/2 top-[55px] translate-x-[-50%] w-[213px] pointer-events-none opacity-0 transition-opacity duration-700 ease-out">
        <Image
          src={imgRay}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Light */}
      <div className="absolute h-[50px] left-1/2 top-[23px] translate-x-[-50%] w-[35px] pointer-events-none">
        <Image
          src={imgLight}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

/**
 * Footer Component
 * Figma: data-name="Footer", data-node-id="10:183"
 */
function Footer() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[128px] items-center overflow-clip pb-[64px] pt-[24px] px-0 relative shrink-0 w-full">
      {/* Card */}
      <div className="box-border content-stretch flex flex-col gap-[12px] items-center max-w-[375px] p-[24px] relative shrink-0 text-[#f3f3f3] w-full">
        <p className="font-bold leading-[1.6] relative shrink-0 text-[20px] tracking-[1px] w-full">
          すべての「元・巨匠」たちへ
        </p>
        <div className="font-medium leading-[1.6] relative shrink-0 text-[16px] tracking-[0.8px] w-full">
          <p className="mb-0">クレヨンの独特な匂い。水入れの中で濁っていく絵の具の色。真っ白な画用紙を前にした時の、あの万能感。</p>
          <p className="mb-0 text-[16px]">&nbsp;</p>
          <p className="mb-0">この美術館のハードルがこれほど低いのは、ここにある作品が、かつてあなたが描いていた世界そのものだからです。</p>
          <p className="mb-0 text-[16px]">&nbsp;</p>
          <p className="mb-0">空は紫でもよかったし、太陽には顔があってもよかった。「技術」や「権威」なんて言葉を知らなかったあの頃、 私たちは誰もが、直感と衝動だけで世界を再構築する天才でした。</p>
          <p className="mb-0 text-[16px]">&nbsp;</p>
          <p className="mb-0">画面をスクロールして感じたその「愛嬌」は、きっと、大人になったあなたの中にも眠っているはずです。</p>
          <p className="mb-0 text-[16px]">&nbsp;</p>
          <p>本日は、ご来館ありがとうございました。 </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white w-full">
        <p className="leading-[1.4]">© 2025 newhello.jp</p>
      </div>
    </div>
  );
}

// =============================================================================
// Main Page Component
// =============================================================================

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Observer for section activation (Light ON/OFF)
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.setAttribute("data-active", "true");
            // Update child elements styles via DOM manipulation for better performance than React state
            target.querySelectorAll(".frame-content, .card-content").forEach((el) => {
              (el as HTMLElement).style.filter = "brightness(1)";
            });
            target.querySelectorAll(".light-effect").forEach((el) => {
              (el as HTMLElement).style.opacity = "1";
            });
          } else {
            // When scrolling away, reset to dark/off state?
            // User requested: "スクロールで自身のセクションに到達するまでは、LightをOFFに"
            // If we want it to turn OFF again when scrolling past, we keep this else block.
            // If we want it to stay ON once visited, we remove it.
            // Based on "スクロールに合わせて", likely wants dynamic toggling.
            target.setAttribute("data-active", "false");
            target.querySelectorAll(".frame-content, .card-content").forEach((el) => {
              (el as HTMLElement).style.filter = "brightness(0.4)";
            });
            target.querySelectorAll(".light-effect").forEach((el) => {
              (el as HTMLElement).style.opacity = "0";
            });
          }
        });
      },
      { 
        rootMargin: "-20% 0px -20% 0px", // Trigger when element is in the middle 60% of screen
        threshold: 0.4 
      }
    );

    document.querySelectorAll(".section-container").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="content-stretch flex flex-col items-center relative w-full min-h-screen">
      {/* Hero Image */}
      <HeroImage />

      {/* Sections */}
      {sectionsData.map((section, index) => (
        <Section
          key={index}
          id={`section-${index}`}
          paintImage={paintImages[index]}
          title1={section.title1}
          title2={section.title2}
          catchPhrase={section.catch}
          body={section.body}
        />
      ))}

      {/* Footer */}
      <Footer />
    </div>
  );
}
