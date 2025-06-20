"use client";

import * as React from "react";
import { Paperclip, Sparkles } from "lucide-react";

const Hero1 = () => {
  return (
    <div className="min-h-screen bg-[#0c0414] text-white flex flex-col relative overflow-x-hidden">
      {/* Gradient Background Effects */}
      <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-40rem] right-[-30rem] z-[0] blur-[4rem] skew-[-40deg] opacity-50">
        <div className="w-[10rem] h-[20rem] bg-linear-90 from-white to-blue-300"></div>
        <div className="w-[10rem] h-[20rem] bg-linear-90 from-white to-blue-300"></div>
        <div className="w-[10rem] h-[20rem] bg-linear-90 from-white to-blue-300"></div>
      </div>
      <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-50rem] right-[-50rem] z-[0] blur-[4rem] skew-[-40deg] opacity-50">
        <div className="w-[10rem] h-[20rem] bg-linear-90 from-white to-blue-300"></div>
        <div className="w-[10rem] h-[20rem] bg-linear-90 from-white to-blue-300"></div>
        <div className="w-[10rem] h-[20rem] bg-linear-90 from-white to-blue-300"></div>
      </div>
      <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-60rem] right-[-60rem] z-[0] blur-[4rem] skew-[-40deg] opacity-50">
        <div className="w-[10rem] h-[30rem] bg-linear-90 from-white to-blue-300"></div>
        <div className="w-[10rem] h-[30rem] bg-linear-90 from-white to-blue-300"></div>
        <div className="w-[10rem] h-[30rem] bg-linear-90 from-white to-blue-300"></div>
      </div>

      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center gap-2">
          <img 
            src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=30&h=30&fit=crop&crop=center" 
            width={30} 
            height={30} 
            alt="Logo"
            className="rounded"
          />
          <div className="font-bold text-md">EssayAI</div>
        </div>
        <button className="bg-white text-black hover:bg-gray-200 rounded-full px-4 py-2 text-sm cursor-pointer font-semibold transition-colors">
          Get Started
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex-1 flex justify-center">
            <div className="bg-[#1c1528] rounded-full px-4 py-2 flex items-center gap-2 w-fit mx-4">
              <span className="text-xs flex items-center gap-2">
                <span className="bg-black p-1 rounded-full">🚀</span>
                Introducing AI Essay Writer
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-bold leading-tight">
            Write Stunning Essays Effortlessly
          </h1>

          {/* Subtitle */}
          <p className="text-md text-gray-300">
            AI-powered essay writer that creates high-quality academic content with proper citations and structure.
          </p>

          {/* Search bar */}
          <div className="relative max-w-2xl mx-auto w-full">
            <div className="bg-[#1c1528] rounded-full p-3 flex items-center">
              <button className="p-2 rounded-full hover:bg-[#2a1f3d] transition-all">
                <Paperclip className="w-5 h-5 text-gray-400" />
              </button>
              <button className="p-2 rounded-full hover:bg-[#2a1f3d] transition-all">
                <Sparkles className="w-5 h-5 text-purple-400" />
              </button>
              <input
                type="text"
                placeholder="What essay would you like to write today?"
                className="bg-transparent flex-1 outline-none text-gray-300 pl-4 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Suggestion pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-12 max-w-2xl mx-auto">
            <button className="bg-[#1c1528] hover:bg-[#2a1f3d] rounded-full px-4 py-2 text-sm transition-colors">
              Argumentative essay on climate change
            </button>
            <button className="bg-[#1c1528] hover:bg-[#2a1f3d] rounded-full px-4 py-2 text-sm transition-colors">
              Research paper on AI ethics
            </button>
            <button className="bg-[#1c1528] hover:bg-[#2a1f3d] rounded-full px-4 py-2 text-sm transition-colors">
              Analytical essay on literature
            </button>
            <button className="bg-[#1c1528] hover:bg-[#2a1f3d] rounded-full px-4 py-2 text-sm transition-colors">
              Persuasive essay on education
            </button>
            <button className="bg-[#1c1528] hover:bg-[#2a1f3d] rounded-full px-4 py-2 text-sm transition-colors">
              Compare and contrast essay
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export { Hero1 }; 