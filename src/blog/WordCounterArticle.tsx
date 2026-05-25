// src/blog/WordCounterArticle.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

export const WordCounterArticle: React.FC = () => (
  <>
    <Helmet>
      <title>Free Online Word Counter – No Ads, Fast & Accurate | SmartToolkit</title>
      <meta name="description" content="Use our free online word counter to quickly count words, characters, sentences and paragraphs. No ads, no tracking, perfect for writers, students and professionals." />
    </Helmet>
    <section className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Free Online Word Counter</h1>
      <p>Looking for a quick and reliable way to count words, characters, sentences, and paragraphs? Our <strong>free online word counter</strong> does exactly that – instantly, without any advertisements or tracking scripts.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Why Use This Word Counter?</h2>
      <ul className="list-disc ml-6">
        <li>Instant results – no page reloads.</li>
        <li>Supports large texts up to 10 MB.</li>
        <li>Provides detailed statistics: words, characters (with/without spaces), sentences, paragraphs.</li>
        <li>Privacy‑first: all calculations happen locally in your browser.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">How It Works</h2>
      <p>Simply paste or type your text into the box on the <a href="/tools/word-counter" className="text-blue-600 hover:underline">Word Counter tool</a>. The numbers update in real‑time as you write.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Use Cases</h2>
      <p>Authors, students, journalists, and SEO specialists often need accurate word counts for assignments, articles, and meta‑descriptions. This tool helps you stay within limits and optimise content length for search engines.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">SEO Benefits</h2>
      <p>Using a dedicated word counter improves readability scores, which can positively affect <a href="https://developers.google.com/search/docs/beginner/seo-starter-guide" target="_blank" rel="noopener noreferrer">Google SEO rankings</a>. By ensuring you meet recommended word counts, you boost the chance of higher click‑through rates.</p>
      <p className="mt-8">Ready to count? Go to the <a href="/tools/word-counter" className="text-blue-600 hover:underline">Word Counter tool</a> now.</p>
    </section>
  </>
);
