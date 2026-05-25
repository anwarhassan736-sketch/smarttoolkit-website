import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ToolCard } from '../components/ToolCard';
import { Type, KeyRound, Palette, Hash } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SmartToolkit.space - Free Online Premium Tools</title>
        <meta name="description" content="Discover SmartToolkit.space, your premium hub for free online tools. Word counters, password generators, color pickers, and more. Fast, secure, and easy to use." />
        <link rel="canonical" href="https://smarttoolkit.space/" />
      </Helmet>

      {/* Background Glow Effects */}
      <div className="bg-glow"></div>
      <div className="bg-glow-2"></div>

      <section className="hero" style={{ textAlign: 'center', padding: '60px 0', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Your Premium Hub for Free Online Tools</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Access high-quality utilities without installing anything. Fast, secure, and beautifully designed. Designed to boost your productivity in a single click.
        </p>
        <a href="#tools" className="btn">Explore All Tools</a>
      </section>

      <section id="tools" style={{ marginTop: '40px' }}>
        <h2>Popular Tools</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
          marginTop: '40px'
        }}>
          
          <ToolCard 
            icon={<Type size={32} />}
            title="Word & Character Counter"
            description="Instantly count words, characters, sentences, and paragraphs in real-time as you type."
            link="/tools/word-counter"
          />

          <ToolCard 
            icon={<KeyRound size={32} />}
            title="Strong Password Generator"
            description="Create secure, highly complex passwords locally in your browser. Nothing is sent to our servers."
            link="/tools/password-generator"
          />

          <ToolCard 
            icon={<Palette size={32} />}
            title="Color Picker & Converter"
            description="Pick beautiful colors and convert between HEX, RGB, and HSL formats seamlessly."
            link="/tools/color-picker"
          />

          <ToolCard 
            icon={<Hash size={32} />}
            title="Base64 Encoder/Decoder"
            description="Quickly encode text to Base64 format or decode Base64 back to readable text."
            link="/tools/base64-encoder"
          />

        </div>
      </section>

      <section className="seo-content" style={{ marginTop: '80px' }}>
        <h2>Why Choose SmartToolkit?</h2>
        <p>SmartToolkit.space provides an ever-growing collection of premium, free online utilities designed for speed and reliability. Whether you are a student, developer, or professional, our tools are built to help you accomplish tasks quickly directly from your browser.</p>
        
        <h3>100% Free & Secure</h3>
        <p>We believe essential tools should be accessible to everyone. Our platform is completely free to use. Furthermore, tools like the password generator operate entirely on the client-side (in your browser), meaning your data is never sent to our servers or stored anywhere. Your privacy is our priority.</p>
        
        <h3>Beautiful & Fast</h3>
        <p>Unlike other clunky utility sites, SmartToolkit focuses on a premium user experience with modern design principles. No slow loading times, just instant results when you need them.</p>
      </section>
    </>
  );
};
