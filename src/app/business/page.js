"use client";

import { useLanguage } from "../../context/LanguageContext";
import Image from "next/image";
import Link from "next/link";

const translations = {
  en: {
    title: "Business Modules",
    subtitle:
      "Strategic integration of policy innovation, technology transfer, and industry collaboration",

    // 政策设计与影响力模块
    policyDesign: {
      title: "Policy Design & Impact",
      description:
        "Transforming research insights into actionable policy frameworks that drive societal innovation",
      items: [
        {
          title: "Regulatory Sandbox Design",
          description:
            "Creating experimental policy environments that enable innovation while maintaining appropriate safeguards",
          points: [
            "Collaborative framework development with government agencies",
            "Risk assessment and mitigation strategies",
            "Implementation roadmaps with measurable outcomes",
          ],
        },
        {
          title: "Policy Research & White Papers",
          description:
            "Producing evidence-based policy recommendations through rigorous research methodologies",
          points: [
            "Cross-disciplinary research teams tackling complex societal challenges",
            "Integration of quantitative and qualitative data analysis",
            "Published in both academic and policy-oriented publications",
          ],
        },
        {
          title: "Stakeholder Engagement",
          description:
            "Facilitating collaborative dialogues between government, industry, and civil society",
          points: [
            "Structured consultation processes with diverse stakeholder groups",
            "Transparent documentation of competing interests and perspectives",
            "Consensus-building workshops using Japanese nemawashi principles",
          ],
        },
      ],
    },

    // 协作与生态系统模块
    collaboration: {
      title: "Collaboration & Ecosystems",
      description:
        "Building integrated networks that connect policy makers, researchers, businesses, and communities",
      items: [
        {
          title: "Regional Innovation Councils",
          description:
            "Establishing governance structures that coordinate innovation activities across prefectures",
          points: [
            "Quarterly council meetings with rotating leadership",
            "Shared resource allocation and project prioritization",
            "Cross-regional knowledge transfer protocols",
          ],
        },
        {
          title: "University-Industry Linkages",
          description:
            "Creating sustainable partnerships between academic institutions and private sector organizations",
          points: [
            "Joint research and development initiatives",
            "Talent exchange programs and internship pathways",
            "Intellectual property frameworks that benefit all parties",
          ],
        },
        {
          title: "International Partnership Network",
          description:
            "Connecting Japanese innovation ecosystems with global partners and resources",
          points: [
            "Strategic alliances with innovation hubs in Europe, North America, and Asia",
            "Bilateral knowledge exchange programs",
            "Joint funding mechanisms for cross-border initiatives",
          ],
        },
      ],
    },

    // 创新中心与基础设施模块
    innovationHub: {
      title: "Innovation Hubs & Infrastructure",
      description:
        "Developing physical and digital spaces that catalyze innovation through co-location and resource sharing",
      items: [
        {
          title: "Smart City Living Labs",
          description:
            "Urban testbeds that allow for real-world experimentation with emerging technologies and policies",
          points: [
            "Integrated data collection and analysis platforms",
            "Citizen engagement through participatory design",
            "Scalable solutions for nationwide implementation",
          ],
        },
        {
          title: "Rural Revitalization Centers",
          description:
            "Innovation spaces in non-urban areas that address unique regional challenges",
          points: [
            "Focus on agriculture technology, tourism, and traditional crafts",
            "Local knowledge preservation and modernization",
            "Creation of sustainable economic models for declining populations",
          ],
        },
        {
          title: "Digital Collaboration Platform",
          description:
            "Custom-developed software infrastructure that enables seamless collaboration regardless of location",
          points: [
            "Secure data sharing with granular permission controls",
            "Project management tools with Japanese business practices embedded",
            "Integration with government and academic research databases",
          ],
        },
      ],
    },

    cta: "Collaborate with us",
    contactButton: "Contact our team",
  },
  ja: {
    title: "ビジネスモジュール",
    subtitle: "政策イノベーション、技術移転、産業協力の戦略的統合",

    // 政策設計と影響力モジュール
    policyDesign: {
      title: "政策設計と影響力",
      description:
        "研究の洞察を社会革新を推進する実行可能な政策フレームワークに変換",
      items: [
        {
          title: "規制サンドボックス設計",
          description:
            "適切な保護措置を維持しながらイノベーションを可能にする実験的な政策環境の創出",
          points: [
            "政府機関との協力的なフレームワーク開発",
            "リスク評価と軽減戦略",
            "測定可能な成果を伴う実施ロードマップ",
          ],
        },
        {
          title: "政策研究とホワイトペーパー",
          description: "厳格な研究方法論を通じた証拠に基づく政策提言の作成",
          points: [
            "複雑な社会的課題に取り組む学際的研究チーム",
            "定量的および定性的データ分析の統合",
            "学術および政策志向の出版物の両方で発表",
          ],
        },
        {
          title: "ステークホルダーエンゲージメント",
          description: "政府、産業、市民社会間の協力的対話の促進",
          points: [
            "多様なステークホルダーグループとの構造化された協議プロセス",
            "競合する利益と視点の透明な文書化",
            "日本の根回し原則を用いたコンセンサス構築ワークショップ",
          ],
        },
      ],
    },

    // 協力とエコシステムモジュール
    collaboration: {
      title: "協力とエコシステム",
      description:
        "政策立案者、研究者、企業、コミュニティを結ぶ統合ネットワークの構築",
      items: [
        {
          title: "地域イノベーション評議会",
          description:
            "都道府県全体のイノベーション活動を調整するガバナンス構造の確立",
          points: [
            "交代制リーダーシップによる四半期ごとの評議会会議",
            "共有リソース配分とプロジェクト優先順位付け",
            "地域間知識移転プロトコル",
          ],
        },
        {
          title: "大学-産業連携",
          description:
            "学術機関と民間部門組織間の持続可能なパートナーシップの創出",
          points: [
            "共同研究開発イニシアチブ",
            "人材交流プログラムとインターンシップパス",
            "すべての関係者に利益をもたらす知的財産フレームワーク",
          ],
        },
        {
          title: "国際パートナーシップネットワーク",
          description:
            "日本のイノベーションエコシステムをグローバルパートナーやリソースと接続",
          points: [
            "欧州、北米、アジアのイノベーションハブとの戦略的提携",
            "二国間知識交換プログラム",
            "国境を越えたイニシアチブのための共同資金調達メカニズム",
          ],
        },
      ],
    },

    // イノベーションハブとインフラストラクチャモジュール
    innovationHub: {
      title: "イノベーションハブとインフラストラクチャ",
      description:
        "共同設置とリソース共有を通じてイノベーションを促進する物理的およびデジタル空間の開発",
      items: [
        {
          title: "スマートシティリビングラボ",
          description:
            "新興技術や政策の実世界での実験を可能にする都市テストベッド",
          points: [
            "統合データ収集および分析プラットフォーム",
            "参加型設計を通じた市民参加",
            "全国実施のためのスケーラブルなソリューション",
          ],
        },
        {
          title: "地方活性化センター",
          description:
            "非都市部における独自の地域課題に対応するイノベーション空間",
          points: [
            "農業技術、観光、伝統工芸に焦点",
            "地域知識の保存と近代化",
            "人口減少地域のための持続可能な経済モデルの創出",
          ],
        },
        {
          title: "デジタル協力プラットフォーム",
          description:
            "場所に関係なくシームレスな協力を可能にするカスタム開発されたソフトウェアインフラ",
          points: [
            "詳細な許可制御によるセキュアなデータ共有",
            "日本のビジネス慣行を組み込んだプロジェクト管理ツール",
            "政府および学術研究データベースとの統合",
          ],
        },
      ],
    },
    cta: "私たちと協力する",
    contactButton: "チームに連絡する",
  },
};

export default function Business() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* 日式风格头部 */}
      <div className="bg-white text-gray-900 pt-16 pb-20 relative overflow-hidden">
        {/* 精致线条装饰 */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        
        {/* 背景纹理 */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/patterns/jp-pattern.png')] bg-repeat opacity-20"></div>
          <div className="absolute top-20 right-20 w-40 h-40 border border-gray-200 rounded-full opacity-30"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 border border-gray-200 rounded-full opacity-30"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* 日式横幅装饰线 */}
          <div className="flex items-center justify-center mb-10">
            <div className="h-px w-16 bg-gray-300"></div>
            <div className="mx-4">
              <div className="w-3 h-3 border-2 border-gray-400 transform rotate-45"></div>
            </div>
            <div className="h-px w-16 bg-gray-300"></div>
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight text-gray-900 inline-block relative">
              {t.title}
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-200"></span>
            </h1>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-gray-700 font-light">
              {t.subtitle}
            </p>
          </div>
          
          {/* 图标导航 */}
          <div className="flex justify-center mt-12 space-x-16">
            <a href="#policy-design" className="group text-center">
              <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 group-hover:border-blue-100 transition-all duration-300">
                <div className="w-8 h-8 text-blue-500 opacity-70">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
              </div>
              <p className="mt-3 text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors duration-300">{t.policyDesign.title}</p>
            </a>
            
            <a href="#collaboration" className="group text-center">
              <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 group-hover:border-red-100 transition-all duration-300">
                <div className="w-8 h-8 text-red-500 opacity-70">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
              <p className="mt-3 text-sm font-medium text-gray-600 group-hover:text-red-600 transition-colors duration-300">{t.collaboration.title}</p>
            </a>
            
            <a href="#innovation-hub" className="group text-center">
              <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 group-hover:border-purple-100 transition-all duration-300">
                <div className="w-8 h-8 text-purple-500 opacity-70">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
              </div>
              <p className="mt-3 text-sm font-medium text-gray-600 group-hover:text-purple-600 transition-colors duration-300">{t.innovationHub.title}</p>
            </a>
          </div>
        </div>
      </div>

      {/* 日式内容区 */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-20 relative">
        {/* 简洁背景装饰 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[url('/patterns/jp-dots.png')] bg-repeat opacity-5"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[url('/patterns/jp-dots.png')] bg-repeat opacity-5"></div>
        </div>

        {/* Policy Design & Impact Module */}
        <section id="policy-design" className="mb-24 relative">
          {/* 日式模块标题 */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-12 bg-gray-300"></div>
            <div className="mx-3 px-6 py-2 border border-gray-200 text-center">
              <h2 className="text-xl font-medium text-gray-900">{t.policyDesign.title}</h2>
            </div>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          
          {/* 模块描述 */}
          <div className="text-center mb-12">
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t.policyDesign.description}
            </p>
          </div>
          
          {/* 日式卡片容器 */}
          <div className="grid md:grid-cols-3 gap-6">
            {t.policyDesign.items.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 relative group overflow-hidden"
              >
                {/* 顶部装饰线 */}
                <div className="h-1 w-full bg-gray-100"></div>
                <div className="h-1 w-1/3 bg-blue-400 absolute top-0 left-0"></div>
                
                <div className="p-6">
                  {/* 模块编号 */}
                  <div className="absolute top-4 right-4 opacity-10 text-5xl font-thin text-blue-400">
                    {index + 1}
                  </div>
                  
                  {/* 模块标题 */}
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-sm mr-3">
                      <span className="text-blue-500 text-lg font-light">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                  </div>
                  
                  {/* 模块描述 */}
                  <div className="mb-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  
                  {/* 要点列表 */}
                  <div className="border-t border-gray-100 pt-4">
                    {item.points.map((point, i) => (
                      <div key={i} className="flex items-start mb-3 last:mb-0">
                        <div className="w-1.5 h-1.5 bg-blue-400 mt-1.5 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* 悬停效果线 */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Collaboration & Ecosystems Module */}
        <section id="collaboration" className="mb-24 relative">
          {/* 日式装饰元素 */}
          <div className="absolute right-0 top-1/4 w-16 h-16 border border-gray-100 transform rotate-45 opacity-20"></div>
          <div className="absolute left-0 bottom-1/4 w-16 h-16 border border-gray-100 transform rotate-45 opacity-20"></div>
          
          {/* 日式模块标题 */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-12 bg-gray-300"></div>
            <div className="mx-3 px-6 py-2 border border-gray-200 text-center">
              <h2 className="text-xl font-medium text-gray-900">{t.collaboration.title}</h2>
            </div>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          
          {/* 模块描述 */}
          <div className="text-center mb-12">
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t.collaboration.description}
            </p>
          </div>
          
          {/* 日式卡片容器 - 水平布局 */}
          <div className="space-y-6">
            {t.collaboration.items.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 relative group overflow-hidden"
              >
                {/* 侧边装饰线 */}
                <div className="absolute top-0 right-0 w-1 h-full bg-red-400 opacity-70"></div>
                
                <div className="p-6">
                  <div className="flex flex-col md:flex-row">
                    {/* 左侧标题区 */}
                    <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6 md:border-r md:border-gray-100">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex items-center justify-center bg-red-50 rounded-sm mr-3">
                          <span className="text-red-500 text-xl font-light">{index + 1}</span>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                      </div>
                      
                      <div className="mt-4 pl-13">
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* 右侧内容区 */}
                    <div className="md:w-2/3 md:pl-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {item.points.map((point, i) => (
                          <div key={i} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-red-400 mt-1.5 mr-3 flex-shrink-0"></div>
                            <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* 悬停效果线 */}
                  <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Innovation Hubs & Infrastructure Module */}
        <section id="innovation-hub" className="mb-24 relative">
          {/* 日式装饰元素 */}
          <div className="absolute left-1/4 top-0 w-40 h-40 border border-gray-100 rounded-full opacity-10"></div>
          <div className="absolute right-1/4 bottom-0 w-40 h-40 border border-gray-100 rounded-full opacity-10"></div>
          
          {/* 日式模块标题 */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-12 bg-gray-300"></div>
            <div className="mx-3 px-6 py-2 border border-gray-200 text-center">
              <h2 className="text-xl font-medium text-gray-900">{t.innovationHub.title}</h2>
            </div>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          
          {/* 模块描述 */}
          <div className="text-center mb-12">
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t.innovationHub.description}
            </p>
          </div>
          
          {/* 日式卡片容器 - 网格布局带图片 */}
          <div className="grid md:grid-cols-3 gap-8">
            {t.innovationHub.items.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 relative group overflow-hidden"
              >
                {/* 顶部图案区 */}
                <div className="h-40 bg-gray-50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl font-thin text-purple-200 opacity-30">{index + 1}</div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-purple-600 rounded-sm border border-purple-100">
                    {language === 'en' ? 'Module ' + (index + 1) : 'モジュール ' + (index + 1)}
                  </div>
                </div>
                
                <div className="p-6">
                  {/* 模块标题 */}
                  <div className="mb-4 pb-4 border-b border-gray-100">
                    <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                  </div>
                  
                  {/* 模块描述 */}
                  <div className="mb-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  
                  {/* 要点列表 */}
                  <div className="space-y-3">
                    {item.points.map((point, i) => (
                      <div key={i} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center bg-purple-50 rounded-sm mr-3 mt-0.5">
                          <span className="text-purple-500 text-xs">{i + 1}</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* 日式装饰元素 */}
                  <div className="absolute bottom-3 right-3">
                    <div className="w-8 h-8 border border-gray-200 rounded-full opacity-30"></div>
                  </div>
                  
                  {/* 悬停效果 */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 日式底部装饰 */}
          <div className="flex items-center justify-center mt-16">
            <div className="h-px w-16 bg-gray-200"></div>
            <div className="mx-4 text-gray-400 text-sm">
              {language === 'en' ? 'Innovate Together' : '共に革新する'}
            </div>
            <div className="h-px w-16 bg-gray-200"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
