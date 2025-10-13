import React, { useState } from 'react';
import { ResumeModal } from '../ResumeModal';

interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: React.ReactNode;
  hoverColor: string;
}

interface MonitorOverlayProps {
  isVisible: boolean;
  onClose: () => void;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/Haaziq-code',
    hoverColor: '#915EFF',
    icon: (
      <svg width="32" height="32" fill="#333" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/haaziq-aamir',
    hoverColor: '#915EFF',
    icon: (
      <svg width="32" height="32" fill="#0077b5" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    id: 'resume',
    label: 'Resume PDF',
    url: '/Resume_2025.pdf',
    hoverColor: '#915EFF',
    icon: (
      <svg width="32" height="32" fill="#d32f2f" viewBox="0 0 24 24">
        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
      </svg>
    )
  }
];

const WindowsDesktopIcon: React.FC<SocialLink & { onResumeClick?: () => void }> = ({ 
  label, 
  url, 
  icon, 
  onResumeClick 
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (label === 'Resume PDF' && onResumeClick) {
      onResumeClick();
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (label === 'Resume PDF' && onResumeClick) {
      onResumeClick();
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '8px',
        borderRadius: '4px',
        transition: 'all 0.2s',
        width: '80px',
        textAlign: 'center'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
      }}
    >
      {/* Icon Container */}
      <div
        style={{
          width: '48px',
          height: '48px',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
          border: '1px solid rgba(0, 0, 0, 0.1)'
        }}
      >
        <div style={{ color: '#333', width: '32px', height: '32px' }}>
          {icon}
        </div>
      </div>
      
      {/* Label */}
      <span
        style={{
          color: 'white',
          fontSize: '12px',
          fontWeight: '400',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
          lineHeight: '1.2',
          wordWrap: 'break-word'
        }}
      >
        {label}
      </span>
    </div>
  );
};

export const MonitorOverlay: React.FC<MonitorOverlayProps> = ({
  isVisible,
  onClose
}) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  if (!isVisible) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleResumeClick = () => {
    setIsResumeOpen(true);
  };

  const handleResumeClose = () => {
    setIsResumeOpen(false);
  };

  return (
    <>
      <div 
        className="windows-desktop"
        onClick={handleOverlayClick}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&h=1080&fit=crop&crop=center") center/cover',
          backgroundColor: '#0078d4',
          zIndex: 99999,
          fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
          animation: 'screenTransition 0.8s ease-out forwards',
          overflow: 'hidden',
          pointerEvents: 'auto'
        }}
      >
        {/* Large Windows Logo Watermark */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.1,
            pointerEvents: 'none'
          }}
        >
          <svg width="400" height="400" viewBox="0 0 24 24" fill="white">
            <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
          </svg>
        </div>

        {/* Windows Loading Screen */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
            animation: 'fadeOut 1s ease-out 0.5s forwards',
            opacity: 1,
            zIndex: 10
          }}
        >
          {/* Windows Logo */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginBottom: '30px' 
          }}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="white" style={{
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))'
            }}>
              <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
            </svg>
          </div>
          
          <div style={{ fontSize: '28px', marginBottom: '20px', fontWeight: '300', textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
            Haaziq's Desktop
          </div>
          <div style={{ 
            width: '250px', 
            height: '4px', 
            background: 'rgba(255,255,255,0.3)', 
            borderRadius: '2px',
            overflow: 'hidden',
            margin: '0 auto',
            boxShadow: '0 0 10px rgba(255,255,255,0.3)'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, #60a5fa, #93c5fd, white)',
              borderRadius: '2px',
              animation: 'loadingBar 1s ease-out forwards',
              boxShadow: '0 0 10px rgba(255,255,255,0.8)'
            }}></div>
          </div>
        </div>

        {/* Windows Taskbar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '48px',
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 12px',
            animation: 'slideUp 0.8s ease-out 1s forwards',
            transform: 'translateY(100%)'
          }}
        >
          {/* Start Button */}
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '4px',
              padding: '8px 12px',
              color: 'white',
              fontSize: '14px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
            </svg>
            Start
          </button>

          {/* Time */}
          <div style={{ marginLeft: 'auto', color: 'white', fontSize: '14px' }}>
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>

        {/* Desktop Icons */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
          }}
        >
          {SOCIAL_LINKS.map((link) => (
            <div key={link.id} className="desktop-icon" style={{ opacity: 0 }}>
              <WindowsDesktopIcon {...link} onResumeClick={handleResumeClick} />
            </div>
          ))}
        </div>

        {/* Close Button (X) */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.2)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            color: 'white',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 0, 0, 0.7)';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          ×
        </button>
      </div>

      {/* Resume Modal */}
      <ResumeModal
        isVisible={isResumeOpen}
        onClose={handleResumeClose}
      />
    </>
  );
};