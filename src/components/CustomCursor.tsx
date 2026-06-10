/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from 'react';
import { CyberTheme } from '../types';

interface CustomCursorProps {
  currentTheme: CyberTheme;
}

export default function CustomCursor({ currentTheme }: CustomCursorProps) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Target values for smooth lerp interpolation
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if device supports fine hover (desktop vs touch)
    const touchCheck = window.matchMedia('(pointer: coarse)').matches;
    setIsTouchDevice(touchCheck);
    if (touchCheck) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
      setIsHidden(false);
    };

    const handleMouseLeaveWindow = () => {
      setIsHidden(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Event Delegation to detect hover trigger fields
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.closest('[role="button"]') ||
        target.closest('[data-cursor="hover"]');

      if (isInteractive) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    // Lerp loop for ultra-smooth floating lag effect
    const updateCursorPosition = () => {
      const ease = 0.15; // smooth inertia speed
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;

      setPosition({ x: currentPos.current.x, y: currentPos.current.y });
      requestRef.current = requestAnimationFrame(updateCursorPosition);
    };

    requestRef.current = requestAnimationFrame(updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  if (isTouchDevice || isHidden) return null;

  return (
    <>
      {/* Main Core Dot */}
      <div
        id="cyber-cursor-core"
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50 mix-blend-screen -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isClicking ? 0.7 : isHovered ? 1.5 : 1})`,
          backgroundColor: currentTheme.accent,
          boxShadow: `0 0 10px ${currentTheme.accent}, 0 0 20px ${currentTheme.secondary}`,
        }}
      />

      {/* Cybernetic Geometric Reticle Ring */}
      <div
        id="cyber-cursor-ring"
        className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isClicking ? 0.9 : isHovered ? 2.0 : 1}) rotate(${isHovered ? '45deg' : '0deg'})`,
          borderColor: isHovered ? currentTheme.secondary : 'rgba(255, 255, 255, 0.2)',
          boxShadow: isHovered ? `0 0 15px ${currentTheme.glowColor}` : 'none',
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.03)' : 'transparent',
        }}
      >
        {/* Futuristic Corner Indicators on Cursor Ring when hovering */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center animate-pulse">
            <span
              className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l"
              style={{ borderColor: currentTheme.accent }}
            />
            <span
              className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r"
              style={{ borderColor: currentTheme.accent }}
            />
            <span
              className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l"
              style={{ borderColor: currentTheme.accent }}
            />
            <span
              className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r"
              style={{ borderColor: currentTheme.accent }}
            />
          </div>
        )}
      </div>
    </>
  );
}
