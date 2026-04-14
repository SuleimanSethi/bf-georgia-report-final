'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  GOLD, GOLD_BRIGHT, GOLD_DIM, SAGE, SAGE_BRIGHT, COPPER, COPPER_BRIGHT,
  WARM_TAN, TEAL, TEXT, SUB, LABEL, DECO, CARD_BG,
} from '../tokens';

// ─── useCountUp ────────────────────────────────────────────────────────────────
export function useCountUp(target: number, decimals = 0, duration = 2000) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, decimals, duration]);

  return { value, ref };
}

// ─── Label ─────────────────────────────────────────────────────────────────────
export function Label({ children, color = LABEL }: { children: React.ReactNode; color?: string }) {
  return (
    <p style={{ color, fontSize: 13, letterSpacing: '0.3em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
      {children}
    </p>
  );
}

// ─── SectionTitle ──────────────────────────────────────────────────────────────
export function SectionTitle({ children, color = GOLD_BRIGHT }: { children: React.ReactNode; color?: string }) {
  return (
    <div className="flex items-center gap-3 mb-7">
      <div style={{ position: 'relative', width: 2, height: 18, background: GOLD_DIM, overflow: 'hidden' }}>
        <motion.div
          style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, ${color}, ${GOLD})` }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      <p style={{ color, fontSize: 13, letterSpacing: '0.36em', textTransform: 'uppercase', textShadow: `0 0 20px ${color}80` }}>
        {children}
      </p>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${color}40, transparent)` }} />
    </div>
  );
}

// ─── GlowDivider ───────────────────────────────────────────────────────────────
export function GlowDivider({ color = GOLD }: { color?: string }) {
  return (
    <div style={{ position: 'relative', height: 1 }}>
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, transparent, ${color}50, ${color}90, ${color}50, transparent)` }} />
      <motion.div
        style={{ position: 'absolute', top: -1, width: 80, height: 3, background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
        animate={{ left: ['-10%', '110%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
      />
    </div>
  );
}

// ─── Card ──────────────────────────────────────────────────────────────────────
export function Card({
  children, className = '', accent = GOLD, floatAnim = false, id,
}: {
  children: React.ReactNode; className?: string; accent?: string; floatAnim?: boolean; id?: string;
}) {
  return (
    <motion.div
      id={id}
      className={`relative card-shimmer ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      animate={floatAnim ? { y: [0, -5, 0] } : undefined}
      style={{
        background: `linear-gradient(145deg, ${CARD_BG} 0%, #0C0A08 60%, #090705 100%)`,
        border: `1px solid ${accent}30`,
        boxShadow: `0 0 0 1px ${accent}06, 0 12px 48px rgba(0,0,0,0.5), 0 0 60px ${accent}06`,
        padding: '28px',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: 1, background: `linear-gradient(90deg, transparent, ${accent}70, ${accent}CC, ${accent}70, transparent)` }} />
      <div style={{ position: 'absolute', top: -40, left: -40, width: 200, height: 200, borderRadius: '50%', background: `radial-gradient(circle, ${accent}0A 0%, transparent 70%)`, pointerEvents: 'none' }} />
      {[['top', 'left'], ['top', 'right'], ['bottom', 'left'], ['bottom', 'right']].map(([v, h]) => (
        <div key={`${v}-${h}`} style={{
          position: 'absolute', [v as string]: 0, [h as string]: 0, width: 14, height: 14,
          [`border${(v as string).charAt(0).toUpperCase() + (v as string).slice(1)}`]: `1px solid ${accent}80`,
          [`border${(h as string).charAt(0).toUpperCase() + (h as string).slice(1)}`]: `1px solid ${accent}80`,
        }} />
      ))}
      {children}
    </motion.div>
  );
}

// ─── AnimatedMetric ────────────────────────────────────────────────────────────
export function AnimatedMetric({
  value, prefix = '', suffix = '', decimals = 0, label, sub, accentColor = GOLD_BRIGHT,
}: {
  value: number; prefix?: string; suffix?: string; decimals?: number; label: string; sub?: string; accentColor?: string;
}) {
  const { value: count, ref } = useCountUp(value, decimals);
  return (
    <div ref={ref} className="flex flex-col gap-2">
      <Label color={LABEL}>{label}</Label>
      <motion.div
        className="stat-number"
        style={{
          fontFamily: 'ui-monospace, monospace',
          fontSize: 44,
          color: TEXT,
          letterSpacing: '-0.02em',
          lineHeight: 1,
          textShadow: `0 0 30px ${accentColor}50, 0 0 60px ${accentColor}20`,
        }}
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {prefix}{decimals > 0 ? count.toFixed(decimals) : count.toLocaleString()}{suffix}
      </motion.div>
      {sub && <p style={{ color: SUB, fontSize: 14 }}>{sub}</p>}
    </div>
  );
}

// ─── GlowBar ───────────────────────────────────────────────────────────────────
export function GlowBar({ pct, color = GOLD, delay = 0, height = 4 }: {
  pct: number; color?: string; delay?: number; height?: number;
}) {
  const isGold   = color === GOLD || color === GOLD_BRIGHT;
  const isCopper = color === COPPER || color === COPPER_BRIGHT;
  const isSage   = color === SAGE || color === SAGE_BRIGHT;
  const isTeal   = color === TEAL;
  const glowClass = isGold ? 'bar-glow-gold' : isCopper ? 'bar-glow-copper' : 'bar-glow-sage';
  const gradient = isGold
    ? `linear-gradient(90deg, ${GOLD_DIM}, ${GOLD}, ${GOLD_BRIGHT})`
    : isCopper
    ? `linear-gradient(90deg, #8A4820, ${COPPER}, ${COPPER_BRIGHT})`
    : isSage
    ? `linear-gradient(90deg, #3A5A3A, ${SAGE}, ${SAGE_BRIGHT})`
    : isTeal
    ? `linear-gradient(90deg, #2A5050, ${TEAL}, #60A0A0)`
    : `linear-gradient(90deg, #6A5030, ${WARM_TAN}, #C8A888)`;

  return (
    <div style={{ height, background: DECO, borderRadius: 2, position: 'relative', overflow: 'hidden' }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ delay, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={glowClass}
        style={{ height: '100%', background: gradient, borderRadius: 2 }}
      />
      <motion.div
        initial={{ left: 0, opacity: 0 }}
        animate={{ left: [`0%`, `${pct}%`], opacity: [0, 1, 0] }}
        transition={{ delay: delay + 0.6, duration: 0.7, ease: 'easeOut' }}
        style={{ position: 'absolute', top: 0, width: 20, height: '100%', background: `radial-gradient(ellipse, white 0%, transparent 80%)`, pointerEvents: 'none' }}
      />
    </div>
  );
}

// ─── FloatingOrb ───────────────────────────────────────────────────────────────
export function FloatingOrb({ x, y, size, color, delay = 0 }: {
  x: string; y: string; size: number; color: string; delay?: number;
}) {
  return (
    <motion.div
      style={{
        position: 'absolute', left: x, top: y, width: size, height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color}18 0%, ${color}06 40%, transparent 70%)`,
        pointerEvents: 'none',
      }}
      animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 6 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  );
}

// ─── SpinRing ──────────────────────────────────────────────────────────────────
export function SpinRing({ size, color, duration = 8, reverse = false }: {
  size: number; color: string; duration?: number; reverse?: boolean;
}) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: size, height: size,
        top: '50%', left: '50%',
        x: -size / 2, y: -size / 2,
        borderRadius: '50%',
        border: '1px solid transparent',
        borderTopColor: color,
        borderRightColor: `${color}60`,
        pointerEvents: 'none',
      }}
      animate={{ rotate: reverse ? [0, -360] : [0, 360] }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    />
  );
}
