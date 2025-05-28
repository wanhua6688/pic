'use client';

import { useLanguage } from "../../context/LanguageContext";
import Image from "next/image";
import Link from 'next/link';

const translations = {
  en: {
    title: "Our Achievements",
    subtitle: "Showcasing our impact and milestones in innovation, leadership and sustainable development",
    
    // 主要成就模块
    keyAchievements: {
      title: "Key Milestones",
      description: "Significant achievements that demonstrate our commitment to excellence and innovation",
      items: [
        {
          year: "2024",
          title: "Global Innovation Excellence Award",
          description: "Recognized for our breakthrough approach to integrating policy design with technological innovation",
          impact: "Established our organization as a global leader in innovation policy design"
        },
        {
          year: "2023",
          title: "Launch of Cross-Cultural Leadership Program",
          description: "Developed comprehensive training program bridging Eastern and Western leadership philosophies",
          impact: "Trained over 1,200 executives from 28 countries in its first year"
        },
        {
          year: "2022",
          title: "Sustainable Development Partnership Initiative",
          description: "Created consortium of 42 organizations across government, industry, and academia",
          impact: "Mobilized ¥3.7B in resources for sustainable innovation projects"
        },
        {
          year: "2021",
          title: "Digital Transformation Framework",
          description: "Published comprehensive methodology for organizational digital transformation",
          impact: "Adopted by 17 major corporations and 8 government ministries"
        },
        {
          year: "2020",
          title: "Foundation of Innovation Research Center",
          description: "Established our flagship research facility with state-of-the-art collaboration technology",
          impact: "Created permanent hub for cross-disciplinary innovation research"
        }
      ]
    },
    
    // 研究出版物模块
    publications: {
      title: "Research & Publications",
      description: "Our contributions to knowledge and policy development through rigorous research",
      categories: [
        {
          name: "Academic Journals",
          count: 87,
          highlights: [
            {
              title: "Integrative Framework for Policy Innovation in Aging Societies",
              journal: "Journal of Public Policy & Innovation",
              year: 2024,
              impact: "Cited in national policy frameworks across 5 countries"
            },
            {
              title: "Cross-Cultural Leadership Effectiveness in Global Organizations",
              journal: "International Leadership Quarterly",
              year: 2023,
              impact: "Received Best Paper Award at Global Leadership Summit"
            },
            {
              title: "Technological Adaptation Patterns in Rural Communities",
              journal: "Technology & Society Review",
              year: 2022,
              impact: "Informed rural digitalization strategies in 12 prefectures"
            }
          ]
        },
        {
          name: "Policy White Papers",
          count: 42,
          highlights: [
            {
              title: "Future of Work: Balancing Automation and Human Capital Development",
              institution: "Ministry of Economy, Trade and Industry",
              year: 2024,
              impact: "Directly influenced national workforce transition policy"
            },
            {
              title: "Regulatory Frameworks for Emerging Technologies",
              institution: "Cabinet Office Innovation Committee",
              year: 2022,
              impact: "Provided foundation for new regulatory sandbox initiatives"
            },
            {
              title: "Sustainable Urban Development in Aging Populations",
              institution: "National Urban Planning Association",
              year: 2021,
              impact: "Adopted by 8 major metropolitan areas for development planning"
            }
          ]
        },
        {
          name: "Books & Monographs",
          count: 14,
          highlights: [
            {
              title: "The Integration Imperative: Bridging Policy, Technology and Society",
              publisher: "Cambridge University Press",
              year: 2023,
              impact: "Translated into 7 languages; adopted in 28 university courses"
            },
            {
              title: "Leadership for the AI Era: Human-Centered Approaches to Technological Change",
              publisher: "Harvard Business Press",
              year: 2022,
              impact: "International bestseller with over 120,000 copies sold"
            },
            {
              title: "Rural Renaissance: Innovation Ecosystems Beyond Urban Centers",
              publisher: "Tokyo University Press",
              year: 2021,
              impact: "Winner of National Book Award for Public Policy"
            }
          ]
        }
      ]
    },
    
    // 合作伙伴与影响力模块
    partnerships: {
      title: "Partnerships & Impact",
      description: "Our collaborative relationships that extend our reach and amplify our impact",
      sections: [
        {
          title: "Global Network",
          description: "Strategic alliances with international organizations and institutions",
          partners: [
            {
              name: "United Nations Development Programme",
              relationship: "Official innovation policy advisor",
              jointProjects: 8
            },
            {
              name: "World Economic Forum",
              relationship: "Research partner for Future of Work initiative",
              jointProjects: 5
            },
            {
              name: "OECD Innovation Policy Platform",
              relationship: "Contributing member and policy developer",
              jointProjects: 12
            }
          ]
        },
        {
          title: "Government Collaborations",
          description: "Partnerships with national and local government entities",
          partners: [
            {
              name: "Ministry of Economy, Trade and Industry",
              relationship: "Strategic innovation advisor",
              jointProjects: 15
            },
            {
              name: "Digital Agency of Japan",
              relationship: "Technology transformation consultant",
              jointProjects: 7
            },
            {
              name: "Prefectural Innovation Councils",
              relationship: "Regional development partner",
              jointProjects: 28
            }
          ]
        },
        {
          title: "Corporate & Academic Alliances",
          description: "Collaborations with leading businesses and educational institutions",
          partners: [
            {
              name: "Keio University Innovation Hub",
              relationship: "Joint research facility",
              jointProjects: 14
            },
            {
              name: "Tokyo Institute of Technology",
              relationship: "Technology transfer partner",
              jointProjects: 9
            },
            {
              name: "Global Corporate Innovation Consortium",
              relationship: "Industry-academia bridge program",
              jointProjects: 22
            }
          ]
        }
      ]
    },
    
    // 认证与荣誉模块
    recognitions: {
      title: "Awards & Recognition",
      description: "Acknowledgments of our excellence and contributions to the field",
      categories: [
        {
          year: "2024",
          awards: [
            "Asia-Pacific Policy Innovation Award",
            "Digital Transformation Excellence Recognition",
            "Sustainability Leadership Honor"
          ]
        },
        {
          year: "2023",
          awards: [
            "Global Think Tank of the Year Finalist",
            "Cross-Cultural Management Achievement Award",
            "Public-Private Partnership Excellence Medal"
          ]
        },
        {
          year: "2022",
          awards: [
            "National Innovation Contribution Award",
            "Leadership Development Program of the Year",
            "Research Impact Recognition by Science Council"
          ]
        },
        {
          year: "2021",
          awards: [
            "Prime Minister's Award for Organizational Excellence",
            "Urban Planning Innovation Prize",
            "Technology Ethics Leadership Recognition"
          ]
        }
      ]
    },
    
    cta: "Partner with us for future achievements",
    contactButton: "Discuss collaboration opportunities"
  },
  ja: {
    title: "私たちの成果",
    subtitle: "イノベーション、リーダーシップ、持続可能な開発における影響とマイルストーンの紹介",
    
    // 主要成就模块
    keyAchievements: {
      title: "主要なマイルストーン",
      description: "卓越性とイノベーションへの取り組みを示す重要な成果",
      items: [
        {
          year: "2024",
          title: "グローバルイノベーション優秀賞",
          description: "政策設計と技術革新を統合する画期的なアプローチが評価されました",
          impact: "イノベーション政策設計のグローバルリーダーとして組織を確立"
        },
        {
          year: "2023",
          title: "異文化リーダーシッププログラムの立ち上げ",
          description: "東洋と西洋のリーダーシップ哲学を橋渡しする包括的なトレーニングプログラムを開発",
          impact: "初年度に28カ国から1,200人以上の経営幹部を育成"
        },
        {
          year: "2022",
          title: "持続可能な開発パートナーシップイニシアチブ",
          description: "政府、産業界、学術界にまたがる42の組織のコンソーシアムを創設",
          impact: "持続可能なイノベーションプロジェクトのために37億円の資源を動員"
        },
        {
          year: "2021",
          title: "デジタル変革フレームワーク",
          description: "組織のデジタル変革のための包括的な方法論を発表",
          impact: "17の主要企業と8つの政府省庁に採用"
        },
        {
          year: "2020",
          title: "イノベーション研究センターの設立",
          description: "最先端のコラボレーション技術を備えた旗艦研究施設を設立",
          impact: "学際的イノベーション研究のための恒久的ハブを創設"
        }
      ]
    },
    
    // 研究出版物模块
    publications: {
      title: "研究と出版物",
      description: "厳格な研究を通じた知識と政策開発への貢献",
      categories: [
        {
          name: "学術ジャーナル",
          count: 87,
          highlights: [
            {
              title: "高齢化社会における政策イノベーションのための統合的フレームワーク",
              journal: "公共政策・イノベーションジャーナル",
              year: 2024,
              impact: "5カ国の国家政策フレームワークで引用"
            },
            {
              title: "グローバル組織における異文化リーダーシップの有効性",
              journal: "国際リーダーシップ季刊誌",
              year: 2023,
              impact: "グローバルリーダーシップサミットで最優秀論文賞を受賞"
            },
            {
              title: "農村コミュニティにおける技術適応パターン",
              journal: "技術と社会レビュー",
              year: 2022,
              impact: "12の都道府県の農村デジタル化戦略に影響"
            }
          ]
        },
        {
          name: "政策白書",
          count: 42,
          highlights: [
            {
              title: "仕事の未来：自動化と人的資本開発のバランス",
              institution: "経済産業省",
              year: 2024,
              impact: "国家的な労働力移行政策に直接影響"
            },
            {
              title: "新興技術のための規制フレームワーク",
              institution: "内閣府イノベーション委員会",
              year: 2022,
              impact: "新しい規制サンドボックスイニシアチブの基盤を提供"
            },
            {
              title: "高齢化人口における持続可能な都市開発",
              institution: "全国都市計画協会",
              year: 2021,
              impact: "8つの主要都市圏で開発計画に採用"
            }
          ]
        },
        {
          name: "書籍とモノグラフ",
          count: 14,
          highlights: [
            {
              title: "統合の必要性：政策、技術、社会の架け橋",
              publisher: "ケンブリッジ大学出版",
              year: 2023,
              impact: "7言語に翻訳され、28の大学コースで採用"
            },
            {
              title: "AI時代のリーダーシップ：技術変化に対する人間中心のアプローチ",
              publisher: "ハーバードビジネスプレス",
              year: 2022,
              impact: "12万部以上を売り上げた国際的ベストセラー"
            },
            {
              title: "農村ルネサンス：都市中心部を超えたイノベーションエコシステム",
              publisher: "東京大学出版会",
              year: 2021,
              impact: "公共政策部門の全国図書賞を受賞"
            }
          ]
        }
      ]
    },
    
    // 合作伙伴与影响力模块
    partnerships: {
      title: "パートナーシップと影響力",
      description: "私たちの影響力を拡大する協力関係",
      sections: [
        {
          title: "グローバルネットワーク",
          description: "国際機関や組織との戦略的提携",
          partners: [
            {
              name: "国連開発計画",
              relationship: "公式イノベーション政策アドバイザー",
              jointProjects: 8
            },
            {
              name: "世界経済フォーラム",
              relationship: "「仕事の未来」イニシアチブの研究パートナー",
              jointProjects: 5
            },
            {
              name: "OECD イノベーション政策プラットフォーム",
              relationship: "貢献メンバーおよび政策開発者",
              jointProjects: 12
            }
          ]
        },
        {
          title: "政府との協力",
          description: "国および地方政府機関とのパートナーシップ",
          partners: [
            {
              name: "経済産業省",
              relationship: "戦略的イノベーションアドバイザー",
              jointProjects: 15
            },
            {
              name: "デジタル庁",
              relationship: "技術変革コンサルタント",
              jointProjects: 7
            },
            {
              name: "都道府県イノベーション評議会",
              relationship: "地域開発パートナー",
              jointProjects: 28
            }
          ]
        },
        {
          title: "企業・学術連携",
          description: "主要企業や教育機関との協力",
          partners: [
            {
              name: "慶應義塾大学イノベーションハブ",
              relationship: "共同研究施設",
              jointProjects: 14
            },
            {
              name: "東京工業大学",
              relationship: "技術移転パートナー",
              jointProjects: 9
            },
            {
              name: "グローバル企業イノベーションコンソーシアム",
              relationship: "産学連携プログラム",
              jointProjects: 22
            }
          ]
        }
      ]
    },
    
    // 认证与荣誉模块
    recognitions: {
      title: "賞と認定",
      description: "私たちの卓越性と分野への貢献に対する評価",
      categories: [
        {
          year: "2024",
          awards: [
            "アジア太平洋政策イノベーション賞",
            "デジタル変革優秀認定",
            "持続可能性リーダーシップ栄誉"
          ]
        },
        {
          year: "2023",
          awards: [
            "グローバルシンクタンク・オブ・ザ・イヤーファイナリスト",
            "異文化マネジメント功績賞",
            "官民パートナーシップ優秀メダル"
          ]
        },
        {
          year: "2022",
          awards: [
            "国家イノベーション貢献賞",
            "今年のリーダーシップ開発プログラム",
            "科学評議会による研究影響認定"
          ]
        },
        {
          year: "2021",
          awards: [
            "組織優秀性に対する首相賞",
            "都市計画イノベーション賞",
            "技術倫理リーダーシップ認定"
          ]
        }
      ]
    },
    
    cta: "将来の成果のために私たちとパートナーになりましょう",
    contactButton: "協力の機会について話し合う"
  }
};

export default function Achievements() {
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
                {language === 'en' ? 'ACHIEVEMENTS' : '成果'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* 主要成就模块 - 日式风格 */}
        <section className="mb-24">
          {/* 日式模块标题 */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-12 bg-gray-300"></div>
            <div className="mx-3 px-6 py-2 border border-gray-200 text-center">
              <h2 className="text-xl font-medium text-gray-900">{t.keyAchievements.title}</h2>
            </div>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          
          <div className="space-y-6">
            {t.keyAchievements.items.map((item, index) => (
              <div key={index} className="bg-white border border-gray-100 overflow-hidden relative">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/6 bg-gray-50 flex items-center justify-center p-6">
                    <div className="text-center">
                      <div className="text-3xl font-light text-blue-600">{item.year}</div>
                      <div className="mt-2 w-8 h-px bg-gray-300 mx-auto"></div>
                    </div>
                  </div>
                  
                  <div className="md:w-5/6 p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-3 pb-3 border-b border-gray-100">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
                    
                    <div className="bg-blue-50 p-3 border-l-2 border-blue-200">
                      <p className="text-sm text-gray-700">
                        <span className="text-blue-600 font-medium mr-2">Impact:</span>
                        {item.impact}
                      </p>
                    </div>
                    
                    {/* 日式装饰元素 */}
                    <div className="absolute top-3 right-3">
                      <div className="w-6 h-6 border border-gray-200 transform rotate-45 opacity-30"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 研究出版物模块 - 日式风格 */}
        <section className="mb-24">
          {/* 日式模块标题 */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-12 bg-gray-300"></div>
            <div className="mx-3 px-6 py-2 border border-gray-200 text-center">
              <h2 className="text-xl font-medium text-gray-900">{t.publications.title}</h2>
            </div>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.publications.categories.map((category, catIndex) => (
              <div key={catIndex} className="bg-white border border-gray-100 p-6 relative">
                {/* 顶部装饰线 */}
                <div className="h-1 w-full bg-gray-100"></div>
                <div className="h-1 w-1/3 bg-blue-400 absolute top-0 left-0"></div>
                
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 text-sm font-medium border border-blue-100">{category.count}</span>
                </div>
                
                <div className="space-y-6">
                  {category.highlights.map((highlight, hlIndex) => (
                    <div key={hlIndex} className="border-l-2 border-gray-200 pl-4 py-1">
                      <h4 className="text-base font-medium text-gray-800 mb-2">{highlight.title}</h4>
                      <p className="text-sm text-gray-500 mb-1">
                        {highlight.journal || highlight.institution || highlight.publisher}, {highlight.year}
                      </p>
                      <p className="text-sm text-blue-600 italic">{highlight.impact}</p>
                    </div>
                  ))}
                </div>
                
                {/* 日式装饰元素 */}
                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 border border-gray-100 rounded-full opacity-20"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 合作伙伴与影响力模块 - 日式风格 */}
        <section className="mb-24">
          {/* 日式模块标题 */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-12 bg-gray-300"></div>
            <div className="mx-3 px-6 py-2 border border-gray-200 text-center">
              <h2 className="text-xl font-medium text-gray-900">{t.partnerships.title}</h2>
            </div>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          
          <div className="space-y-16">
            {t.partnerships.sections.map((section, secIndex) => (
              <div key={secIndex} className="relative">
                {/* 日式小标题 */}
                <div className="flex items-center mb-8">
                  <div className="h-px w-8 bg-gray-300"></div>
                  <div className="mx-3 px-4 py-1 border border-gray-200 text-center">
                    <h3 className="text-base font-medium text-gray-900">{section.title}</h3>
                  </div>
                  <div className="h-px w-8 bg-gray-300"></div>
                </div>
                
                <p className="text-center text-gray-600 text-sm mb-8 max-w-2xl mx-auto">{section.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {section.partners.map((partner, pIndex) => (
                    <div key={pIndex} className="bg-white border border-gray-100 p-5 relative group hover:border-blue-200 transition-colors">
                      {/* 顶部装饰线 */}
                      <div className="h-0.5 w-full bg-gray-100"></div>
                      <div className="h-0.5 w-0 bg-blue-400 absolute top-0 left-0 group-hover:w-full transition-all duration-500"></div>
                      
                      <h4 className="text-base font-medium text-gray-900 mb-3 pb-2 border-b border-gray-50">{partner.name}</h4>
                      <p className="text-sm text-gray-600 mb-4">{partner.relationship}</p>
                      
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">{language === 'en' ? 'Joint Projects' : '共同プロジェクト'}</span>
                        <span className="bg-green-50 text-green-700 px-2 py-1 border border-green-100 font-medium">{partner.jointProjects}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* 日式装饰元素 */}
                <div className="absolute -top-4 -right-4 w-16 h-16 border border-gray-100 rounded-full opacity-20"></div>
              </div>
            ))}
          </div>
        </section>
        
        {/* 认证与荣誉模块 - 日式风格 */}
        <section className="mb-24">
          {/* 日式模块标题 */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-12 bg-gray-300"></div>
            <div className="mx-3 px-6 py-2 border border-gray-200 text-center">
              <h2 className="text-xl font-medium text-gray-900">{t.recognitions.title}</h2>
            </div>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          
          <p className="text-center text-gray-600 text-sm mb-10 max-w-2xl mx-auto">{t.recognitions.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.recognitions.categories.map((category, catIndex) => (
              <div key={catIndex} className="bg-white border border-gray-100 p-6 relative">
                {/* 年份标记 */}
                <div className="absolute -top-4 left-6 bg-blue-600 text-white px-4 py-1 text-sm font-medium">
                  {category.year}
                </div>
                
                <div className="pt-4 space-y-3">
                  {category.awards.map((award, awardIndex) => (
                    <div key={awardIndex} className="flex items-start">
                      <div className="mt-1.5 mr-3">
                        <div className="w-2 h-2 border border-blue-400 transform rotate-45"></div>
                      </div>
                      <p className="text-sm text-gray-700">{award}</p>
                    </div>
                  ))}
                </div>
                
                {/* 日式装饰元素 */}
                <div className="absolute bottom-3 right-3">
                  <div className="w-8 h-8 border border-gray-200 rounded-full opacity-30"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* 行动号召 - 日式风格 */}
        <section className="mb-16">
          <div className="bg-white border border-gray-100 p-8 text-center relative overflow-hidden">
            {/* 装饰元素 */}
            <div className="absolute top-0 left-0 w-24 h-24 border border-gray-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border border-gray-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-20"></div>
            
            <h3 className="text-xl font-medium text-gray-900 mb-4">{t.cta}</h3>
            
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors"
            >
              {t.contactButton}
            </Link>
            
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
          