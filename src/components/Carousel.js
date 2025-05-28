"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Carousel = ({ slides, language }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // 每5秒切换一次

    return () => clearInterval(interval);
  }, [slides.length]);

  // 手动切换到指定幻灯片
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // 切换到下一张幻灯片
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // 切换到上一张幻灯片
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* 幻灯片 */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* 图片 */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title[language]}
              fill
              className="object-cover"
              priority
            />
            {/* 渐变叠加层，使文字更易读 */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          </div>

          {/* 文字内容 */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-xl relative z-20">
                {/* 装饰元素 */}
                <div className="w-20 h-1.5 bg-secondary mb-6"></div>

                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  {slide.title[language]}
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  {slide.subtitle[language]}
                </p>

                {slide.link && (
                  <Link
                    href={slide.link}
                    className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md font-medium transition duration-300"
                  >
                    {slide.buttonText[language]}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* 导航按钮 */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 transition-all duration-300 shadow-lg"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 transition-all duration-300 shadow-lg"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* 指示器 */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
