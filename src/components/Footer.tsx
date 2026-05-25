import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'rgba(15, 23, 42, 0.9)',
      borderTop: '1px solid var(--border-color)',
      padding: '40px 0 20px',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          <div>
            <h4 style={{ color: '#fff', marginBottom: '20px' }}>SmartToolkit.space</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Your premium all-in-one free online toolkit.
            </p>
          </div>
          <div>
            <h4 style={{ color: '#fff', marginBottom: '20px' }}>Tools</h4>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '10px' }}><Link to="/tools/word-counter" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Word Counter</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/tools/password-generator" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Password Generator</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/tools/color-picker" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Color Picker</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#fff', marginBottom: '20px' }}>Legal</h4>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '10px' }}><Link to="/privacy-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Privacy Policy</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/terms" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Terms of Service</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About Us</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact</Link></li>
            </ul>
          </div>
        </div>
        <div style={{
          textAlign: 'center',
          paddingTop: '20px',
          borderTop: '1px solid var(--border-color)',
          fontSize: '0.9rem',
          color: 'var(--text-secondary)'
        }}>
          &copy; {currentYear} SmartToolkit.space. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
