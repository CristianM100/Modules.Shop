"use client"

import { useState } from "react";

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy! Simply create an account, browse our course catalog, and enroll in any course that interests you. You'll get immediate access to all course materials after enrollment.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
  },
  {
    question: "Do courses have an expiration date?",
    answer:
      "No, once you purchase a course, you have lifetime access to the content. You can learn at your own pace and revisit the materials whenever you need to.",
  },
  {
    question: "Are certificates provided upon completion?",
    answer:
      "Yes! Upon successful completion of a course, you'll receive a certificate that you can download and share on your professional networks.",
  },
  {
    question: "What if I'm not satisfied with a course?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, contact our support team within 30 days for a full refund.",
  },
  {
    question: "How can I get help if I'm stuck?",
    answer:
      "Each course has a dedicated discussion forum where you can ask questions. Our instructors and community members are always ready to help you succeed.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left"
            >
              <h3 className="text-xl font-semibold p-3 bg-gray-100 rounded hover:bg-gray-200 transition">
                {faq.question}
              </h3>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 px-3">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;

