// src/pages/Blog.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const articles = [
  { slug: 'word-counter', title: 'Free Online Word Counter – No Ads, Fast & Accurate' },
  { slug: 'password-generator', title: 'Secure Random Password Generator – No Tracking' },
  { slug: 'speed-test', title: 'Browser Based Internet Speed Test – No Limits' },
  { slug: 'two-factor-generator', title: 'Instant Two‑Factor Authentication (2FA) Secret Key Generator' },
];

export const Blog: React.FC = () => (
  <>
    <Helmet>
      <title>SmartToolkit Blog – Free Online Tools & Guides</title>
      <meta name="description" content="Explore SEO‑optimized tutorials for our free online tools, including word counter, password generator, speed test, and 2FA secret key generator." />
    </Helmet>
    <section className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">SmartToolkit Blog</h1>
      <ul className="space-y-4">
        {articles.map((a) => (
          <li key={a.slug} className="border-b pb-2">
            <Link to={`/blog/${a.slug}`} className="text-blue-500 hover:underline">
              {a.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </>
);
