import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Copy, RefreshCw } from 'lucide-react';

export const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    if (charset === '') {
      setPassword('Please select at least one option.');
      return;
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
    setCopied(false);
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  const copyToClipboard = () => {
    if (password && password !== 'Please select at least one option.') {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Strong Password Generator - SmartToolkit.space</title>
        <meta name="description" content="Generate secure, highly complex passwords locally in your browser. 100% free and private." />
      </Helmet>

      <section style={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Strong Password Generator</h1>
        <p style={{ textAlign: 'center', marginBottom: '40px' }}>Create secure passwords instantly. Completely client-side, 100% secure.</p>

        <div className="tool-interface">
          <div className="result-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px', background: 'rgba(15, 23, 42, 0.9)' }}>
            <span style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: '#fff', wordBreak: 'break-all' }}>
              {password}
            </span>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn btn-outline" onClick={generatePassword} style={{ padding: '8px' }} title="Regenerate">
                <RefreshCw size={20} />
              </button>
              <button className="btn" onClick={copyToClipboard} style={{ padding: '8px', backgroundColor: copied ? '#06B6D4' : '' }} title="Copy">
                {copied ? <span style={{ fontSize: '0.8rem', padding: '0 5px' }}>Copied!</span> : <Copy size={20} />}
              </button>
            </div>
          </div>

          <div className="input-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label>Password Length</label>
              <span style={{ color: 'var(--accent-secondary)', fontWeight: 'bold' }}>{length}</span>
            </div>
            <input 
              type="range" 
              min="8" max="64" 
              value={length} 
              onChange={(e) => setLength(parseInt(e.target.value))} 
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '30px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} />
              Uppercase (A-Z)
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="checkbox" checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} />
              Lowercase (a-z)
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} />
              Numbers (0-9)
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} />
              Symbols (!@#$)
            </label>
          </div>
        </div>
      </section>
    </>
  );
};
