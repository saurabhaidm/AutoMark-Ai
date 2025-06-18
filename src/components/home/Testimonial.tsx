import React, { useState } from "react";

const faqs = [
  {
    question: "What is AutoMarkAI and how can it help my business grow?",
    answer: "AutoMarkAI helps automate your digital marketing for faster growth and less manual effort.",
  },
  {
    question:
      "Which marketing channels does AutoMarkAI support (SEO, PPC, Social Media, etc.)?",
    answer: "It supports SEO, PPC, Email, and Social Media automation.",
  },
  {
    question: "How does AutoMarkAI use AI to automate my marketing campaigns?",
    answer: "It uses AI to analyze, optimize, and schedule marketing tasks intelligently.",
  },
  {
    question: "Is AutoMarkAI easy to use for beginners or small businesses?",
    answer: "Yes, it’s beginner-friendly with a simple and intuitive UI.",
  },
  {
    question: "How much does AutoMarkAI cost, and what pricing plans are available?",
    answer: "It offers Free, Starter, and Enterprise plans with no hidden costs.",
  },
  {
    question: "Can I integrate AutoMarkAI with my existing tools and platforms?",
    answer: "Yes, it supports integrations with popular CRMs and analytics tools.",
  },
];

const TestimonialAndFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#e8f1fc] dark:bg-[#030B20] text-black dark:text-white px-4 py-16 md:px-20 transition-colors duration-300">
      {/* Testimonials Section */}
      <div className="text-center mb-12 flex flex-col items-center">
<div className=" w-1/2">
        <h2 className="text-4xl font-semibold">Loved by designers and developers across the planet</h2>

</div>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Here's what people are saying about Launch UI
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {Array.from({ length: 3 }).map((_, row) => (
          <>
            <div className="bg-gray-400/10 dark:bg-[#0A1226] rounded-xl p-4 shadow-sm hover:scale-105 transition-transform duration-300">
              <p className="font-medium">Esme Rothschild</p>
              <p className="text-sm text-gray-500">@EsmeOnChart</p>
              <p className="text-sm mt-2 text-blue-600">Testimonial content</p>
            </div>
             <div className="bg-gray-400/10 dark:bg-[#0A1226]  rounded-xl p-4 shadow-sm hover:scale-105 transition-transform duration-300">

              <p className="font-medium">Darius Flynn</p>
              <p className="text-sm text-gray-500">@flynn</p>
              <p className="text-sm mt-2 text-blue-600">Testimonial content</p>
            </div>
          <div className="bg-gray-400/10 dark:bg-[#0A1226]  rounded-xl p-4 shadow-sm hover:scale-105 transition-transform duration-300">

              <p className="font-medium">Kai Nakamura</p>
              <p className="text-sm text-gray-500">@KaiOnWaves</p>
              <p className="text-sm mt-2 text-blue-600">Testimonial content</p>
            </div>
          </>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8">Questions and Answers</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-600/10 dark:bg-[#1e1e1e] rounded-lg shadow-md overflow-hidden transition-all"
            >
              <button
                className="w-full text-left px-4 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-700 dark:text-gray-300 text-sm">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialAndFAQSection;
