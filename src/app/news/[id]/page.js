"use client";

import { useLanguage } from "../../../context/LanguageContext";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// 新闻数据
const newsData = {
  1: {
    en: {
      date: "May 20, 2025",
      title:
        "PIC Partners with Fukushima Robot Test Field for Disaster-Response Robotics",
      summary:
        "New partnership aims to develop comprehensive policy frameworks for emergency response automation",
      content: `
        <p>The Policy Innovation Consortium (PIC) has announced a strategic partnership with the Fukushima Robot Test Field (RTF) to develop comprehensive policy frameworks that will accelerate the deployment of robotic solutions for disaster response scenarios.</p>
        
        <p>This collaboration brings together PIC's policy expertise with RTF's world-leading facilities for testing and evaluating robots in simulated disaster environments. The partnership will focus on three key areas:</p>
        
        <ul>
          <li><strong>Regulatory Framework Development:</strong> Creating flexible regulations that enable rapid deployment of robotic systems during emergencies while maintaining appropriate safety standards.</li>
          <li><strong>Cross-Border Response Protocols:</strong> Establishing international standards for robotic emergency response teams to operate across national boundaries during large-scale disasters.</li>
          <li><strong>Public-Private Coordination Models:</strong> Designing governance structures that facilitate seamless cooperation between government agencies, private technology providers, and emergency response organizations.</li>
        </ul>
        
        <p>"The lessons from the 2011 Great East Japan Earthquake and Tsunami continue to drive innovation in disaster response," said Ryunosuke Takahashi, PIC Chairperson. "This partnership will help translate technological capabilities into actionable policy frameworks that can save lives during future emergencies."</p>
        
        <p>The Fukushima RTF, established in the wake of the 2011 disaster, has become a global center for disaster response robotics, offering testing environments that simulate collapsed buildings, flooded urban areas, and other challenging scenarios.</p>
        
        <p>The initial phase of the partnership will include a series of policy workshops bringing together emergency management officials, robotics researchers, and industry representatives to identify regulatory barriers and develop prototype frameworks for testing.</p>
        
        <p>A white paper outlining preliminary recommendations is expected to be published in September 2025, with pilot implementation projects to follow in selected municipalities across Japan.</p>
      `,
      relatedNews: ["2", "3"],
    },
    ja: {
      date: "2025年5月20日",
      title: "PICが福島ロボットテストフィールドと災害対応ロボティクスで提携",
      summary:
        "新たなパートナーシップにより、緊急対応自動化のための包括的な政策フレームワークの開発を目指す",
      content: `
        <p>政策イノベーションコンソーシアム（PIC）は、福島ロボットテストフィールド（RTF）との戦略的パートナーシップを発表し、災害対応シナリオにおけるロボットソリューションの展開を加速する包括的な政策フレームワークを開発します。</p>
        
        <p>この協力関係により、PICの政策専門知識とRTFのシミュレートされた災害環境でのロボットのテストと評価のための世界をリードする施設が結集します。このパートナーシップは、次の3つの主要分野に焦点を当てます：</p>
        
        <ul>
          <li><strong>規制フレームワークの開発：</strong> 適切な安全基準を維持しながら、緊急時にロボットシステムの迅速な展開を可能にする柔軟な規制の作成。</li>
          <li><strong>国境を越えた対応プロトコル：</strong> 大規模災害時に国境を越えて活動するロボット緊急対応チームの国際標準の確立。</li>
          <li><strong>官民連携モデル：</strong> 政府機関、民間技術プロバイダー、緊急対応組織間のシームレスな協力を促進するガバナンス構造の設計。</li>
        </ul>
        
        <p>「2011年の東日本大震災と津波からの教訓は、引き続き災害対応における革新を推進しています」とPIC議長の高橋龍之介は述べました。「このパートナーシップは、技術的能力を将来の緊急事態で命を救うことができる実行可能な政策フレームワークに変換するのに役立ちます。」</p>
        
        <p>2011年の災害後に設立された福島RTFは、倒壊した建物、浸水した都市部、その他の困難なシナリオをシミュレートするテスト環境を提供する、災害対応ロボティクスのグローバルセンターとなっています。</p>
        
        <p>パートナーシップの初期段階には、緊急管理当局者、ロボティクス研究者、業界代表者を集めて規制障壁を特定し、テスト用のプロトタイプフレームワークを開発する一連の政策ワークショップが含まれます。</p>
        
        <p>予備的な勧告を概説する白書は2025年9月に発行される予定で、その後、日本全国の選ばれた自治体でパイロット実施プロジェクトが続きます。</p>
      `,
      relatedNews: ["2", "3"],
    },
  },
  2: {
    en: {
      date: "May 15, 2025",
      title:
        "White Paper Released: Technological Solutions for Aging Infrastructure",
      summary:
        "Our latest research explores how Toray Industries' carbon fiber technology can address Japan's aging infrastructure challenges",
      content: `
        <p>The Policy Innovation Consortium (PIC) has released a comprehensive white paper examining how advanced materials, particularly carbon fiber reinforced polymers (CFRP) developed by Toray Industries, can address Japan's critical infrastructure challenges.</p>
        
        <p>The paper, titled "Extending Infrastructure Lifespan: Policy Pathways for Materials Innovation," comes at a crucial time as Japan faces the dual pressures of aging infrastructure and fiscal constraints on replacement budgets.</p>
        
        <p>Key findings from the white paper include:</p>
        
        <ul>
          <li><strong>Cost-Effective Retrofitting:</strong> CFRP applications can extend the lifespan of concrete bridges by 30-50 years at approximately 40% of the cost of complete replacement.</li>
          <li><strong>Regulatory Barriers:</strong> Current building codes and procurement regulations often inadvertently discourage innovative materials adoption.</li>
          <li><strong>Life-Cycle Assessment:</strong> When evaluated on a total life-cycle basis, advanced materials solutions demonstrate superior economic and environmental performance despite higher initial costs.</li>
        </ul>
        
        <p>"Japan's infrastructure challenge represents both a crisis and an opportunity," said Hiromi Nakamura, PIC's Chief Scientist. "By creating the right policy environment for materials innovation, we can transform this challenge into a driver for economic growth and export opportunities."</p>
        
        <p>The white paper proposes a three-tier policy framework:</p>
        
        <ol>
          <li><strong>Regulatory Modernization:</strong> Updating building codes and standards to be performance-based rather than materials-prescriptive.</li>
          <li><strong>Fiscal Incentives:</strong> Creating tax benefits for infrastructure owners who implement life-extending technologies.</li>
          <li><strong>Innovation Ecosystem:</strong> Establishing regional innovation clusters connecting materials manufacturers, construction firms, and infrastructure managers.</li>
        </ol>
        
        <p>The Ministry of Land, Infrastructure, Transport and Tourism has expressed interest in the findings, with pilot projects being planned for implementation in the Kansai region starting in early 2026.</p>
        
        <p>The full white paper is available for download on the PIC website, along with technical appendices detailing case studies from demonstration projects conducted in collaboration with Toray Industries and the Public Works Research Institute.</p>
      `,
      relatedNews: ["1", "3"],
    },
    ja: {
      date: "2025年5月15日",
      title:
        "白書発表：高齢化インフラストラクチャーのための技術的ソリューション",
      summary:
        "最新の研究では、東レ工業の炭素繊維技術が日本の高齢化インフラの課題にどのように対応できるかを探ります",
      content: `
        <p>政策イノベーションコンソーシアム（PIC）は、東レ工業が開発した炭素繊維強化ポリマー（CFRP）などの先端材料が、日本の重要なインフラ課題にどのように対応できるかを検討する包括的な白書を発表しました。</p>
        
        <p>「インフラの寿命延長：材料イノベーションのための政策経路」と題されたこの白書は、日本が高齢化するインフラと交換予算に対する財政的制約の二重の圧力に直面している重要な時期に発表されました。</p>
        
        <p>白書の主な調査結果は以下の通りです：</p>
        
        <ul>
          <li><strong>費用対効果の高い改修：</strong> CFRPの応用により、コンクリート橋の寿命を30〜50年延長でき、完全な交換コストの約40％で実現可能。</li>
          <li><strong>規制障壁：</strong> 現在の建築基準や調達規制は、しばしば革新的な材料の採用を意図せず妨げている。</li>
          <li><strong>ライフサイクル評価：</strong> 総ライフサイクルベースで評価すると、先端材料ソリューションは初期コストが高いにもかかわらず、優れた経済的・環境的パフォーマンスを示す。</li>
        </ul>
        
        <p>「日本のインフラ課題は危機と機会の両方を表しています」とPICの主任科学者、中村博美は述べました。「材料イノベーションのための適切な政策環境を作ることで、この課題を経済成長と輸出機会の原動力に変えることができます。」</p>
        
        <p>白書は3層の政策フレームワークを提案しています：</p>
        
        <ol>
          <li><strong>規制の近代化：</strong> 建築基準や標準を材料規定型ではなく性能ベースに更新する。</li>
          <li><strong>財政的インセンティブ：</strong> 寿命延長技術を実施するインフラ所有者に税制上の利点を創出する。</li>
          <li><strong>イノベーションエコシステム：</strong> 材料メーカー、建設会社、インフラ管理者を結ぶ地域イノベーションクラスターの確立。</li>
        </ol>
        
        <p>国土交通省はこの調査結果に関心を示しており、2026年初頭から関西地域での実施に向けたパイロットプロジェクトが計画されています。</p>
        
        <p>完全な白書は、東レ工業と土木研究所との共同で実施されたデモンストレーションプロジェクトのケーススタディを詳述する技術付録とともに、PICのウェブサイトからダウンロード可能です。</p>
      `,
      relatedNews: ["1", "3"],
    },
  },
  3: {
    en: {
      date: "May 10, 2025",
      title: "PIC Advises on Digital Garden City Nation Initiative",
      summary:
        "Collaboration with the Ministry of Internal Affairs aims to bridge digital divide in rural communities",
      content: `
        <p>The Policy Innovation Consortium (PIC) has been appointed as a strategic advisor to the Ministry of Internal Affairs and Communications (MIC) for the expansion of the Digital Garden City Nation Initiative, a flagship program aimed at revitalizing rural areas through digital transformation.</p>
        
        <p>The initiative, launched in 2022, seeks to address Japan's urban-rural divide by bringing advanced digital infrastructure and services to non-metropolitan areas. PIC will provide policy guidance on three critical aspects of the program:</p>
        
        <ul>
          <li><strong>Regulatory Sandboxes:</strong> Designing special regulatory zones in rural communities where innovative digital services can be tested with modified compliance requirements.</li>
          <li><strong>Public-Private Data Sharing:</strong> Creating frameworks for secure and ethical sharing of data between government agencies, private companies, and community organizations.</li>
          <li><strong>Digital Skills Development:</strong> Establishing localized training programs to ensure rural residents can fully participate in and benefit from digital transformation.</li>
        </ul>
        
        <p>"Rural revitalization requires more than just physical infrastructure—it demands thoughtful policy design that addresses the unique social and economic contexts of each community," said Masataka Ito, PIC's Industry Liaison. "Our role is to ensure that technology deployment is accompanied by appropriate governance frameworks."</p>
        
        <p>The collaboration will initially focus on six model communities selected from different regions of Japan, representing diverse challenges from remote mountainous villages to declining coastal towns. These communities will serve as testing grounds for policy innovations before wider implementation.</p>
        
        <p>A key aspect of PIC's advisory role will be facilitating knowledge transfer between Japanese rural communities and international counterparts that have successfully implemented digital transformation strategies, including examples from Northern Europe and rural South Korea.</p>
        
        <p>The first phase of policy recommendations is expected to be delivered to the MIC by August 2025, with implementation support continuing through 2027.</p>
        
        <p>"The Digital Garden City Nation Initiative represents Japan's commitment to ensuring that technological advancement benefits all citizens, regardless of where they live," said Minister Tanaka of the MIC. "PIC's expertise in policy innovation will help us achieve this vision more effectively."</p>
      `,
      relatedNews: ["1", "2"],
    },
    ja: {
      date: "2025年5月10日",
      title: "PICがデジタル田園都市国家構想についてアドバイス",
      summary:
        "総務省との協力により、農村コミュニティのデジタルデバイドの解消を目指す",
      content: `
        <p>政策イノベーションコンソーシアム（PIC）は、デジタル変革を通じて地方を活性化することを目的とした旗艦プログラムであるデジタル田園都市国家構想の拡大に向けて、総務省（MIC）の戦略的アドバイザーに任命されました。</p>
        
        <p>2022年に開始されたこのイニシアチブは、日本の都市と地方の格差に対処するために、先進的なデジタルインフラとサービスを非都市部にもたらすことを目指しています。PICはプログラムの3つの重要な側面について政策指導を提供します：</p>
        
        <ul>
          <li><strong>規制サンドボックス：</strong> 革新的なデジタルサービスが修正されたコンプライアンス要件でテストできる地方コミュニティの特別規制ゾーンの設計。</li>
          <li><strong>官民データ共有：</strong> 政府機関、民間企業、コミュニティ組織間のデータの安全かつ倫理的な共有のためのフレームワークの作成。</li>
          <li><strong>デジタルスキル開発：</strong> 地方住民がデジタル変革に完全に参加し、恩恵を受けられるようにするためのローカライズされたトレーニングプログラムの確立。</li>
        </ul>
        
        <p>「地方の活性化には、物理的なインフラだけでなく、各コミュニティの独自の社会的・経済的文脈に対応する思慮深い政策設計が必要です」とPICの産業連携担当、伊藤正高は述べました。「私たちの役割は、技術展開が適切なガバナンスフレームワークを伴うことを確保することです。」</p>
        
        <p>この協力は、当初、日本の異なる地域から選ばれた6つのモデルコミュニティに焦点を当て、遠隔山村から衰退する沿岸都市まで多様な課題を代表しています。これらのコミュニティは、より広い実装の前に政策イノベーションのテスト場として機能します。</p>
        
        <p>PICのアドバイザリー役割の重要な側面は、日本の地方コミュニティと、北欧や韓国の地方など、デジタル変革戦略を成功裏に実施した国際的なカウンターパート間の知識移転を促進することです。</p>
        
        <p>政策提言の第一段階は2025年8月までにMICに提出される予定で、実施支援は2027年まで継続します。</p>
        
        <p>「デジタル田園都市国家構想は、住む場所に関係なく、すべての市民が技術の進歩の恩恵を受けることを保証するという日本のコミットメントを表しています」とMICの田中大臣は述べました。「PICの政策イノベーションの専門知識は、このビジョンをより効果的に達成するのに役立ちます。」</p>
      `,
      relatedNews: ["1", "2"],
    },
  },
};

export default function NewsDetail() {
  const { language } = useLanguage();
  const params = useParams();
  const id = params.id;

  // 获取当前新闻数据
  const news = newsData[id];

  // 如果没有找到新闻，显示错误信息
  if (!news) {
    return (
      <main className="relative bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[url('/patterns/jp-dots.png')] bg-repeat opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[url('/patterns/jp-dots.png')] bg-repeat opacity-5"></div>

        <div className="bg-white border border-gray-100 p-8 text-center max-w-md relative">
          <div className="h-1 w-full bg-gray-100 absolute top-0 left-0"></div>
          <div className="h-1 w-1/3 bg-red-400 absolute top-0 left-0"></div>

          <h1 className="text-xl font-medium text-gray-900 mb-4">
            {language === "en" ? "News Not Found" : "ニュースが見つかりません"}
          </h1>
          <p className="text-gray-600 mb-6 text-sm">
            {language === "en"
              ? "Sorry, the news content you requested does not exist."
              : "申し訳ありませんが、リクエストされたニュースコンテンツは存在しません。"}
          </p>
          <Link
            href="/news"
            className="inline-block text-blue-600 border border-blue-200 px-4 py-2 text-sm hover:bg-blue-50 transition-colors"
          >
            {language === "en" ? "Back to News List" : "ニュース一覧に戻る"}
          </Link>

          <div className="absolute bottom-3 right-3">
            <div className="w-8 h-8 border border-gray-200 rounded-full opacity-30"></div>
          </div>
        </div>
      </main>
    );
  }

  const t = news[language];

  return (
    <main className="relative bg-gray-50 overflow-hidden">
      {/* 日式风格的装饰元素 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[url('/patterns/jp-dots.png')] bg-repeat opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[url('/patterns/jp-dots.png')] bg-repeat opacity-5"></div>

      {/* 日式风格的页面标题区 */}
      <div className="relative bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          {/* 返回链接 */}
          <div className="mb-8">
            <Link
              href="/news"
              className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              {language === "en" ? "Back to News" : "ニュース一覧に戻る"}
            </Link>
          </div>

          {/* 顶部装饰线 */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-gray-300"></div>
            <div className="mx-3 px-6 py-2 border border-gray-200">
              <p className="text-sm font-medium text-gray-500">{t.date}</p>
            </div>
            <div className="h-px w-16 bg-gray-300"></div>
          </div>

          {/* 标题 */}
          <h1 className="text-2xl font-medium text-gray-900 mb-6 max-w-3xl mx-auto leading-relaxed">
            {t.title}
          </h1>

          {/* 日式风格的装饰图案 */}
          <div className="relative w-16 h-16 mx-auto">
            <div className="absolute inset-0 border-2 border-gray-200 transform rotate-45"></div>
            <div className="absolute inset-2 border border-gray-100 transform rotate-45"></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* 内容区域 - 日式风格 */}
        <div className="bg-white border border-gray-100 relative mb-16">
          {/* 顶部装饰线 */}
          <div className="h-1 w-full bg-gray-100"></div>
          <div className="h-1 w-1/3 bg-blue-400 absolute top-0 left-0"></div>

          {/* 摘要部分 */}
          <div className="p-8 border-b border-gray-50">
            <div className="bg-gray-50 p-6 text-gray-700 text-sm leading-relaxed border-l-2 border-blue-200">
              {t.summary}
            </div>
          </div>

          {/* 正文内容 */}
          <div className="p-8">
            <div
              className="prose max-w-none
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:my-5 prose-p:text-base prose-p:indent-8
              prose-p:tracking-wide prose-p:leading-7 prose-p:line-height-[1.8]
              prose-headings:text-gray-900 prose-headings:font-medium prose-headings:mt-8 prose-headings:mb-4
              prose-h2:text-xl prose-h2:border-b prose-h2:border-gray-100 prose-h2:pb-2
              prose-h3:text-lg
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-blue-700 prose-strong:font-medium
              prose-ul:my-5 prose-li:my-2 prose-li:marker:text-gray-400
              prose-ol:pl-5 prose-ol:my-5
              prose-blockquote:border-l-2 prose-blockquote:border-gray-200 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
            "
            >
              <div
                dangerouslySetInnerHTML={{ __html: t.content }}
                className="text-justify [&>p]:first-letter:ml-8 [&>p]:leading-loose [&>p]:tracking-wide [&>p]:text-base [&>p]:mb-6 [&>p]:indent-8"
              ></div>
            </div>

            {/* 日式装饰元素 */}
            <div className="absolute bottom-4 right-4">
              <div className="w-12 h-12 border border-gray-100 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>

        {/* 相关新闻 - 日式风格 */}
        <section>
          {/* 日式模块标题 */}
          <div className="flex items-center justify-center mb-10">
            <div className="h-px w-12 bg-gray-300"></div>
            <div className="mx-3 px-6 py-2 border border-gray-200 text-center">
              <h2 className="text-lg font-medium text-gray-900">
                {language === "en" ? "Related News" : "関連ニュース"}
              </h2>
            </div>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {t.relatedNews.map((relatedId) => (
              <Link
                href={`/news/${relatedId}`}
                key={relatedId}
                className="block group"
              >
                <div className="bg-white border border-gray-100 p-5 relative group hover:border-blue-200 transition-colors">
                  {/* 顶部装饰线 */}
                  <div className="h-0.5 w-full bg-gray-100"></div>
                  <div className="h-0.5 w-0 bg-blue-400 absolute top-0 left-0 group-hover:w-full transition-all duration-500"></div>

                  <p className="text-xs text-gray-500 mb-2">
                    {newsData[relatedId][language].date}
                  </p>
                  <h3 className="text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-3 pb-2 border-b border-gray-50">
                    {newsData[relatedId][language].title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {newsData[relatedId][language].summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 底部装饰 */}
        <div className="flex items-center justify-center mt-16">
          <div className="h-px w-8 bg-gray-200"></div>
          <div className="mx-2">
            <div className="w-2 h-2 border border-gray-200 transform rotate-45"></div>
          </div>
          <div className="h-px w-8 bg-gray-200"></div>
        </div>
      </div>
    </main>
  );
}
