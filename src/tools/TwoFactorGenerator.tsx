import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Copy, RefreshCw, ShieldCheck } from 'lucide-react';

export const TwoFactorGenerator: React.FC = () => {
  const [secret, setSecret] = useState('');
  const [copied, setCopied] = useState(false);

  const generateSecret = () => {
    // Base32 alphabet for TOTP secrets
    const base32chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    let newSecret = '';
    for (let i = 0; i < 32; i++) {
      newSecret += base32chars.charAt(Math.floor(Math.random() * base32chars.length));
    }
    setSecret(newSecret);
    setCopied(false);
  };

  // Generate one on initial load
  React.useEffect(() => {
    generateSecret();
  }, []);

  const copyToClipboard = () => {
    if (secret) {
      navigator.clipboard.writeText(secret);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Free 2FA Secret Key Generator - SmartToolkit.space</title>
        <meta name="description" content="Generate a random, secure TOTP 2FA secret key online. No tracking, completely client-side generation for Google Authenticator and other apps." />
      </Helmet>

      <section style={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>2FA Secret Key Generator</h1>
        <p style={{ textAlign: 'center', marginBottom: '40px' }}>Generate a secure, random Base32 secret key for Two-Factor Authentication (TOTP). 100% offline generation.</p>

        <div className="tool-interface" style={{ textAlign: 'center' }}>
          <ShieldCheck size={64} color="var(--accent-secondary)" style={{ margin: '0 auto 20px', opacity: 0.8 }} />
          
          <div className="result-box" style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: '30px', 
            background: 'rgba(15, 23, 42, 0.9)' 
          }}>
            <span style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: '#fff', wordBreak: 'break-all', marginBottom: '20px', letterSpacing: '2px' }}>
              {secret}
            </span>
            <div style={{ display: 'flex', gap: '15px' }}>
              <button className="btn btn-outline" onClick={generateSecret} style={{ padding: '10px 20px' }}>
                <RefreshCw size={20} /> Generate New
              </button>
              <button className="btn" onClick={copyToClipboard} style={{ padding: '10px 20px', backgroundColor: copied ? '#06B6D4' : '' }}>
                {copied ? <span>Copied!</span> : <><Copy size={20} /> Copy Key</>}
              </button>
            </div>
          </div>

          <div style={{ textAlign: 'left', marginTop: '30px', padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>How to use this key?</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              1. Open your 2FA app (like Google Authenticator, Authy, or Microsoft Authenticator).<br/>
              2. Select "Enter a setup key" or "Manual entry".<br/>
              3. Paste the generated 32-character key above into the "Key" or "Secret" field.<br/>
              4. Make sure "Time-based" (TOTP) is selected.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
