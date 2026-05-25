import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header style={{
      background: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-color)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container header-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
        <Link to="/" className="logo" style={{ fontSize: '1.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', textDecoration: 'none' }}>
          🧠 <span style={{ color: 'var(--accent-primary)' }}>Smart</span>Toolkit
        </Link>
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
            <li><Link to="/" style={{ color: 'var(--text-primary)', fontWeight: 500, textDecoration: 'none' }}>Home</Link></li>
            <li><Link to="/#tools" style={{ color: 'var(--text-primary)', fontWeight: 500, textDecoration: 'none' }}>Tools</Link></li>
            <li><Link to="/about" style={{ color: 'var(--text-primary)', fontWeight: 500, textDecoration: 'none' }}>About</Link></li>
            <li><Link to="/contact" style={{ color: 'var(--text-primary)', fontWeight: 500, textDecoration: 'none' }}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
