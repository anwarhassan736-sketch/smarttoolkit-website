import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export const WordCounter: React.FC = () => {
  const [text, setText] = useState('');
  const [stats, setStats] = useState({
    words: 0,
    characters: 0,
    charactersNoSpaces: 0,
    sentences: 0,
    paragraphs: 0
  });

  useEffect(() => {
    const calculateStats = () => {
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      const characters = text.length;
      const charactersNoSpaces = text.replace(/\s/g, '').length;
      const sentences = text.trim() ? (text.match(/[.!?]+/g) || []).length : 0;
      const paragraphs = text.trim() ? text.split(/\n+/).filter(p => p.trim().length > 0).length : 0;

      setStats({
        words,
        characters,
        charactersNoSpaces,
        sentences: sentences === 0 && text.trim() ? 1 : sentences,
        paragraphs
      });
    };

    calculateStats();
  }, [text]);

  return (
    <>
      <Helmet>
        <title>Word & Character Counter - SmartToolkit.space</title>
        <meta name="description" content="Free online word counter and character counter tool. Instantly count words, characters, sentences, and paragraphs." />
      </Helmet>

      <section style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Word & Character Counter</h1>
        <p style={{ textAlign: 'center', marginBottom: '40px' }}>Type or paste your text below to get instant text statistics.</p>

        <div className="tool-interface">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '15px', marginBottom: '20px' }}>
            <div style={{ background: 'rgba(124, 58, 237, 0.1)', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--accent-secondary)', display: 'block' }}>{stats.words}</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Words</span>
            </div>
            <div style={{ background: 'rgba(124, 58, 237, 0.1)', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--accent-secondary)', display: 'block' }}>{stats.characters}</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Characters</span>
            </div>
            <div style={{ background: 'rgba(124, 58, 237, 0.1)', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--accent-secondary)', display: 'block' }}>{stats.sentences}</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Sentences</span>
            </div>
            <div style={{ background: 'rgba(124, 58, 237, 0.1)', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--accent-secondary)', display: 'block' }}>{stats.paragraphs}</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Paragraphs</span>
            </div>
          </div>

          <textarea 
            placeholder="Type or paste your text here..." 
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ minHeight: '250px' }}
          ></textarea>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Characters without spaces: {stats.charactersNoSpaces}</span>
            <button className="btn btn-outline" onClick={() => setText('')}>Clear Text</button>
          </div>
        </div>
      </section>
    </>
  );
};
