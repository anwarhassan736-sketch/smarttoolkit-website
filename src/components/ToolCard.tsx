import React from 'react';
import { Link } from 'react-router-dom';


interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({ icon, title, description, link }) => {
  return (
    <Link to={link} className="tool-card" style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border-color)',
      borderRadius: '16px',
      padding: '24px',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      textDecoration: 'none'
    }}>
      <div className="tool-icon" style={{
        fontSize: '2.5rem',
        marginBottom: '16px',
        background: 'rgba(124, 58, 237, 0.1)',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',
        color: 'var(--accent-secondary)'
      }}>
        {icon}
      </div>
      <h3 style={{ marginBottom: '8px', fontSize: '1.25rem', color: '#fff' }}>{title}</h3>
      <p style={{ fontSize: '0.9rem', marginBottom: '20px', flex: 1, color: 'var(--text-secondary)' }}>
        {description}
      </p>
      <span className="btn btn-outline" style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>
        Use Tool
      </span>
    </Link>
  );
};
