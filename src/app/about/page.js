"use client";

import { useLanguage } from "../../context/LanguageContext";
import Image from "next/image";
import Link from "next/link";

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
      "Supported by collaborative partnerships with Japanese public institutions",
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
    // background: "Background",
    // backgroundContent:
    //   "Former METI Director-General; PhD in Social Systems Engineering, Kyoto University; architect of the Society 5.0 strategy.",
    philosophy: "Philosophy",
    philosophyContent:
      "\"Policy innovation requires merging scientists' microscopes, entrepreneurs' telescopes, and policymakers' wide-angle lenses.\"",
    executiveCommittee: "Executive Committee",
    chiefScientist:
      "Chief Scientist: Hiromi Nakamura (ex-RIKEN), led iPS cell ethics guidelines.",
    industryLiaison:
      "Industry Liaison: Masataka Ito (ex-Mitsui), drives technology-business-policy value loops.",

    // Operational DNA section
    operationalTitle: "Operational DNA",
    innovationTitle: "Japanese-Inspired Innovation",
    kaizenPolicy: "Kaizen Policy Iteration",
    kaizenPolicyContent:
      "Applies continuous improvement principles to policy design, with small-scale implementations, rigorous measurement, and iterative refinement.",
    nemawashiMethod: "Nemawashi Stakeholder Engagement",
    nemawashiMethodContent:
      "Builds consensus through careful groundwork and relationship cultivation across government, academic, and industry sectors.",
    regionalTitle: "Regional Revitalization Focus",
    satoyamaModel: "Satoyama Balanced Development",
    satoyamaModelContent:
      "Promotes harmonious urban-rural integration, emphasizing sustainable economic growth with environmental protection.",
    monosukulturion: "Monozukuri Tradition in Policy Implementation",
    monosukulturionContent:
      "Brings craftsmanship values of precision, quality, and dedication to policy execution processes.",

    // Brand Identity section
    brandTitle: "Brand Identity",
    brandName: "Brand Name",
    brandNameContent:
      "Policy Innovation Consortium (PIC) represents our commitment to collaborative policy reinvention for societal impact.",
    visualDesign: "Visual Design",
    visualDesignContent:
      "Our logo combines traditional mizuhiki knot patterns with circuit board motifs, symbolizing the connection between Japanese heritage and technological progress.",

    // Value Proposition
    valueProposition: "Value Proposition",
    valuePropositionContent:
      "As a hybrid think tank, innovation broker, and policy incubator, we drive Japanese societal transformation through fusion solutions that bridge tradition and futurism.",
  },
  ja: {
    title: "ポリシーイノベーションコンソーシアムについて",
    subtitle:
      "政策・技術・産業を統合する三位一体のイノベーションサイクルの構築",

    // Institutional Positioning & Mission section
    institutionalTitle: "機関の位置づけとミッション",
    name: "名称",
    nameContent: "政策イノベーションコンソーシアム（PIC）",
    established: "設立",
    establishedContent: "2022年、東京",
    supported: "支援",
    supportedContent: "日本の公共機関との協力提携による支援",
    mission: "ミッション",
    missionContent:
      "政策・技術・産業を統合する三位一体のイノベーションサイクルを構築し、日本の主要な社会課題に対応する：",
    challenge1: "少子高齢化",
    challenge2: "カーボンニュートラル移行",
    challenge3: "地域経済の衰退",
    coreFocus: "中核的焦点",
    coreFocusContent:
      "つくばサイエンスシティや関西文化学術研究都市などのハブから最先端の研究を実用的な政策や産業ソリューションに変換し、日本の科学立国戦略を推進します。",

    // Leadership & Governance section
    leadershipTitle: "リーダーシップとガバナンス",
    chairperson: "議長",
    chairpersonName: "高橋龍之介",
    // background: "経歴",
    // backgroundContent:
    //   "元METI事務次官；京都大学社会システム工学博士；Society 5.0戦略の設計者。",
    philosophy: "哲学",
    philosophyContent:
      "「政策イノベーションには、科学者の顕微鏡、起業家の望遠鏡、政策立案者の広角レンズを融合させる必要がある」",
    executiveCommittee: "執行委員会",
    chiefScientist:
      "主任科学者：中村ひろみ（元RIKEN）、iPS細胞倫理ガイドラインを主導。",
    industryLiaison:
      "産業連携：伊藤正高（元三井）、技術-ビジネス-政策の価値ループを推進。",

    // Operational DNA section
    operationalTitle: "運営のDNA",
    innovationTitle: "日本発のイノベーション",
    kaizenPolicy: "改善政策反復",
    kaizenPolicyContent:
      "政策設計に継続的改善の原則を適用し、小規模な実装、厳密な測定、反復的な改良を行います。",
    nemawashiMethod: "根回しステークホルダーエンゲージメント",
    nemawashiMethodContent:
      "政府、学術、産業部門全体で丁寧な下準備と関係構築を通じてコンセンサスを形成します。",
    regionalTitle: "地域活性化の焦点",
    satoyamaModel: "里山バランス開発",
    satoyamaModelContent:
      "環境保護と持続可能な経済成長を重視し、調和のとれた都市・農村統合を促進します。",
    monosukulturion: "政策実施におけるものづくりの伝統",
    monosukulturionContent:
      "政策実行プロセスに精度、品質、献身のものづくり価値観をもたらします。",

    // Brand Identity section
    brandTitle: "ブランドアイデンティティ",
    brandName: "ブランド名",
    brandNameContent:
      "政策イノベーションコンソーシアム（PIC）は、社会的影響のための協調的な政策刷新への私たちのコミットメントを表しています。",
    visualDesign: "ビジュアルデザイン",
    visualDesignContent:
      "当社のロゴは、伝統的な水引の結び目パターンと回路基板のモチーフを組み合わせ、日本の伝統と技術進歩の間の接続を象徴しています。",

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
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Hero Section - 日式风格头部 */}
      <div className="bg-white text-gray-900 pt-16 pb-24 relative overflow-hidden">
        {/* 纹理背景 - 粗线条纹理 */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/patterns/jp-pattern.png')] bg-repeat opacity-20"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* 日式横幅装饰线 */}
          <div className="flex items-center justify-center mb-10">
            <div className="h-px w-16 bg-gray-300"></div>
            <div className="mx-4">
              <div className="w-3 h-3 border-2 border-primary transform rotate-45"></div>
            </div>
            <div className="h-px w-16 bg-gray-300"></div>
          </div>

          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight text-gray-900 inline-block relative">
              {t.title}
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary/30"></span>
            </h1>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-gray-700 font-light">
              {t.subtitle}
            </p>
          </div>

          {/* 日式装饰元素 */}
          <div className="flex justify-center mt-8 mb-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/logo.png"
                  alt="PIC Logo"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full text-xs font-medium text-primary border border-gray-100 shadow-sm">
                {language === "en" ? "Since 2022" : "2022年設立"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 日式导航菜单 */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-6 mb-16 relative z-20">
        <div className="bg-white shadow-sm border border-gray-100 flex justify-center">
          <div className="flex flex-wrap justify-center divide-x divide-gray-100">
            <Link
              href="#institutional"
              className="px-6 py-4 text-sm hover:bg-gray-50 transition duration-300 relative group"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary group-hover:w-1/2 transition-all duration-300"></div>
              <span className="font-medium text-gray-900">
                {t.institutionalTitle}
              </span>
            </Link>
            <Link
              href="#leadership"
              className="px-6 py-4 text-sm hover:bg-gray-50 transition duration-300 relative group"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary group-hover:w-1/2 transition-all duration-300"></div>
              <span className="font-medium text-gray-900">
                {t.leadershipTitle}
              </span>
            </Link>
            <Link
              href="#operational"
              className="px-6 py-4 text-sm hover:bg-gray-50 transition duration-300 relative group"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary group-hover:w-1/2 transition-all duration-300"></div>
              <span className="font-medium text-gray-900">
                {t.operationalTitle}
              </span>
            </Link>
            <Link
              href="#brand"
              className="px-6 py-4 text-sm hover:bg-gray-50 transition duration-300 relative group"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary group-hover:w-1/2 transition-all duration-300"></div>
              <span className="font-medium text-gray-900">{t.brandTitle}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content - 日式风格内容区 */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative">
        {/* 简洁背景装饰 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[url('/patterns/jp-dots.png')] bg-repeat opacity-5"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[url('/patterns/jp-dots.png')] bg-repeat opacity-5"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 border border-gray-100 rounded-full opacity-10"></div>
        </div>

        {/* Institutional Positioning & Mission - 机构定位与使命 */}
        <section id="institutional" className="mb-24 relative">
          {/* 日式装饰元素 */}
          <div className="absolute -left-4 top-10 w-16 h-16 bg-gray-100 rounded-sm transform rotate-45 opacity-20"></div>
          <div className="absolute -right-4 bottom-10 w-16 h-16 bg-gray-100 rounded-sm transform rotate-45 opacity-20"></div>

          {/* 日式标题装饰 */}
          <div className="flex items-center justify-center mb-10">
            <div className="h-px w-12 bg-gray-300"></div>
            <div className="mx-3 px-6 py-2 border border-gray-200 text-center">
              <h2 className="text-xl font-medium text-gray-900">
                {t.institutionalTitle}
              </h2>
            </div>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>

          <div className="bg-white overflow-hidden border border-gray-100 relative">
            {/* 顶部装饰线 */}
            <div className="h-1 bg-gray-200"></div>
            <div className="absolute top-0 left-0 w-1/3 h-1 bg-primary"></div>

            <div className="p-8 relative">
              {/* 背景水印 */}
              <div className="absolute right-8 top-8 opacity-5 pointer-events-none">
                <Image
                  src="/logo.png"
                  alt="PIC Logo Watermark"
                  width={200}
                  height={200}
                  className="opacity-50"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  {/* 日式卡片设计 - 名称 */}
                  <div className="bg-white border border-gray-100 relative group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-70"></div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-sm mr-3">
                          <span className="text-primary text-lg font-light">
                            N
                          </span>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {t.name}
                        </h3>
                      </div>
                      <div className="pl-11">
                        <p className="text-gray-700 leading-relaxed">
                          {t.nameContent}
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>

                  {/* 日式卡片设计 - 成立时间 */}
                  <div className="bg-white border border-gray-100 relative group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-70"></div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-sm mr-3">
                          <span className="text-primary text-lg font-light">
                            E
                          </span>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {t.established}
                        </h3>
                      </div>
                      <div className="pl-11">
                        <p className="text-gray-700 leading-relaxed">
                          {t.establishedContent}
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>

                  {/* 日式卡片设计 - 支持机构 */}
                  <div className="bg-white border border-gray-100 relative group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-70"></div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-sm mr-3">
                          <span className="text-primary text-lg font-light">
                            S
                          </span>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {t.supported}
                        </h3>
                      </div>
                      <div className="pl-11">
                        <p className="text-gray-700 leading-relaxed">
                          {t.supportedContent}
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* 日式卡片设计 - 使命 */}
                  <div className="bg-white border border-gray-100 relative group">
                    <div className="absolute top-0 right-0 w-1 h-full bg-primary opacity-70"></div>
                    <div className="p-6">
                      <div className="flex items-center mb-4 justify-between">
                        <h3 className="text-lg font-medium text-gray-900">
                          {t.mission}
                        </h3>
                        <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-sm">
                          <span className="text-primary text-lg font-light">
                            M
                          </span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {t.missionContent}
                        </p>

                        {/* 日式列表设计 */}
                        <div className="border-t border-b border-gray-100 py-4 my-4">
                          <div className="flex items-center mb-3">
                            <div className="w-1.5 h-1.5 bg-primary mr-3"></div>
                            <span className="text-gray-800">
                              {t.challenge1}
                            </span>
                          </div>
                          <div className="flex items-center mb-3">
                            <div className="w-1.5 h-1.5 bg-primary mr-3"></div>
                            <span className="text-gray-800">
                              {t.challenge2}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary mr-3"></div>
                            <span className="text-gray-800">
                              {t.challenge3}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>

                  {/* 日式卡片设计 - 核心焦点 */}
                  <div className="bg-white border border-gray-100 relative group">
                    <div className="absolute top-0 right-0 w-1 h-full bg-primary opacity-70"></div>
                    <div className="p-6">
                      <div className="flex items-center mb-4 justify-between">
                        <h3 className="text-lg font-medium text-gray-900">
                          {t.coreFocus}
                        </h3>
                        <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-sm">
                          <span className="text-primary text-lg font-light">
                            C
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="relative">
                          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-100"></div>
                          <div className="pl-6">
                            <p className="text-gray-700 leading-relaxed">
                              {t.coreFocusContent}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Governance */}
        <section id="leadership" className="mb-20 relative">
          <div className="absolute -right-10 top-20 w-20 h-20 bg-secondary/5 rounded-full filter blur-xl animate-pulse delay-300"></div>
          <div className="absolute -left-10 bottom-20 w-24 h-24 bg-primary/5 rounded-full filter blur-xl animate-pulse"></div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl border border-gray-100">
            <div className="h-2 bg-gradient-to-r from-secondary via-accent to-primary"></div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-8 text-primary inline-block relative">
                {t.leadershipTitle}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded"></span>
              </h2>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10"></div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold mb-3 text-primary/90 flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {t.chairperson}
                      </h3>
                      <p className="font-medium mb-4 text-xl text-gray-800">
                        {t.chairpersonName}
                      </p>

                      <h3 className="text-lg font-semibold mb-2 text-primary/80 flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary/80 rounded-full mr-2"></span>
                        {t.background}
                      </h3>
                      <p className="mb-4 text-gray-700">
                        {t.backgroundContent}
                      </p>

                      <h3 className="text-lg font-semibold mb-2 text-primary/80 flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary/80 rounded-full mr-2"></span>
                        {t.philosophy}
                      </h3>
                      <p className="italic text-gray-700 border-l-4 border-primary/20 pl-4 py-1">
                        {t.philosophyContent}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-gray-50 rounded-lg p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md relative overflow-hidden h-full">
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mb-16"></div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold mb-5 text-primary/90 flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {t.executiveCommittee}
                      </h3>

                      <div className="space-y-5">
                        <div className="p-4 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm">
                          <p className="font-medium text-gray-800">
                            {t.chiefScientist}
                          </p>
                        </div>

                        <div className="p-4 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm">
                          <p className="font-medium text-gray-800">
                            {t.industryLiaison}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operational DNA */}
        <section id="operational" className="mb-20 relative">
          <div className="absolute -left-10 top-20 w-28 h-28 bg-accent/5 rounded-full filter blur-xl animate-pulse"></div>
          <div className="absolute right-10 bottom-20 w-32 h-32 bg-primary/5 rounded-full filter blur-xl animate-pulse delay-150"></div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl border border-gray-100">
            <div className="h-2 bg-gradient-to-r from-accent via-primary to-secondary"></div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-8 text-primary inline-block relative">
                {t.operationalTitle}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded"></span>
              </h2>

              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-semibold mb-5 text-primary/90 pl-2 border-l-4 border-primary">
                    {t.innovationTitle}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md overflow-hidden">
                      <div className="h-1 bg-blue-500"></div>
                      <div className="p-5">
                        <h4 className="text-lg font-medium mb-3 text-blue-700 flex items-center">
                          <span className="inline-block w-3 h-3 rounded-full bg-blue-500/60 mr-2"></span>
                          {t.kaizenPolicy}
                        </h4>
                        <p className="text-gray-700">{t.kaizenPolicyContent}</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md overflow-hidden">
                      <div className="h-1 bg-purple-500"></div>
                      <div className="p-5">
                        <h4 className="text-lg font-medium mb-3 text-purple-700 flex items-center">
                          <span className="inline-block w-3 h-3 rounded-full bg-purple-500/60 mr-2"></span>
                          {t.nemawashiMethod}
                        </h4>
                        <p className="text-gray-700">
                          {t.nemawashiMethodContent}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-5 text-primary/90 pl-2 border-l-4 border-primary">
                    {t.regionalTitle}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md overflow-hidden">
                      <div className="h-1 bg-green-500"></div>
                      <div className="p-5">
                        <h4 className="text-lg font-medium mb-3 text-green-700 flex items-center">
                          <span className="inline-block w-3 h-3 rounded-full bg-green-500/60 mr-2"></span>
                          {t.satoyamaModel}
                        </h4>
                        <p className="text-gray-700">
                          {t.satoyamaModelContent}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md overflow-hidden">
                      <div className="h-1 bg-orange-500"></div>
                      <div className="p-5">
                        <h4 className="text-lg font-medium mb-3 text-orange-700 flex items-center">
                          <span className="inline-block w-3 h-3 rounded-full bg-orange-500/60 mr-2"></span>
                          {t.monosukulturion}
                        </h4>
                        <p className="text-gray-700">
                          {t.monosukulturionContent}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Identity */}
        <section id="brand" className="mb-16 relative">
          <div className="absolute left-20 top-10 w-24 h-24 bg-secondary/5 rounded-full filter blur-xl animate-pulse delay-300"></div>
          <div className="absolute right-20 bottom-10 w-20 h-20 bg-primary/5 rounded-full filter blur-xl animate-pulse"></div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl border border-gray-100">
            <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-8 text-primary inline-block relative">
                {t.brandTitle}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded"></span>
              </h2>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div className="bg-gray-50 rounded-lg p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md relative">
                    <div className="w-16 h-16 rounded-full bg-primary/10 absolute -top-5 -left-5 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-primary/20"></div>
                    </div>

                    <h3 className="text-xl font-semibold mb-4 text-primary/90 pl-2 border-l-4 border-primary">
                      {t.brandName}
                    </h3>
                    <p className="text-gray-700 mb-4">{t.brandNameContent}</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md relative">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 absolute -top-5 -right-5 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-secondary/20"></div>
                    </div>

                    <h3 className="text-xl font-semibold mb-4 text-primary/90 pl-2 border-l-4 border-secondary">
                      {t.visualDesign}
                    </h3>
                    <p className="text-gray-700">{t.visualDesignContent}</p>
                  </div>
                </div>

                <div>
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md relative overflow-hidden">
                    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/10 rounded-full"></div>
                    <div className="absolute top-10 left-10 w-20 h-20 bg-secondary/10 rounded-full filter blur-xl"></div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-5 text-primary">
                        {t.valueProposition}
                      </h3>
                      <div className="p-5 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                        <p className="text-gray-700 leading-relaxed">
                          {t.valuePropositionContent}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
