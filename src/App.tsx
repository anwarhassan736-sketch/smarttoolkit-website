import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Blog } from './pages/Blog';
import { TwoFactorGenerator } from './tools/TwoFactorGenerator';
import { WordCounterArticle } from './blog/WordCounterArticle';
import { PasswordGeneratorArticle } from './blog/PasswordGeneratorArticle';
import { SpeedTestArticle } from './blog/SpeedTestArticle';
import { TwoFactorArticle } from './blog/TwoFactorArticle';
import { Header } from './components/Header';
import { Blog } from './pages/Blog';

import { Home } from './pages/Home';
import { WordCounter } from './tools/WordCounter';
import { PasswordGenerator } from './tools/PasswordGenerator';
import { SpeedTest } from './tools/SpeedTest';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools/word-counter" element={<WordCounter />} />
            <Route path="/tools/password-generator" element={<PasswordGenerator />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;
