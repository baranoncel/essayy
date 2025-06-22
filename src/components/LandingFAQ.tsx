'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const landingFAQData: FAQItem[] = [
  {
    id: 'what-is-essayy',
    question: 'What is Essayy and how does it work?',
    answer: 'Essayy is an AI-powered essay writing platform that helps you create high-quality essays, research papers, and academic content. Simply provide your topic, choose your essay type and length, and our AI generates well-structured, original content tailored to your requirements.'
  },
  {
    id: 'is-it-free',
    question: 'Is Essayy free to use?',
    answer: 'Yes! Essayy offers a free plan that includes basic essay generation. For unlimited essays, advanced features like AI humanizer, plagiarism checking, and citation generation, you can upgrade to our premium plans.'
  },
  {
    id: 'essay-types',
    question: 'What types of essays can I generate?',
    answer: 'Essayy can generate all major essay types including argumentative, persuasive, analytical, narrative, descriptive, expository, compare and contrast, cause and effect essays, research papers, and college application essays.'
  },
  {
    id: 'ai-detection',
    question: 'Will my essay be detected as AI-generated?',
    answer: 'Our AI Humanizer feature transforms AI-generated content to sound more natural and human-like, significantly reducing detectability. We also provide an AI Content Detector to help you check your content before submission.'
  },
  {
    id: 'originality',
    question: 'Is the content original and plagiarism-free?',
    answer: 'Yes, our AI generates completely original content based on your specific requirements. Premium plans include a built-in plagiarism checker to verify originality and ensure your content is unique.'
  },
  {
    id: 'academic-integrity',
    question: 'Is using AI for essays ethical?',
    answer: 'We recommend using Essayy as a research and brainstorming tool to help you understand topics and structure your thoughts. Always check your institution\'s policies and use AI responsibly as a writing assistant, not a replacement for your own critical thinking.'
  },
  {
    id: 'citation-support',
    question: 'Does Essayy handle citations and references?',
    answer: 'Yes! Our AI can automatically include proper citations in your preferred style (APA, MLA, Chicago, Harvard, etc.) and generate a complete bibliography. We also offer a separate citation generator tool.'
  },
  {
    id: 'essay-length',
    question: 'How long can my essays be?',
    answer: 'Free users can generate essays up to 500 words. Premium users can create essays ranging from 250 to 5000+ words, perfect for everything from short assignments to comprehensive research papers.'
  }
];

function FAQAccordionItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-base font-semibold text-gray-900 pr-4">{item.question}</h3>
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-700 leading-relaxed text-sm">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function LandingFAQ() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Get answers to the most common questions about Essayy
          </p>
        </div>

        <div className="grid gap-4 mb-8">
          {landingFAQData.map((item) => (
            <FAQAccordionItem key={item.id} item={item} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Have more questions? Check out our comprehensive FAQ page.
          </p>
          <Link
            href="/faq"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All FAQs
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
            <div className="text-sm text-gray-600">Essay Types</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">10+</div>
            <div className="text-sm text-gray-600">Citation Styles</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
            <div className="text-sm text-gray-600">AI Availability</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">99%</div>
            <div className="text-sm text-gray-600">Originality Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
} 