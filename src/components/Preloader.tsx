'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
  '> initializing system...',
  '> loading modules: [core, ui, network]',
  '> connecting to gabriel.api...',
  '> fetching portfolio data...',
  '> compiling experience...',
  '> rendering interface...',
  '> build complete ✓',
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (currentLine < bootLines.length) {
      const delay = currentLine === bootLines.length - 1 ? 400 : 100 + Math.random() * 150;
      const timer = setTimeout(() => setCurrentLine((prev) => prev + 1), delay);
      return () => clearTimeout(timer);
    } else {
      const exitTimer = setTimeout(() => setIsExiting(true), 300);
      const completeTimer = setTimeout(() => onComplete(), 900);
      return () => {
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [currentLine, onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[9998] flex items-center justify-center"
          style={{ backgroundColor: '#060606' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full max-w-md px-6">
            <div className="mb-6">
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#737373' }}>
                Gabriel Barreto
              </span>
            </div>

            <div className="space-y-1 font-mono text-sm">
              {bootLines.slice(0, currentLine).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    color: i === bootLines.length - 1 ? '#00e87b' : '#737373',
                  }}
                >
                  {line}
                </motion.div>
              ))}
              {currentLine < bootLines.length && (
                <span className="typing-cursor text-sm" />
              )}
            </div>

            <div className="mt-8">
              <div className="h-[2px] w-full overflow-hidden rounded-full" style={{ backgroundColor: '#1a1a1a' }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: '#00e87b' }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${(currentLine / bootLines.length) * 100}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
