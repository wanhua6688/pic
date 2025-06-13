"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import Carousel from "../components/Carousel";

const translations = {
  en: {
    heroTitle: "Building a Trinity Innovation Cycle",
    heroSubtitle:
      "Integrating Policy-Technology-Industry to Address Japan's Core Societal Challenges",
    learnMore: "Learn More",
    viewDetails: "View Details",
    exploreMore: "Explore More",
    discoverNow: "Discover Now",
    businessModulesTitle: "Core Business Modules",
    policyDesignTitle: "Policy Design & Simulation",
    policyDesignDesc:
      "Develop dynamic policy models tailored to Japan's unique societal structures",
    collaborationTitle: "Industry-Academia-Government Collaboration",
    collaborationDesc:
      "Forge partnerships between corporate, academic, and government entities",
    innovationHubTitle: "Global Innovation Hub Development",
    innovationHubDesc:
      "Establish Social Implementation Centers for cutting-edge technologies",
    latestNewsTitle: "Latest News",
    viewAll: "View All",
    partnersTitle: "Our Partners",
    about: {
      title: "About PIC",
      established: "Established: 2022, Tokyo",
      supported: "Supported by Japanese Cabinet Office, MEXT, and METI",
      mission:
        "Our mission is to address Japan's core societal challenges through integrated policy-technology-industry innovation",
    },
  },
  ja: {
    heroTitle: "三位一体のイノベーションサイクルの構築",
    heroSubtitle: "政策・技術・産業を統合し、日本の社会的課題に対応",
    learnMore: "詳細を見る",
    viewDetails: "詳細を表示",
    exploreMore: "もっと探る",
    discoverNow: "今すぐ発見",
    businessModulesTitle: "事業の中核モジュール",
    policyDesignTitle: "政策設計・シミュレーション",
    policyDesignDesc: "日本固有の社会構造に合わせた動的政策モデルの開発",
    collaborationTitle: "産学官連携",
    collaborationDesc: "企業、学術機関、政府機関間のパートナーシップの構築",
    innovationHubTitle: "グローバルイノベーションハブの開発",
    innovationHubDesc: "最先端技術のための社会実装センターの設立",
    latestNewsTitle: "最新ニュース",
    viewAll: "すべて見る",
    partnersTitle: "パートナー",
    about: {
      title: "PICについて",
      established: "設立: 2022年、東京",
      supported: "内閣府、文部科学省、経済産業省の支援により運営",
      mission:
        "私たちの使命は、統合された政策・技術・産業のイノベーションを通じて日本の社会的課題に対応することです",
    },
  },
};

// Sample news data
const newsItems = [
  {
    id: 1,
    date: "2025-05-20",
    title: {
      en: "PIC Partners with Fukushima Robot Test Field for Disaster-Response Robotics",
      ja: "PICが福島ロボットテストフィールドと災害対応ロボティクスのために提携",
    },
    summary: {
      en: "New partnership aims to develop comprehensive policy frameworks for emergency response automation.",
      ja: "新たな提携は、緊急対応自動化のための包括的な政策フレームワークの開発を目指します。",
    },
  },
  {
    id: 2,
    date: "2025-05-15",
    title: {
      en: "White Paper Released: Technological Solutions for Aging Infrastructure",
      ja: "白書発表：老朽化インフラのための技術的解決策",
    },
    summary: {
      en: "Our latest research explores how Toray Industries' carbon fiber technology can address Japan's aging infrastructure challenges.",
      ja: "最新の研究では、東レ工業の炭素繊維技術が日本の老朽化インフラの課題にどのように対応できるかを探っています。",
    },
  },
  {
    id: 3,
    date: "2025-05-10",
    title: {
      en: "PIC Advises on Digital Garden City Nation Initiative",
      ja: "PICがデジタル田園都市国家構想について助言",
    },
    summary: {
      en: "Collaboration with the Ministry of Internal Affairs aims to bridge digital divide in rural communities.",
      ja: "総務省との協力により、農村地域のデジタルデバイドの解消を目指します。",
    },
  },
];

// Sample partners data
const partners = [
  { name: "METI", logo: "/images/logo1.png" },
  { name: "MEXT", logo: "/images/logo2.png" },
  { name: "Cabinet Office", logo: "/images/logo3.png" },
  { name: "Denso", logo: "/images/logo4.png" },
  { name: "Tokyo Tech", logo: "/images/logo5.png" },
];

// 轮播图数据
const carouselSlides = [
  {
    image: "/carousel/01.jpg",
    title: {
      en: "Building a Trinity Innovation Cycle",
      ja: "三位一体のイノベーションサイクルの構築",
    },
    subtitle: {
      en: "Integrating Policy-Technology-Industry to Address Japan's Core Societal Challenges",
      ja: "政策・技術・産業を統合し、日本の社会的課題に対応",
    },
    buttonText: {
      en: "Learn More",
      ja: "詳細を見る",
    },
    link: "/about",
  },
  {
    image: "/carousel/02.jpg",
    title: {
      en: "Pioneering Policy Innovation",
      ja: "政策イノベーションの先駆け",
    },
    subtitle: {
      en: "Creating frameworks that enable technological solutions for societal challenges",
      ja: "社会的課題に対する技術的解決策を可能にするフレームワークの創造",
    },
    buttonText: {
      en: "View Details",
      ja: "詳細を表示",
    },
    link: "/business",
  },
  {
    image: "/carousel/03.jpg",
    title: {
      en: "Global Collaboration Network",
      ja: "グローバル連携ネットワーク",
    },
    subtitle: {
      en: "Connecting Japanese innovation with global expertise and resources",
      ja: "日本のイノベーションをグローバルな専門知識とリソースで繋ぐ",
    },
    buttonText: {
      en: "Explore More",
      ja: "もっと探る",
    },
    link: "/achievements",
  },
];

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  // Format date based on language
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (language === "ja") {
      return `${date.getFullYear()}年${
        date.getMonth() + 1
      }月${date.getDate()}日`;
    }
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <>
      {/* 轮播图部分 */}
      <section>
        <Carousel slides={carouselSlides} language={language} />
      </section>

      {/* About Section */}
      <section className="py-16 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              {t.about.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="mb-2">
                  <strong>{t.about.established}</strong>
                </p>
                <p className="mb-4">{t.about.supported}</p>
                <p>{t.about.mission}</p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/modules/ds.jpg"
                  alt="PIC Office"
                  width={400}
                  height={300}
                  className="rounded-lg shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Modules Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">
            {t.businessModulesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Module 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="h-48 bg-primary/10 relative">
                <Image
                  src="/patterns/1.png"
                  alt="Policy Design & Simulation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {t.policyDesignTitle}
                </h3>
                <p className="text-gray-600">{t.policyDesignDesc}</p>
                <Link
                  href="/business#policy-design"
                  className="inline-block mt-4 text-secondary hover:text-secondary/80 font-medium"
                >
                  {t.learnMore} →
                </Link>
              </div>
            </div>

            {/* Module 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="h-48 bg-primary/10 relative">
                <Image
                  src="/patterns/2.png"
                  alt="Industry-Academia-Government Collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {t.collaborationTitle}
                </h3>
                <p className="text-gray-600">{t.collaborationDesc}</p>
                <Link
                  href="/business#collaboration"
                  className="inline-block mt-4 text-secondary hover:text-secondary/80 font-medium"
                >
                  {t.learnMore} →
                </Link>
              </div>
            </div>

            {/* Module 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="h-48 bg-primary/10 relative">
                <Image
                  src="/patterns/3.png"
                  alt="Global Innovation Hub Development"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {t.innovationHubTitle}
                </h3>
                <p className="text-gray-600">{t.innovationHubDesc}</p>
                <Link
                  href="/business#innovation-hub"
                  className="inline-block mt-4 text-secondary hover:text-secondary/80 font-medium"
                >
                  {t.learnMore} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-primary">
              {t.latestNewsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <p className="text-gray-500 mb-2">{formatDate(item.date)}</p>
                  <h3 className="text-xl font-bold mb-2 text-primary">
                    {item.title[language]}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.summary[language]}</p>
                  <Link
                    href={`/news/${item.id}`}
                    className="text-secondary hover:text-secondary/80 font-medium"
                  >
                    {t.learnMore} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">
            {t.partnersTitle}
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="relative w-32 h-32 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
