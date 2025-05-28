"use client";

import { useLanguage } from "../../context/LanguageContext";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const translations = {
  en: {
    title: "Contact Us",
    subtitle: "We're here to help and answer any questions you might have",

    // 联系方式部分
    contactInfo: {
      title: "Get in Touch",
      description:
        "Feel free to reach out to us through any of the following channels",
      channels: [
        {
          icon: "email",
          title: "Email Us",
          details: "info@pic-innovation.com",
          description: "For general inquiries and information",
        },
        {
          icon: "phone",
          title: "Call Us",
          details: "+81-3-1234-5678",
          description: "Monday to Friday, 9:00 AM - 6:00 PM JST",
        },
        {
          icon: "location",
          title: "Visit Us",
          details: "Tokyo Innovation Center",
          description: "1-1-1 Marunouchi, Chiyoda-ku, Tokyo",
        },
      ],
    },

    // 联系表单
    contactForm: {
      title: "Send Us a Message",
      description:
        "Complete the form below and we'll respond as soon as possible",
      fields: {
        name: {
          label: "Your Name",
          placeholder: "Enter your full name",
        },
        email: {
          label: "Email Address",
          placeholder: "Enter your email address",
        },
        organization: {
          label: "Organization",
          placeholder: "Enter your company or organization",
        },
        message: {
          label: "Message",
          placeholder: "Please provide details about your inquiry",
        },
      },
      inquiryTypes: [
        "General Inquiry",
        "Partnership Opportunity",
        "Media Request",
        "Career Information",
        "Research Collaboration",
        "Event Information",
        "Other",
      ],
      submitButton: "Submit Message",
      successMessage: "Thank you for your message. We'll respond shortly.",
      errorMessage:
        "There was an error submitting your message. Please try again.",
    },

    // 办公地点
    offices: {
      title: "Our Offices",
      description: "Visit us at any of our locations across Japan",
      locations: [
        {
          name: "Tokyo Headquarters",
          address: "1-1-1 Marunouchi, Chiyoda-ku, Tokyo 100-0005",
          email: "tokyo@pic-innovation.com",
        },
        {
          name: "Osaka Innovation Lab",
          address: "2-2-2 Umeda, Kita-ku, Osaka 530-0001",
          email: "osaka@pic-innovation.com",
        },
      ],
    },

    // 社交媒体
    socialMedia: {
      title: "Connect With Us",
      description: "Follow us on social media for the latest updates",
      platforms: [
        {
          name: "LinkedIn",
          url: "https://linkedin.com",
          icon: "linkedin",
        },
        {
          name: "Twitter",
          url: "https://twitter.com",
          icon: "twitter",
        },
        {
          name: "Facebook",
          url: "https://facebook.com",
          icon: "facebook",
        },
      ],
    },
  },
  ja: {
    title: "お問い合わせ",
    subtitle: "私たちはあなたの質問にお答えし、サポートいたします",

    // 联系方式部分
    contactInfo: {
      title: "お問い合わせ方法",
      description: "以下のいずれかの方法でお気軽にお問い合わせください",
      channels: [
        {
          icon: "email",
          title: "メール",
          details: "info@pic-innovation.com",
          description: "一般的なお問い合わせや情報について",
        },
        {
          icon: "phone",
          title: "お電話",
          details: "+81-9841643062",
          description: "月曜日から金曜日、午前9時から午後6時まで（日本時間）",
        },
        {
          icon: "location",
          title: "訪問",
          details: "東京イノベーションセンター",
          description: "東京都千代田区丸の内1-1-1",
        },
      ],
    },

    // 联系表单
    contactForm: {
      title: "メッセージを送信",
      description:
        "以下のフォームに記入していただければ、できるだけ早くご返信いたします",
      fields: {
        name: {
          label: "お名前",
          placeholder: "フルネームを入力してください",
        },
        email: {
          label: "メールアドレス",
          placeholder: "メールアドレスを入力してください",
        },
        organization: {
          label: "組織名",
          placeholder: "会社名または組織名を入力してください",
        },
        message: {
          label: "メッセージ",
          placeholder: "お問い合わせの詳細を記入してください",
        },
      },
      inquiryTypes: [
        "一般的なお問い合わせ",
        "パートナーシップの機会",
        "メディア関連のリクエスト",
        "採用情報",
        "研究協力",
        "イベント情報",
        "その他",
      ],
      submitButton: "メッセージを送信",
      successMessage:
        "メッセージをお送りいただきありがとうございます。近日中にご返信いたします。",
      errorMessage:
        "メッセージの送信中にエラーが発生しました。もう一度お試しください。",
    },

    // 办公地点
    offices: {
      title: "オフィス所在地",
      description: "日本全国の拠点にお越しください",
      locations: [
        {
          name: "東京本社",
          address: "〒100-0005 東京都千代田区丸の内1-1-1",
          email: "tokyo@pic-innovation.com",
        },
        {
          name: "大阪イノベーションラボ",
          address: "〒530-0001 大阪府大阪市北区梅田2-2-2",
          email: "osaka@pic-innovation.com",
        },
      ],
    },

    // 社交媒体
    socialMedia: {
      title: "ソーシャルメディアでつながる",
      description: "最新情報についてはソーシャルメディアでフォローしてください",
      platforms: [
        {
          name: "LinkedIn",
          url: "https://linkedin.com/company/innovationhub-jp",
          icon: "linkedin",
        },
        {
          name: "Twitter",
          url: "https://twitter.com/innovationhub_jp",
          icon: "twitter",
        },
        {
          name: "Facebook",
          url: "https://facebook.com/innovationhubjp",
          icon: "facebook",
        },
      ],
    },
  },
};

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  // 表单状态
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  // 处理表单输入变化
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 处理表单提交
  const handleSubmit = (e) => {
    e.preventDefault();

    // 这里通常会有API调用来提交表单
    // 模拟成功提交
    setFormStatus({
      submitted: true,
      success: true,
      message: t.contactForm.successMessage,
    });

    // 重置表单
    setFormData({
      name: "",
      email: "",
      organization: "",
      inquiryType: "",
      message: "",
    });
  };

  return (
    <main className="relative bg-gray-50 overflow-hidden">
      {/* 日式风格的装饰元素 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[url('/patterns/jp-dots.png')] bg-repeat opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[url('/patterns/jp-dots.png')] bg-repeat opacity-5"></div>
      
      {/* 日式风格的页面标题区 */}
      <div className="relative bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          {/* 顶部装饰线 */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-gray-300"></div>
            <div className="mx-3 px-6 py-2 border border-gray-200">
              <h1 className="text-2xl font-medium text-gray-900">{t.title}</h1>
            </div>
            <div className="h-px w-16 bg-gray-300"></div>
          </div>
          
          {/* 副标题 */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">{t.subtitle}</p>
          
          {/* 日式风格的装饰图案 */}
          <div className="relative w-16 h-16 mx-auto">
            <div className="absolute inset-0 border-2 border-gray-200 transform rotate-45"></div>
            <div className="absolute inset-2 border border-gray-100 transform rotate-45"></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 联系方式部分 - 日式风格 */}
        <section className="mb-16">
          {/* 日式模块标题 */}
          <div className="flex items-center justify-center mb-10">
            <div className="h-px w-12 bg-gray-300"></div>
            <div className="mx-3 px-6 py-2 border border-gray-200 text-center">
              <h2 className="text-xl font-medium text-gray-900">{t.contactInfo.title}</h2>
            </div>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.contactInfo.channels.map((channel, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 p-6 relative group overflow-hidden"
              >
                {/* 顶部装饰线 */}
                <div className="h-1 w-full bg-gray-100"></div>
                <div className="h-1 w-1/3 bg-blue-400 absolute top-0 left-0"></div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-full mb-4">
                    {channel.icon === "email" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                    {channel.icon === "phone" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    )}
                    {channel.icon === "location" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{channel.title}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-2">{channel.details}</p>
                  <p className="text-gray-600 text-sm">{channel.description}</p>
                  
                  {/* 悬停效果线 */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 联系表单和办公地点 - 日式风格 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          {/* 联系表单 */}
          <section className="md:col-span-3">
            {/* 日式模块标题 */}
            <div className="flex items-center mb-8">
              <div className="h-px w-8 bg-gray-300"></div>
              <div className="mx-3 px-4 py-1 border border-gray-200 text-center">
                <h2 className="text-lg font-medium text-gray-900">{t.contactForm.title}</h2>
              </div>
              <div className="h-px w-8 bg-gray-300"></div>
            </div>
            
            <div className="bg-white border border-gray-100 p-6 relative">
              {/* 装饰元素 */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gray-100 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-gray-100 opacity-50"></div>
              
              {formStatus.submitted ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border-2 border-green-200 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-800 mb-4">{formStatus.message}</p>
                  <button 
                    onClick={() => setFormStatus({submitted: false, success: false, message: ""})}
                    className="text-sm text-blue-600 border border-blue-200 px-4 py-2 hover:bg-blue-50"
                  >
                    {language === 'en' ? 'Send another message' : '別のメッセージを送信する'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                      {t.contactForm.fields.name.label} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t.contactForm.fields.name.placeholder}
                      required
                      className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-blue-400 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                      {t.contactForm.fields.email.label} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t.contactForm.fields.email.placeholder}
                      required
                      className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-blue-400 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="organization">
                      {t.contactForm.fields.organization.label} *
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder={t.contactForm.fields.organization.placeholder}
                      required
                      className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-blue-400 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="inquiryType">
                      {language === 'en' ? 'Inquiry Type' : 'お問い合わせの種類'} *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-blue-400 text-sm"
                    >
                      <option value="" disabled>
                        {language === 'en' ? 'Select an inquiry type' : 'お問い合わせの種類を選択してください'}
                      </option>
                      {t.contactForm.inquiryTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                      {t.contactForm.fields.message.label} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t.contactForm.fields.message.placeholder}
                      required
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-blue-400 text-sm"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 px-4 text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      {t.contactForm.submitButton}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>

          {/* 办公地点 */}
          <section className="md:col-span-2">
            {/* 日式模块标题 */}
            <div className="flex items-center mb-8">
              <div className="h-px w-8 bg-gray-300"></div>
              <div className="mx-3 px-4 py-1 border border-gray-200 text-center">
                <h2 className="text-lg font-medium text-gray-900">{t.offices.title}</h2>
              </div>
              <div className="h-px w-8 bg-gray-300"></div>
            </div>
            
            <div className="space-y-4">
              {t.offices.locations.map((office, index) => (
                <div key={index} className="bg-white border border-gray-100 p-5 relative">
                  {/* 顶部装饰线 */}
                  <div className="h-1 w-full bg-gray-100"></div>
                  <div className="h-1 w-1/4 bg-blue-400 absolute top-0 left-0"></div>
                  
                  <h3 className="text-base font-medium text-gray-900 mb-2 pb-2 border-b border-gray-50">{office.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{office.address}</p>
                  <p className="text-sm text-blue-600">
                    <a href={`mailto:${office.email}`} className="hover:underline">{office.email}</a>
                  </p>
                </div>
              ))}
            </div>
            
            {/* 社交媒体 */}
            <div className="mt-8">
              <h3 className="text-base font-medium text-gray-900 mb-3 pb-2 border-b border-gray-100">{t.socialMedia.title}</h3>
              <div className="flex space-x-4">
                {t.socialMedia.platforms.map((platform, index) => (
                  <a 
                    key={index} 
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-full hover:border-blue-400 hover:text-blue-600 transition-colors"
                  >
                    {platform.icon === "linkedin" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                    )}
                    {platform.icon === "twitter" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                    )}
                    {platform.icon === "facebook" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
        
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