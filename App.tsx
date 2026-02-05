
import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import TestSelect from './pages/TestSelect';
import TestRunner from './pages/TestRunner';
import Result from './pages/Result';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

const Navbar = () => (
  <nav className="flex items-center justify-center px-6 py-5 bg-white/70 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-50">
    <Link to="/" className="text-2xl font-black font-serif tracking-tighter text-[#16324f]">
      MBTI-world
    </Link>
  </nav>
);

const Footer = () => (
  <footer className="mt-20 py-16 px-6 bg-white border-t border-gray-100">
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
      <div className="flex flex-wrap justify-center gap-8">
        <Link to="/" className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">홈으로</Link>
        <Link to="/about" className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">서비스 소개</Link>
        <Link to="/contact" className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">테스트 제안</Link>
        <Link to="/privacy" className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">개인정보 처리방침</Link>
      </div>
      <div className="text-center space-y-3">
        <p className="text-[11px] text-gray-300 font-bold tracking-[0.2em] uppercase">Your Soul, Reimagined in Anime</p>
        <p className="text-[10px] text-gray-200">© 2026 MBTI-World Archive. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#fdfcf9] bg-pattern flex flex-col">
        <Navbar />
        <main className="flex-1 w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/select" element={<TestSelect />} />
            <Route path="/test/:themeId" element={<TestRunner />} />
            <Route path="/result" element={<Result />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
