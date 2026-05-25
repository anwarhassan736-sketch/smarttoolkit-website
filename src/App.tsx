import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { WordCounter } from './tools/WordCounter';
import { PasswordGenerator } from './tools/PasswordGenerator';

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
