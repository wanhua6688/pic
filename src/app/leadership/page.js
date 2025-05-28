'use client';

import { useLanguage } from "../../context/LanguageContext";
import Image from "next/image";
import Link from 'next/link';

const translations = {
  en: {
    title: "Leadership Development",
    subtitle: "Cultivating visionary leaders who drive innovation and sustainable transformation",
    
    // 领导力基础模块
    leadershipFoundations: {
      title: "Leadership Foundations",
      description: "Building core leadership competencies that enable effective decision-making and organizational guidance",
      items: [
        {
          title: "Strategic Vision & Execution",
          description: "Developing the capacity to envision future possibilities and translate them into actionable strategies",
          points: [
            "Long-term strategic planning methodologies",
            "Vision articulation and communication",
            "Strategic alignment across organizational levels"
          ]
        },
        {
          title: "Ethical Leadership",
          description: "Cultivating leadership practices grounded in integrity, transparency, and social responsibility",
          points: [
            "Ethical decision-making frameworks",
            "Values-based leadership principles",
            "Building cultures of accountability and trust"
          ]
        },
        {
          title: "Adaptive Leadership",
          description: "Preparing leaders to navigate complexity, uncertainty, and rapid change",
          points: [
            "Resilience development in leadership teams",
            "Complex problem-solving methodologies",
            "Agile leadership approaches for volatile environments"
          ]
        }
      ]
    },
    
    // 跨文化领导力模块
    crossCulturalLeadership: {
      title: "Cross-Cultural Leadership",
      description: "Developing leadership capabilities that transcend cultural boundaries and leverage diverse perspectives",
      items: [
        {
          title: "Cultural Intelligence",
          description: "Building awareness and adaptability to effectively lead across different cultural contexts",
          points: [
            "Cultural self-awareness assessment",
            "Cross-cultural communication strategies",
            "Navigating cultural dimensions in leadership"
          ]
        },
        {
          title: "Global Leadership Competencies",
          description: "Equipping leaders with skills needed to operate effectively in international environments",
          points: [
            "Global mindset development",
            "International negotiation and conflict resolution",
            "Leading geographically dispersed teams"
          ]
        },
        {
          title: "East-West Leadership Integration",
          description: "Blending Japanese leadership philosophies with Western approaches for comprehensive leadership effectiveness",
          points: [
            "Comparative analysis of leadership traditions",
            "Integrating collectivist and individualist leadership approaches",
            "Synthesizing harmony-based and assertive leadership styles"
          ]
        }
      ]
    },
    
    // 组织转型模块
    organizationalTransformation: {
      title: "Organizational Transformation",
      description: "Leading significant organizational change initiatives that create lasting positive impact",
      items: [
        {
          title: "Change Leadership",
          description: "Guiding organizations through complex transformational processes",
          points: [
            "Change readiness assessment and preparation",
            "Stakeholder engagement in transformation",
            "Overcoming resistance and building momentum"
          ]
        },
        {
          title: "Digital Transformation Leadership",
          description: "Leading technological evolution while maintaining human-centered organizational culture",
          points: [
            "Digital literacy for senior leadership",
            "Balancing technological innovation with human needs",
            "Creating digital transformation roadmaps"
          ]
        },
        {
          title: "Sustainable Leadership",
          description: "Developing leadership approaches that balance economic, social, and environmental considerations",
          points: [
            "ESG (Environmental, Social, Governance) leadership frameworks",
            "Long-term value creation strategies",
            "Leading with purpose beyond profit"
          ]
        }
      ]
    },
    
    // 项目成果
    outcomes: {
      title: "Program Outcomes",
      description: "Measurable impacts from our leadership development initiatives",
      items: [
        {
          figure: "2,500+",
          unit: "Leaders",
          description: "trained through our comprehensive programs"
        },
        {
          figure: "87%",
          unit: "Success Rate",
          description: "in organizational transformation initiatives"
        },
        {
          figure: "35%",
          unit: "Increase",
          description: "in leadership effectiveness scores"
        },
        {
          figure: "42",
          unit: "Countries",
          description: "represented in our global leadership network"
        }
      ]
    },
    
    cta: "Develop your leadership potential",
    contactButton: "Inquire about programs"
  },
  ja: {
    title: "リーダーシップ開発",
    subtitle: "イノベーションと持続可能な変革を推進するビジョナリーリーダーの育成",
    
    // 领导力基础模块
    leadershipFoundations: {
      title: "リーダーシップの基礎",
      description: "効果的な意思決定と組織指導を可能にする中核的リーダーシップ能力の構築",
      items: [
        {
          title: "戦略的ビジョンと実行",
          description: "将来の可能性を描き、それらを実行可能な戦略に変換する能力の開発",
          points: [
            "長期的戦略計画方法論",
            "ビジョンの明確化とコミュニケーション",
            "組織レベル全体での戦略的整合性"
          ]
        },
        {
          title: "倫理的リーダーシップ",
          description: "誠実さ、透明性、社会的責任に基づいたリーダーシップ実践の育成",
          points: [
            "倫理的意思決定フレームワーク",
            "価値観に基づくリーダーシップ原則",
            "説明責任と信頼の文化の構築"
          ]
        },
        {
          title: "適応型リーダーシップ",
          description: "複雑さ、不確実性、急速な変化をナビゲートするリーダーの育成",
          points: [
            "リーダーシップチームにおけるレジリエンスの開発",
            "複雑な問題解決方法論",
            "変動的環境のためのアジャイルリーダーシップアプローチ"
          ]
        }
      ]
    },
    
    // 跨文化领导力模块
    crossCulturalLeadership: {
      title: "異文化リーダーシップ",
      description: "文化的境界を超え、多様な視点を活用するリーダーシップ能力の開発",
      items: [
        {
          title: "文化的知性",
          description: "異なる文化的文脈で効果的にリードするための認識と適応力の構築",
          points: [
            "文化的自己認識評価",
            "異文化コミュニケーション戦略",
            "リーダーシップにおける文化的側面のナビゲーション"
          ]
        },
        {
          title: "グローバルリーダーシップ能力",
          description: "国際的環境で効果的に活動するために必要なスキルをリーダーに提供",
          points: [
            "グローバルマインドセットの開発",
            "国際交渉と紛争解決",
            "地理的に分散したチームのリード"
          ]
        },
        {
          title: "東西リーダーシップの統合",
          description: "包括的なリーダーシップ効果のための日本のリーダーシップ哲学と西洋のアプローチの融合",
          points: [
            "リーダーシップ伝統の比較分析",
            "集団主義と個人主義のリーダーシップアプローチの統合",
            "調和ベースと主張的なリーダーシップスタイルの統合"
          ]
        }
      ]
    },
    
    // 组织转型模块
    organizationalTransformation: {
      title: "組織変革",
      description: "持続的なポジティブインパクトを創出する重要な組織変革イニシアチブのリード",
      items: [
        {
          title: "変革リーダーシップ",
          description: "複雑な変革プロセスを通じて組織を導く",
          points: [
            "変化への準備評価と準備",
            "変革におけるステークホルダーの関与",
            "抵抗の克服とモメンタムの構築"
          ]
        },
        {
          title: "デジタル変革リーダーシップ",
          description: "人間中心の組織文化を維持しながらテクノロジーの進化をリードする",
          points: [
            "上級リーダーシップのためのデジタルリテラシー",
            "技術革新と人間のニーズのバランス",
            "デジタル変革ロードマップの作成"
          ]
        },
        {
          title: "持続可能なリーダーシップ",
          description: "経済的、社会的、環境的考慮のバランスをとるリーダーシップアプローチの開発",
          points: [
            "ESG（環境、社会、ガバナンス）リーダーシップフレームワーク",
            "長期的価値創造戦略",
            "利益を超えた目的を持ったリーダーシップ"
          ]
        }
      ]
    },
    
    // 项目成果
    outcomes: {
      title: "プログラム成果",
      description: "リーダーシップ開発イニシアチブからの測定可能な影響",
      items: [
        {
          figure: "2,500+",
          unit: "リーダー",
          description: "包括的なプログラムを通じて訓練"
        },
        {
          figure: "87%",
          unit: "成功率",
          description: "組織変革イニシアチブにおいて"
        },
        {
          figure: "35%",
          unit: "増加",
          description: "リーダーシップ有効性スコアにおいて"
        },
        {
          figure: "42",
          unit: "カ国",
          description: "グローバルリーダーシップネットワークに代表される"
        }
      ]
    },
    
    cta: "リーダーシップの可能性を開発する",
    contactButton: "プログラムについて問い合わせる"
  }
};

export default function Leadership() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="relative bg-gray-50 overflow-hidden">
      {/* 日式风格的装饰元素 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[url('/patterns/jp-dots.png')] bg-repeat opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[url('/patterns/jp-dots.png')] bg-repeat opacity-5"></div>
      
      {/* 日式风格的页面标题区 */}
      <div className="relative bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          {/* 顶部装饰线 */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-gray-300"></div>
            <div className="mx-3 px-6 py-2 border border-gray-200">
              <h1 className="text-2xl font-medium text-gray-900">{t.title}</h1>
            </div>
            <div className="h-px w-16 bg-gray-300"></div>
          </div>
          
          {/* 副标题 */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">{t.subtitle}</p>
          
          {/* 日式风格的装饰图案 */}
          <div className="relative w-24 h-24 mx-auto">
            <div className="absolute inset-0 border-2 border-gray-200 transform rotate-45"></div>
            <div className="absolute inset-2 border border-gray-100 transform rotate-45"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-300 text-xs tracking-widest">
                {language === 'en' ? 'LEADERSHIP' : 'リーダーシップ'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* 领导力基础模块 - 日式风格 */}
        <section className="mb-24">
          {/* 日式模块标题 */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-12 bg-gray-300"></div>
            <div className="mx-3 px-6 py-2 border border-gray-200 text-center">
              <h2 className="text-xl font-medium text-gray-900">{t.leadershipFoundations.title}</h2>
            </div>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          
          {/* 模块描述 */}
          <div className="text-center mb-12">
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t.leadershipFoundations.description}
            </p>
          </div>
          
          {/* 日式卡片布局 */}
          <div className="grid md:grid-cols-3 gap-6">
            {t.leadershipFoundations.items.map((item, index) => (
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

        {/* 跨文化领导力模块 - 日式风格 */}
        <section className="mb-24 relative">
          {/* 日式装饰元素 */}
          <div className="absolute right-0 top-1/4 w-16 h-16 border border-gray-100 transform rotate-45 opacity-20"></div>
          <div className="absolute left-0 bottom-1/4 w-16 h-16 border border-gray-100 transform rotate-45 opacity-20"></div>
          
          {/* 日式模块标题 */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-12 bg-gray-300"></div>
            <div className="mx-3 px-6 py-2 border border-gray-200 text-center">
              <h2 className="text-xl font-medium text-gray-900">{t.crossCulturalLeadership.title}</h2>
            </div>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          
          {/* 模块描述 */}
          <div className="text-center mb-12">
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t.crossCulturalLeadership.description}
            </p>
          </div>
          
          {/* 日式卡片容器 - 水平布局 */}
          <div className="space-y-6">
            {t.crossCulturalLeadership.items.map((item, index) => (
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

        {/* 组织转型模块 - 日式风格 */}
        <section className="mb-24 relative">
          {/* 日式装饰元素 */}
          <div className="absolute left-1/4 top-0 w-40 h-40 border border-gray-100 rounded-full opacity-10"></div>
          <div className="absolute right-1/4 bottom-0 w-40 h-40 border border-gray-100 rounded-full opacity-10"></div>
          
          {/* 日式模块标题 */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-12 bg-gray-300"></div>
            <div className="mx-3 px-6 py-2 border border-gray-200 text-center">
              <h2 className="text-xl font-medium text-gray-900">{t.organizationalTransformation.title}</h2>
            </div>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          
          {/* 模块描述 */}
          <div className="text-center mb-12">
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t.organizationalTransformation.description}
            </p>
          </div>
          
          {/* 日式卡片容器 - 网格布局带图片 */}
          <div className="grid md:grid-cols-3 gap-8">
            {t.organizationalTransformation.items.map((item, index) => (
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
              {language === 'en' ? 'Transform Together' : '共に変革する'}
            </div>
            <div className="h-px w-16 bg-gray-200"></div>
          </div>
        </section>

        {/* 项目成果展示 - 日式风格 */}
        <section className="mb-24 relative">
          {/* 日式模块标题 */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-12 bg-gray-300"></div>
            <div className="mx-3 px-6 py-2 border border-gray-200 text-center">
              <h2 className="text-xl font-medium text-gray-900">{t.outcomes.title}</h2>
            </div>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          
          {/* 模块描述 */}
          <div className="text-center mb-12">
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t.outcomes.description}
            </p>
          </div>
          
          {/* 日式数据展示 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.outcomes.items.map((item, index) => (
              <div key={index} className="bg-white border border-gray-100 p-6 text-center relative group overflow-hidden">
                {/* 顶部装饰线 */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gray-100"></div>
                <div className="absolute top-0 left-0 w-1/2 h-1 bg-blue-400 opacity-70"></div>
                
                {/* 数字 */}
                <div className="text-3xl font-light text-blue-600 mb-1">{item.figure}</div>
                
                {/* 单位 */}
                <div className="text-sm font-medium text-gray-700 mb-3">{item.unit}</div>
                
                {/* 描述 */}
                <div className="text-xs text-gray-500">{item.description}</div>
                
                {/* 装饰元素 */}
                <div className="absolute -bottom-3 -right-3 w-12 h-12 border border-gray-100 rounded-full opacity-20"></div>
                
                {/* 悬停效果 */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </section>

        {/* 联系区域 - 日式风格 */}
        <section className="mb-16 relative">
          <div className="bg-white border border-gray-100 p-8 text-center relative overflow-hidden">
            {/* 装饰元素 */}
            <div className="absolute top-0 left-0 w-24 h-24 border border-gray-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border border-gray-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-20"></div>
            
            {/* 标题 */}
            <h3 className="text-xl font-medium text-gray-900 mb-4">{t.cta}</h3>
            
            {/* 按钮 */}
            <div className="inline-block">
              <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-gray-300 bg-white hover:bg-gray-50 text-sm font-medium text-gray-700 transition-colors duration-300">
                <span>{t.contactButton}</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
            
            {/* 底部装饰 */}
            <div className="flex items-center justify-center mt-8">
              <div className="h-px w-8 bg-gray-200"></div>
              <div className="mx-2">
                <div className="w-2 h-2 border border-gray-200 transform rotate-45"></div>
              </div>
              <div className="h-px w-8 bg-gray-200"></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}