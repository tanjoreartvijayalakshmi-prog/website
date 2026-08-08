"use client";

import { useEffect } from 'react';

export default function ScreenshotBlocker() {
  useEffect(() => {
    // Attempt to clear clipboard on PrintScreen key
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('Screenshots are disabled for premium artworks.');
        alert('Screenshots are disabled to protect the intellectual property of our artists.');
      }
    };

    // Obscure body when window loses focus (like when opening snipping tool)
    const handleBlur = () => {
      document.body.style.filter = 'blur(10px) grayscale(100%)';
    };

    const handleFocus = () => {
      document.body.style.filter = 'none';
    };

    // Prevent dragging images and right clicks
    const handleDragStart = (e: Event) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };

    const handleContextMenu = (e: Event) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };

    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  // Add global CSS to disable user selection
  return (
    <style dangerouslySetInnerHTML={{ __html: `
      body {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    `}} />
  );
}
