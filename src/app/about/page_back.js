"use client";

import { useLanguage } from "../../context/LanguageContext";
import Image from "next/image";
import Link from 'next/link';

const translations = {
  en: {
    title: "About Policy Innovation Consortium",
    subtitle:
      "Building a trinity innovation cycle integrating policy-technology-industry",

    // Institutional Positioning & Mission section
    institutionalTitle: "Institutional Positioning & Mission",
    name: "Name",
    nameContent: "Policy Innovation Consortium (PIC)",
    established: "Established",
    establishedContent: "2022, Tokyo",
    supported: "Supported by",
    supportedContent:
      "Japanese Cabinet Office, Ministry of Education, Culture, Sports, Science and Technology (MEXT), and Ministry of Economy, Trade and Industry (METI).",
    mission: "Mission",
    missionContent:
      "Build a trinity innovation cycle integrating policy-technology-industry to address Japan's core societal challenges:",
    challenge1: "Low birthrate and aging population",
    challenge2: "Carbon neutrality transition",
    challenge3: "Regional economic decline",
    coreFocus: "Core Focus",
    coreFocusContent:
      "Translate cutting-edge research from hubs like Tsukuba Science City and Kansai Science City into actionable policies and industrial solutions, advancing Japan's Science-Based Nation strategy.",

    // Leadership & Governance section
    leadershipTitle: "Leadership & Governance",
    chairperson: "Chairperson",
    chairpersonName: "Ryunosuke Takahashi",
    background: "Background",
    backgroundContent:
      "Former METI Director-General; PhD in Social Systems Engineering, Kyoto University; architect of the Society 5.0 strategy.",
    philosophy: "Philosophy",
    philosophyContent:
      "\"Policy innovation requires merging scientists' microscopes, entrepreneurs' telescopes, and policymakers' wide-angle lenses.\"",
    executiveCommittee: "Executive Committee",
    chiefScientist:
      "Chief Scientist: Hiromi (ex-RIKEN), led iPS cell ethics guidelines.",
    industryLiaison:
      "Industry Liaison: Masataka  (ex-Mitsui), drives technology-business-policy value loops.",

    // Operational DNA section
    operationalTitle: "Operational DNA",
    innovationTitle: "Japanese-Inspired Innovation",
    kaizenPolicy: "Kaizen Policy Iteration",
    kaizenContent:
      "Embed Toyota's continuous improvement into policy feedback systems.",
    chashitsu: "Chashitsu Dialogue",
    chashitsuContent:
      "Host Policy Dojos in Kyoto machiya townhouses to foster cross-sector collaboration.",
    regionalTitle: "Regional Revitalization",
    convenienceStore: "Convenience Store Policy Hubs",
    convenienceContent:
      "Partnered with Seven-Eleven Japan to deploy 20,000 Convenience Store Policy Hubs for real-time civic data collection.",
    railway: "Railway Sociology Initiative",
    railwayContent:
      "Work with JR East to transform stations into community revitalization hubs.",

    // Brand Identity section
    brandTitle: "Brand Identity",
    nameIdentity: "Name",
    nameIdentityContent:
      '"Consortium" reflects Japan\'s collective ethos (wa), while the English name signals global reach.',
    visualDesign: "Visual Design",
    visualDesignContent:
      "Logo blends circuit boards with traditional kamon patterns; website uses light-wafū aesthetics with interactive ukiyo-e-inspired policy databases.",

    // Value Proposition
    valueProposition: "PIC's Value Proposition",
    valuePropositionContent:
      "A hybrid think tank, innovation broker, and policy incubator driving Japan's societal transformation through syncretic solutions that bridge tradition and futurism.",
  },
  ja: {
    title: "ポリシーイノベーションコンソーシアムについて",
    subtitle:
      "政策・技術・産業を統合する三位一体のイノベーションサイクルの構築",

    // Institutional Positioning & Mission section
    institutionalTitle: "組織的位置づけと使命",
    name: "名称",
    nameContent: "ポリシーイノベーションコンソーシアム（PIC）",
    established: "設立",
    establishedContent: "2022年、東京",
    supported: "支援",
    supportedContent: "内閣府、文部科学省（MEXT）、経済産業省（METI）",
    mission: "使命",
    missionContent:
      "政策・技術・産業を統合した三位一体のイノベーションサイクルを構築し、日本の主要な社会的課題に対応する：",
    challenge1: "少子高齢化",
    challenge2: "カーボンニュートラルへの移行",
    challenge3: "地域経済の衰退",
    coreFocus: "中核的焦点",
    coreFocusContent:
      "筑波研究学園都市や関西文化学術研究都市などのハブから最先端の研究を実行可能な政策や産業ソリューションに変換し、日本の科学立国戦略を推進します。",

    // Leadership & Governance section
    leadershipTitle: "リーダーシップとガバナンス",
    chairperson: "理事長",
    chairpersonName: "高橋龍之介",
    background: "経歴",
    backgroundContent:
      "経済産業省元事務次官、京都大学社会システム工学博士、Society 5.0戦略の設計者",
    philosophy: "理念",
    philosophyContent:
      "「政策イノベーションには、科学者の顕微鏡、起業家の望遠鏡、政策立案者の広角レンズの融合が必要である」",
    executiveCommittee: "執行委員会",
    chiefScientist:
      "主席科学者：博美（元理化学研究所）、iPS細胞倫理ガイドラインを主導",
    industryLiaison:
      "産業連携担当：正隆（元三井物産）、技術・ビジネス・政策の価値循環を推進",

    // Operational DNA section
    operationalTitle: "運営DNA",
    innovationTitle: "日本発のイノベーション",
    kaizenPolicy: "カイゼン政策反復",
    kaizenContent: "トヨタの継続的改善を政策フィードバックシステムに組み込む",
    chashitsu: "茶室対話",
    chashitsuContent:
      "京都の町家で「政策道場」を主催し、分野横断的な協力を促進",
    regionalTitle: "地域再生",
    convenienceStore: "コンビニ政策ハブ",
    convenienceContent:
      "セブン-イレブン・ジャパンと提携し、リアルタイムの市民データ収集のために20,000のコンビニ政策ハブを展開",
    railway: "鉄道社会学イニシアチブ",
    railwayContent: "JR東日本と協力して駅をコミュニティ再生のハブに変革",

    // Brand Identity section
    brandTitle: "ブランドアイデンティティ",
    nameIdentity: "名称",
    nameIdentityContent:
      "「コンソーシアム」は日本の集合的精神（和）を反映し、英語名はグローバルな影響力を示しています",
    visualDesign: "ビジュアルデザイン",
    visualDesignContent:
      "ロゴは回路基板と伝統的な家紋パターンを融合し、ウェブサイトは浮世絵にインスピレーションを得たインタラクティブな政策データベースで軽和風の美学を使用",

    // Value Proposition
    valueProposition: "PICの価値提案",
    valuePropositionContent:
      "ハイブリッドシンクタンク、イノベーションブローカー、政策インキュベーターとして、伝統と未来主義を橋渡しする融合的ソリューションを通じて日本の社会変革を推進します",
  },
};

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-neutral">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="grid grid-rows-8 w-full h-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="border-b border-white/10 w-full"></div>
          ))}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <div className="mt-10 flex justify-center space-x-4">
            <a
              href="#institutional"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("institutional")
                  .scrollIntoView({ behavior: "smooth" });
                setActiveTab("institutional");
              }}
              className="px-6 py-3 bg-white text-primary rounded-md hover:bg-neutral transition duration-300"
            >
              {t.institutionalTitle}
            </a>
            <a
              href="#leadership"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("leadership")
                  .scrollIntoView({ behavior: "smooth" });
                setActiveTab("leadership");
              }}
              className="px-6 py-3 bg-white/20 text-white rounded-md hover:bg-white/30 transition duration-300"
            >
              {t.leadershipTitle}
            </a>
          </div>
        </div>

        {/* 浮动图形装饰 */}
        <div className="absolute top-20 left-10 w-20 h-20 md:w-32 md:h-32 rounded-full bg-secondary/20 animate-float1"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 md:w-24 md:h-24 rounded-full bg-accent/20 animate-float2"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-white/20 animate-float3"></div>
      </div>

      {/* 导航指示器 */}
      <div className="sticky top-16 z-20 bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar py-4 space-x-8">
            <button
              onClick={() => {
                document
                  .getElementById("institutional")
                  .scrollIntoView({ behavior: "smooth" });
                setActiveTab("institutional");
              }}
              className={`whitespace-nowrap font-medium transition-colors ${
                activeTab === "institutional"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500 hover:text-primary"
              }`}
            >
              {t.institutionalTitle}
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("leadership")
                  .scrollIntoView({ behavior: "smooth" });
                setActiveTab("leadership");
              }}
              className={`whitespace-nowrap font-medium transition-colors ${
                activeTab === "leadership"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500 hover:text-primary"
              }`}
            >
              {t.leadershipTitle}
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("operational")
                  .scrollIntoView({ behavior: "smooth" });
                setActiveTab("operational");
              }}
              className={`whitespace-nowrap font-medium transition-colors ${
                activeTab === "operational"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500 hover:text-primary"
              }`}
            >
              {t.operationalTitle}
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("brand")
                  .scrollIntoView({ behavior: "smooth" });
                setActiveTab("brand");
              }}
              className={`whitespace-nowrap font-medium transition-colors ${
                activeTab === "brand"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500 hover:text-primary"
              }`}
            >
              {t.brandTitle}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <BgPattern />

        <div id="institutional" className="bg-white rounded-lg shadow-lg p-8 mb-16 relative z-10">
          <div className="absolute -top-5 left-5 w-20 h-20 bg-primary/5 rounded-full filter blur-xl"></div>
          <div className="absolute -bottom-5 right-5 w-28 h-28 bg-secondary/5 rounded-full filter blur-xl"></div>

          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-primary">
              {t.institutionalTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
              className="space-y-8 transform transition-all duration-700 delay-100 ease-in-out
              {shouldAnimate('institutional') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}"
            >
              <div className="group hover:bg-neutral/50 p-4 rounded-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-secondary flex items-center">
                  <span className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center mr-2 group-hover:bg-secondary/20 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  {t.name}
                </h3>
                <p className="ml-10 group-hover:text-primary transition-colors">
                  {t.nameContent}
                </p>
              </div>

              <div className="group hover:bg-neutral/50 p-4 rounded-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-secondary flex items-center">
                  <span className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center mr-2 group-hover:bg-secondary/20 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  {t.established}
                </h3>
                <p className="ml-10 group-hover:text-primary transition-colors">
                  {t.establishedContent}
                </p>
              </div>

              <div className="group hover:bg-neutral/50 p-4 rounded-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-secondary flex items-center">
                  <span className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center mr-2 group-hover:bg-secondary/20 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>
                  {t.supported}
                </h3>
                <p className="ml-10 group-hover:text-primary transition-colors">
                  {t.supportedContent}
                </p>
              </div>
            </div>

            <div
              className="space-y-8 transform transition-all duration-700 delay-300 ease-in-out
              {shouldAnimate('institutional') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}"
            >
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-lg border border-primary/10">
                <h3 className="text-xl font-bold mb-4 text-secondary flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                      />
                    </svg>
                  </span>
                  {t.mission}
                </h3>
                <p className="mb-4">{t.missionContent}</p>
                <ul className="space-y-3">
                  {[t.challenge1, t.challenge2, t.challenge3].map(
                    (challenge, index) => (
                      <li key={index} className="flex items-start group">
                        <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-secondary/40 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 text-secondary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="group-hover:text-primary transition-colors">
                          {challenge}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-secondary/5 to-accent/5 p-6 rounded-lg border border-secondary/10">
                <h3 className="text-xl font-bold mb-2 text-secondary flex items-center">
                  <span className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </span>
                  {t.coreFocus}
                </h3>
                <p className="ml-10">{t.coreFocusContent}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership & Governance Section */}
        <div
          id="leadership"
          className="animate-on-scroll bg-white rounded-lg shadow-lg p-8 mb-16 relative z-10 transform transition-all duration-700
          {shouldAnimate('leadership') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full filter blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/5 rounded-full filter blur-xl"></div>

          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-secondary">
              {t.leadershipTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
              className="transform transition-all duration-700 delay-100 ease-in-out
              {shouldAnimate('leadership') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}"
            >
              <div className="relative h-96 mb-8 group overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/leadership.jpg"
                  alt="Leadership"
                  fill
                  className="object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {t.chairpersonName}
                  </h3>
                  <p className="text-white/80">{t.chairperson}</p>
                </div>
              </div>

              <div className="bg-neutral/30 rounded-lg p-6 transform transition hover:bg-neutral hover:-translate-y-1 duration-300">
                <h3 className="text-xl font-bold mb-4 text-secondary flex items-center">
                  <span className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>
                  {t.executiveCommittee}
                </h3>
                <div className="space-y-3 ml-10">
                  <div className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </span>
                    <p>{t.chiefScientist}</p>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <p>{t.industryLiaison}</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="transform transition-all duration-700 delay-300 ease-in-out
              {shouldAnimate('leadership') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}"
            >
              <div className="mb-8 bg-gradient-to-r from-primary/5 to-neutral p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-secondary flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  {t.background}
                </h3>
                <div className="ml-10 space-y-2">
                  {t.backgroundContent.split(";").map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                      </span>
                      <p>{item.trim()}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative bg-neutral/50 p-8 rounded-lg border border-secondary/10 overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-secondary/10 rounded-full"></div>
                <div className="absolute -left-4 -top-4 w-16 h-16 bg-primary/10 rounded-full"></div>

                <h3 className="text-xl font-bold mb-4 text-secondary relative z-10">
                  {t.philosophy}
                </h3>
                <blockquote className="relative z-10 text-lg italic text-gray-700 border-l-4 border-secondary pl-4 py-2 bg-white/50 rounded-r-lg shadow-sm">
                  {t.philosophyContent}
                </blockquote>

                <div className="mt-6 flex justify-end relative z-10">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-secondary">
                        {t.chairpersonName}
                      </p>
                      <p className="text-sm text-gray-600">
                        PIC {t.chairperson}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operational DNA Section */}
        <div
          id="operational"
          className="animate-on-scroll bg-white rounded-lg shadow-lg p-8 mb-16 relative z-10 transform transition-all duration-700
          {shouldAnimate('operational') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}"
        >
          <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/5 rounded-full filter blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/5 rounded-full filter blur-xl"></div>

          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-accent">
              {t.operationalTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
              className="transform transition-all duration-700 delay-100 ease-in-out
              {shouldAnimate('operational') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}"
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/10">
                  <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                    <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        />
                      </svg>
                    </span>
                    {t.innovationTitle}
                  </h3>

                  <div className="pl-4 border-l-2 border-primary/20 ml-3 mb-6 hover:border-primary hover:bg-primary/5 transition-colors rounded-r-lg p-3">
                    <h4 className="text-lg font-bold mb-2 text-primary flex items-center">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </span>
                      {t.kaizenPolicy}
                    </h4>
                    <p className="ml-8 text-gray-700">{t.kaizenContent}</p>
                  </div>

                  <div className="pl-4 border-l-2 border-primary/20 ml-3 hover:border-primary hover:bg-primary/5 transition-colors rounded-r-lg p-3">
                    <h4 className="text-lg font-bold mb-2 text-primary flex items-center">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </span>
                      {t.chashitsu}
                    </h4>
                    <p className="ml-8 text-gray-700">{t.chashitsuContent}</p>
                  </div>
                </div>
              </div>

              <div className="relative h-60 rounded-xl overflow-hidden group shadow-lg">
                <Image
                  src="/innovation.jpg"
                  alt="Japanese-Inspired Innovation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h4 className="text-lg font-bold">{t.innovationTitle}</h4>
                </div>
              </div>
            </div>

            <div
              className="transform transition-all duration-700 delay-300 ease-in-out
              {shouldAnimate('operational') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}"
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <div className="bg-gradient-to-r from-secondary/10 to-accent/10 p-6 rounded-xl border border-secondary/10">
                  <h3 className="text-2xl font-bold mb-6 text-secondary flex items-center">
                    <span className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>
                    {t.regionalTitle}
                  </h3>

                  <div className="pl-4 border-l-2 border-secondary/20 ml-3 mb-6 hover:border-secondary hover:bg-secondary/5 transition-colors rounded-r-lg p-3">
                    <h4 className="text-lg font-bold mb-2 text-secondary flex items-center">
                      <span className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-secondary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                      </span>
                      {t.convenienceStore}
                    </h4>
                    <p className="ml-8 text-gray-700">{t.convenienceContent}</p>
                  </div>

                  <div className="pl-4 border-l-2 border-secondary/20 ml-3 hover:border-secondary hover:bg-secondary/5 transition-colors rounded-r-lg p-3">
                    <h4 className="text-lg font-bold mb-2 text-secondary flex items-center">
                      <span className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-secondary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </span>
                      {t.railway}
                    </h4>
                    <p className="ml-8 text-gray-700">{t.railwayContent}</p>
                  </div>
                </div>
              </div>

              <div className="relative h-60 rounded-xl overflow-hidden group shadow-lg">
                <Image
                  src="/regional.jpg"
                  alt="Regional Revitalization"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h4 className="text-lg font-bold">{t.regionalTitle}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Identity Section */}
        <div
          id="brand"
          className="animate-on-scroll bg-white rounded-lg shadow-lg p-8 mb-12 relative z-10 transform transition-all duration-700
          {shouldAnimate('brand') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}"
        >
          <div className="absolute -top-10 right-20 w-40 h-40 bg-primary/5 rounded-full filter blur-xl"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-secondary/5 rounded-full filter blur-xl"></div>

          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-primary">{t.brandTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
              className="transform transition-all duration-700 delay-100 ease-in-out
              {shouldAnimate('brand') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}"
            >
              <div className="mb-8 bg-gradient-to-br from-white to-neutral p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  {t.nameIdentity}
                </h3>

                <div className="pl-4 border-l-2 border-primary/20 ml-6 py-2">
                  <p className="text-gray-700">{t.nameIdentityContent}</p>
                </div>

                <div className="flex justify-center my-6">
                  <div className="text-2xl md:text-3xl font-bold text-primary px-6 py-3 border-2 border-primary/20 rounded-lg inline-block transform transition-transform hover:scale-105 duration-300">
                    Policy Innovation{" "}
                    <span className="text-secondary">Consortium</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-neutral p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  {t.visualDesign}
                </h3>

                <div className="pl-4 border-l-2 border-primary/20 ml-6 py-2">
                  <p className="text-gray-700">{t.visualDesignContent}</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-full bg-primary/30"></div>
                  </div>
                  <div className="w-20 h-20 bg-secondary/10 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-full bg-secondary/30"></div>
                  </div>
                  <div className="w-20 h-20 bg-accent/10 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-full bg-accent/30"></div>
                  </div>
                  <div className="w-20 h-20 bg-neutral rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-full bg-gray-400/30"></div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="transform transition-all duration-700 delay-300 ease-in-out
              {shouldAnimate('brand') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}"
            >
              <div className="bg-gradient-to-tr from-primary/5 via-white to-secondary/5 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto hover:shadow-xl transition-shadow duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary/5 rounded-full"></div>
                <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-secondary/5 rounded-full"></div>

                <div className="flex justify-center mb-8 relative z-10">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-lg opacity-30 group-hover:opacity-70 transition-opacity duration-700"></div>
                    <Image
                      src="/logo.png"
                      alt="PIC Logo"
                      width={160}
                      height={160}
                      className="rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300 relative z-10"
                    />
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-inner mb-6 relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-center text-primary">
                    {t.valueProposition}
                  </h3>
                  <p className="text-center text-gray-700">
                    {t.valuePropositionContent}
                  </p>
                </div>

                <div className="flex justify-center relative z-10">
                  <div className="flex flex-col items-center">
                    <div className="flex space-x-2 mb-2">
                      <span className="inline-block w-3 h-3 rounded-full bg-primary animate-pulse"></span>
                      <span className="inline-block w-3 h-3 rounded-full bg-secondary animate-pulse delay-150"></span>
                      <span className="inline-block w-3 h-3 rounded-full bg-accent animate-pulse delay-300"></span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Policy - Technology - Industry
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
