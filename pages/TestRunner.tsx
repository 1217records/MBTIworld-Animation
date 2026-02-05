
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { THEMES, CONTENTS } from '../data';
import { MBTI_Value } from '../types';

const TestRunner: React.FC = () => {
  const { themeId } = useParams<{ themeId: string }>();
  const navigate = useNavigate();
  const theme = themeId ? THEMES[themeId] : null;
  const content = themeId ? CONTENTS[themeId] : null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<MBTI_Value[]>([]);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (!theme || !content) {
      navigate('/select');
    }
  }, [theme, content, navigate]);

  if (!theme || !content) return null;

  const currentQuestion = content.questions[currentIndex];
  const progress = ((currentIndex + 1) / content.questions.length) * 100;

  const handleSelect = (value: MBTI_Value) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = value;
    setAnswers(newAnswers);

    if (currentIndex < content.questions.length - 1) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setAnimating(false);
      }, 300);
    } else {
      // Calculate Result
      const counts: Record<string, number> = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
      newAnswers.forEach(ans => counts[ans]++);
      
      const type = [
        counts.E >= counts.I ? 'E' : 'I',
        counts.S >= counts.N ? 'S' : 'N',
        counts.T >= counts.F ? 'T' : 'F',
        counts.J >= counts.P ? 'J' : 'P',
      ].join('');

      navigate(`/result?theme=${themeId}&type=${type}`);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500">
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-bold text-gray-400">
          <span>{theme.label} 테스트</span>
          <span>{currentIndex + 1} / {content.questions.length}</span>
        </div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${theme.gradient} transition-all duration-500 ease-out`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className={`space-y-8 transition-all duration-300 ${animating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
        <h2 className="text-2xl sm:text-3xl font-black font-serif text-[#16324f] leading-snug">
          {currentQuestion.prompt}
        </h2>

        <div className="grid gap-4">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(option.value)}
              className="w-full p-6 text-left rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#16324f]/30 hover:shadow-md transition-all active:scale-[0.98] flex items-center gap-4 group"
            >
              <div className="w-8 h-8 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center text-xs font-bold text-gray-400 group-hover:bg-[#16324f] group-hover:text-white group-hover:border-[#16324f] transition-colors">
                {idx === 0 ? 'A' : 'B'}
              </div>
              <span className="flex-1 font-medium text-gray-700 leading-relaxed">
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="pt-4 flex justify-between items-center">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="text-sm font-bold text-gray-400 hover:text-[#16324f] disabled:opacity-0 transition-opacity"
        >
          ← 이전 질문으로
        </button>
        <div className="text-[10px] text-gray-300 uppercase tracking-widest font-bold">
          Auto Next on Selection
        </div>
      </div>
    </div>
  );
};

export default TestRunner;
