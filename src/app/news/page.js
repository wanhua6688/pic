"use client";

import { useLanguage } from "../../context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const translations = {
  en: {
    title: "News & Updates",
    subtitle:
      "Stay informed about our latest initiatives, achievements, and industry insights",

    // 新闻筛选类别
    categories: {
      all: "All News",
      pressReleases: "Press Releases",
      events: "Events & Conferences",
      insights: "Industry Insights",
      announcements: "Announcements",
    },

    // 精选新闻
    featuredNews: {
      title: "Featured Story",
      item: {
        category: "Press Release",
        date: "May 15, 2025",
        title: "Launch of National Digital Transformation Initiative",
        summary:
          "Our organization has been selected to lead the national digital transformation initiative, a five-year program aimed at accelerating technological adoption across key industries.",
        content:
          "The Ministry of Digital Affairs has announced our organization as the strategic partner for the National Digital Transformation Initiative, a comprehensive program designed to modernize critical sectors including healthcare, education, and public services. This initiative represents a ¥12.5 billion investment over five years and will involve collaboration with over 200 organizations nationwide.\n\nOur team will provide expertise in policy design, implementation frameworks, and cross-sector coordination to ensure successful digital transformation that benefits all citizens. The program aims to achieve 50% improvement in digital service delivery efficiency while ensuring accessibility and inclusion.",
        image: "/images/news/digital-transformation.jpg",
        author: "Takashi Yamamoto, Executive Director",
      },
    },

    // 最新新闻列表
    latestNews: {
      title: "Latest News",
      viewAll: "View all news",
      items: [
        {
          id: "1",
          category: "Events",
          categoryKey: "events",
          date: "May 10, 2025",
          title: "Global Innovation Summit 2025 Registration Now Open",
          summary:
            "Join leaders from 35+ countries at our annual summit focused on sustainable innovation and cross-cultural collaboration.",
          image: "/images/news/summit.jpg",
        },
        {
          id: "2",
          category: "Announcements",
          categoryKey: "announcements",
          date: "April 28, 2025",
          title: "New Research Partnership with Kyoto University",
          summary:
            "Collaborative research initiative focusing on AI applications in aging population support systems.",
          image: "/images/news/research-partnership.jpg",
        },
        {
          id: "3",
          category: "Press Release",
          categoryKey: "pressReleases",
          date: "April 15, 2025",
          title: "Innovation Policy Framework Adopted by ASEAN Nations",
          summary:
            "Our policy framework for regional innovation ecosystems has been formally adopted by ASEAN economic ministers.",
          image: "/images/news/policy-framework.jpg",
        },
        {
          id: "4",
          category: "Industry Insights",
          categoryKey: "insights",
          date: "April 3, 2025",
          title: "The Future of Work: Balancing Automation and Human Capital",
          summary:
            "New whitepaper explores strategies for workforce development in the age of advanced automation.",
          image: "/images/news/future-work.jpg",
        },
        {
          id: "5",
          category: "Announcements",
          categoryKey: "announcements",
          date: "March 22, 2025",
          title: "Leadership Development Program Expands to Southeast Asia",
          summary:
            "Our flagship leadership program will now be available in Singapore, Thailand, and Vietnam.",
          image: "/images/news/leadership-program.jpg",
        },
        {
          id: "6",
          category: "Events",
          categoryKey: "events",
          date: "March 15, 2025",
          title: "Sustainable Innovation Workshop Series Announced",
          summary:
            "Monthly workshop series focusing on practical implementation of sustainable development goals.",
          image: "/images/news/workshop-series.jpg",
        },
      ],
    },

    // 新闻档案
    archive: {
      title: "News Archive",
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      years: ["2025", "2024", "2023", "2022", "2021"],
      searchPlaceholder: "Search news...",
      searchButton: "Search",
      resultsFor: "Results for",
      noResults: "No results found for your search.",
    },

    // 订阅新闻通讯
    newsletter: {
      title: "Stay Updated",
      description:
        "Subscribe to our newsletter for the latest news and insights",
      emailPlaceholder: "Your email address",
      subscribeButton: "Subscribe",
      privacyNotice:
        "We respect your privacy and will never share your information.",
      successMessage: "Thank you for subscribing!",
      errorMessage: "There was an error. Please try again.",
    },

    // 媒体联系
    mediaContact: {
      title: "Media Contact",
      name: "Yuki Tanaka",
      position: "Head of Communications",
      email: "media@example.com",
      phone: "+81-3-1234-5678",
      availability: "Available for interviews and media inquiries",
    },
  },
  ja: {
    title: "ニュースとアップデート",
    subtitle: "最新のイニシアチブ、成果、業界の洞察について最新情報を入手する",

    // 新闻筛选类别
    categories: {
      all: "すべてのニュース",
      pressReleases: "プレスリリース",
      events: "イベントと会議",
      insights: "業界の洞察",
      announcements: "お知らせ",
    },

    // 精选新闻
    featuredNews: {
      title: "注目のストーリー",
      item: {
        category: "プレスリリース",
        date: "2025年5月15日",
        title: "国家デジタル変革イニシアチブの開始",
        summary:
          "当組織は、主要産業全体での技術採用を加速することを目的とした5年間のプログラムである国家デジタル変革イニシアチブをリードするために選ばれました。",
        content:
          "デジタル庁は、医療、教育、公共サービスなどの重要分野を近代化するために設計された包括的なプログラムである国家デジタル変革イニシアチブの戦略的パートナーとして当組織を発表しました。このイニシアチブは5年間で125億円の投資を表し、全国200以上の組織との協力を伴います。\n\n私たちのチームは、すべての市民に利益をもたらす成功したデジタル変革を確実にするために、政策設計、実施フレームワーク、および分野横断的な調整における専門知識を提供します。このプログラムは、アクセシビリティと包括性を確保しながら、デジタルサービス提供効率を50％向上させることを目指しています。",
        image: "/images/news/digital-transformation.jpg",
        author: "山本隆、エグゼクティブディレクター",
      },
    },

    // 最新新闻列表
    latestNews: {
      title: "最新ニュース",
      viewAll: "すべてのニュースを見る",
      items: [
        {
          id: "1",
          category: "イベント",
          categoryKey: "events",
          date: "2025年5月10日",
          title: "グローバルイノベーションサミット2025の登録が開始",
          summary:
            "持続可能なイノベーションと異文化間コラボレーションに焦点を当てた年次サミットで、35カ国以上のリーダーと交流しましょう。",
          image: "/images/news/summit.jpg",
        },
        {
          id: "2",
          category: "お知らせ",
          categoryKey: "announcements",
          date: "2025年4月28日",
          title: "京都大学との新しい研究パートナーシップ",
          summary:
            "高齢者人口支援システムにおけるAIアプリケーションに焦点を当てた共同研究イニシアチブ。",
          image: "/images/news/research-partnership.jpg",
        },
        {
          id: "3",
          category: "プレスリリース",
          categoryKey: "pressReleases",
          date: "2025年4月15日",
          title: "ASEAN諸国によるイノベーション政策フレームワークの採用",
          summary:
            "地域イノベーションエコシステムのための私たちの政策フレームワークがASEAN経済大臣によって正式に採用されました。",
          image: "/images/news/policy-framework.jpg",
        },
        {
          id: "4",
          category: "業界の洞察",
          categoryKey: "insights",
          date: "2025年4月3日",
          title: "仕事の未来：自動化と人的資本のバランス",
          summary:
            "新しいホワイトペーパーでは、高度な自動化の時代における労働力開発のための戦略を探ります。",
          image: "/images/news/future-work.jpg",
        },
        {
          id: "5",
          category: "お知らせ",
          categoryKey: "announcements",
          date: "2025年3月22日",
          title: "リーダーシップ開発プログラムが東南アジアに拡大",
          summary:
            "当社の主力リーダーシッププログラムが、シンガポール、タイ、ベトナムで利用可能になります。",
          image: "/images/news/leadership-program.jpg",
        },
        {
          id: "6",
          category: "イベント",
          categoryKey: "events",
          date: "2025年3月15日",
          title: "持続可能なイノベーションワークショップシリーズの発表",
          summary:
            "持続可能な開発目標の実践的な実施に焦点を当てた月次ワークショップシリーズ。",
          image: "/images/news/workshop-series.jpg",
        },
      ],
    },

    // 新闻档案
    archive: {
      title: "ニュースアーカイブ",
      months: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      years: ["2025年", "2024年", "2023年", "2022年", "2021年"],
      searchPlaceholder: "ニュースを検索...",
      searchButton: "検索",
      resultsFor: "検索結果：",
      noResults: "検索結果が見つかりませんでした。",
    },

    // 订阅新闻通讯
    newsletter: {
      title: "最新情報を入手",
      description:
        "最新のニュースと洞察を得るためにニュースレターにご登録ください",
      emailPlaceholder: "メールアドレス",
      subscribeButton: "登録する",
      privacyNotice:
        "私たちはあなたのプライバシーを尊重し、あなたの情報を共有することはありません。",
      successMessage: "ご登録ありがとうございます！",
      errorMessage: "エラーが発生しました。もう一度お試しください。",
    },

    // 媒体联系
    mediaContact: {
      title: "メディア連絡先",
      name: "田中ゆき",
      position: "コミュニケーション責任者",
      email: "media@example.com",
      phone: "+81-3-1234-5678",
      availability: "インタビューとメディア問い合わせに対応可能",
    },
  },
};

export default function News() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState(null); // null, 'success', 'error'

  // 根据当前选择的类别筛选新闻，使用categoryKey解决语言切换问题
  const filteredNews = t.latestNews.items.filter((item) => {
    if (activeCategory === "all") return true;
    return item.categoryKey === activeCategory;
  });

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
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t.subtitle}
          </p>

          {/* 日式风格的装饰图案 */}
          <div className="relative w-24 h-24 mx-auto">
            <div className="absolute inset-0 border-2 border-gray-200 transform rotate-45"></div>
            <div className="absolute inset-2 border border-gray-100 transform rotate-45"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-300 text-xs tracking-widest">
                {language === "en" ? "NEWS" : "ニュース"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* 精选新闻 - 日式风格 */}
        <section className="mb-24">
          {/* 日式模块标题 */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-12 bg-gray-300"></div>
            <div className="mx-3 px-6 py-2 border border-gray-200 text-center">
              <h2 className="text-xl font-medium text-gray-900">
                {t.featuredNews.title}
              </h2>
            </div>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>

          {/* 精选新闻卡片 - 日式风格 */}
          <div className="bg-white border border-gray-100 overflow-hidden relative">
            <div className="md:flex">
              <div className="md:w-2/5 relative h-64 md:h-auto bg-gray-50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl font-thin text-gray-200 opacity-30">
                    1
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-blue-600 rounded-sm border border-blue-100">
                  {t.featuredNews.item.category}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
              </div>

              <div className="md:w-3/5 p-8">
                <div className="mb-2">
                  <span className="text-gray-500 text-sm">
                    {t.featuredNews.item.date}
                  </span>
                </div>

                <h3 className="text-xl font-medium text-gray-900 mb-4 border-b border-gray-100 pb-4">
                  {t.featuredNews.item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t.featuredNews.item.summary}
                </p>

                <div className="bg-gray-50 p-4 rounded-sm mb-6 text-sm text-gray-700 leading-relaxed whitespace-pre-line border-l-2 border-blue-100">
                  {t.featuredNews.item.content}
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
                    <span className="text-blue-500 text-sm">A</span>
                  </div>
                  <span className="text-sm text-gray-700">
                    {t.featuredNews.item.author}
                  </span>
                </div>

                {/* 日式装饰元素 */}
                <div className="absolute bottom-3 right-3">
                  <div className="w-8 h-8 border border-gray-200 rounded-full opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 新闻类别筛选 - 日式风格 */}
        <section className="mb-16">
          <div className="flex flex-wrap justify-center gap-1 md:gap-2">
            {Object.entries(t.categories).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 text-sm md:text-base font-medium transition-all duration-300 border ${
                  activeCategory === key
                    ? "border-blue-400 text-blue-600 bg-blue-50"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </section>

        {/* 最新新闻列表 - 日式风格 */}
        <section className="mb-24">
          {/* 日式模块标题 */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-12 bg-gray-300"></div>
            <div className="mx-3 px-6 py-2 border border-gray-200 text-center">
              <h2 className="text-xl font-medium text-gray-900">
                {t.latestNews.title}
              </h2>
            </div>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>

          {/* 新闻卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item, index) => (
              <div
                key={item.id}
                className="bg-white border border-gray-100 relative group overflow-hidden"
              >
                {/* 顶部装饰线 */}
                <div className="h-1 w-full bg-gray-100"></div>
                <div className="h-1 w-1/3 bg-blue-400 absolute top-0 left-0"></div>

                <div className="p-6">
                  {/* 新闻编号 */}
                  <div className="absolute top-4 right-4 opacity-10 text-5xl font-thin text-blue-400">
                    {index + 1}
                  </div>

                  {/* 类别和日期 */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-sm">
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-xs">{item.date}</span>
                  </div>

                  {/* 新闻标题 */}
                  <h3 className="text-lg font-medium text-gray-900 mb-3 border-b border-gray-100 pb-3">
                    {item.title}
                  </h3>

                  {/* 新闻摘要 */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* 阅读更多链接 */}
                  <Link
                    href={`/news/${item.id}`}
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    {language === "en" ? "Read more" : "続きを読む"}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </Link>

                  {/* 悬停效果线 */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 订阅新闻通讯 - 日式风格 */}
        <section className="mb-16 relative">
          <div className="bg-white border border-gray-100 p-8 text-center relative overflow-hidden">
            {/* 装饰元素 */}
            <div className="absolute top-0 left-0 w-24 h-24 border border-gray-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border border-gray-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-20"></div>

            {/* 标题 */}
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              {t.newsletter.title}
            </h3>
            <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
              {t.newsletter.description}
            </p>

            {/* 订阅表单 */}
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t.newsletter.emailPlaceholder}
                className="flex-grow px-4 py-2 border border-gray-200 focus:outline-none focus:border-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                onClick={() => {
                  if (email.trim()) {
                    setSubscriptionStatus("success");
                    // 这里可以添加实际的订阅逻辑
                    setTimeout(() => setSubscriptionStatus(null), 3000); // 3秒后隐藏提示
                    setEmail("");
                  }
                }}
              >
                {t.newsletter.subscribeButton}
              </button>
            </div>

            {/* 订阅状态提示 */}
            {subscriptionStatus === "success" && (
              <div className="mt-4 py-2 px-4 bg-green-50 text-green-700 border border-green-200 text-sm">
                {t.newsletter.successMessage}
              </div>
            )}
            {subscriptionStatus === "error" && (
              <div className="mt-4 py-2 px-4 bg-red-50 text-red-700 border border-red-200 text-sm">
                {t.newsletter.errorMessage}
              </div>
            )}

            <p className="text-xs text-gray-500 mt-4">
              {t.newsletter.privacyNotice}
            </p>

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
