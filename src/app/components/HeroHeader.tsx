'use client';

import { motion } from 'motion/react';
import { BrawnFoxLogo } from './BrawnFoxLogo';
import { FloatingOrb } from './Shared';
import {
  GOLD, GOLD_BRIGHT, GOLD_DIM, SAGE, SAGE_BRIGHT, COPPER, COPPER_BRIGHT,
  SUB, LABEL, PAGE_BG,
} from '../tokens';

export function HeroHeader() {
  return (
    <header style={{
      position: 'relative', overflow: 'hidden',
      background: `radial-gradient(ellipse at 10% 60%, rgba(196,120,72,0.12) 0%, transparent 55%), radial-gradient(ellipse at 90% 20%, rgba(110,139,110,0.08) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.07) 0%, transparent 50%), ${PAGE_BG}`,
      borderBottom: `1px solid rgba(201,168,76,0.25)`,
      padding: '36px 64px',
    }}>
      <FloatingOrb x="70%" y="-20%" size={300} color={COPPER} delay={1} />
      <FloatingOrb x="85%" y="40%"  size={200} color={SAGE}   delay={3} />

      {/* Circuit lines — top right */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, opacity: 0.10, pointerEvents: 'none' }}>
        <svg width="200" height="200" fill="none">
          <line x1="200" y1="0"  x2="200" y2="80" stroke={COPPER} strokeWidth="1"/>
          <line x1="200" y1="80" x2="140" y2="80" stroke={COPPER} strokeWidth="1"/>
          <line x1="140" y1="80" x2="140" y2="40" stroke={COPPER} strokeWidth="1"/>
          <line x1="140" y1="40" x2="100" y2="40" stroke={COPPER} strokeWidth="1"/>
          <circle cx="140" cy="80" r="3" fill={COPPER}/>
          <circle cx="140" cy="40" r="2" fill={COPPER}/>
        </svg>
      </div>

      {/* Circuit lines — bottom left */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 180, height: 140, opacity: 0.08, pointerEvents: 'none' }}>
        <svg width="180" height="140" fill="none">
          <line x1="0" y1="140" x2="0"  y2="60" stroke={SAGE} strokeWidth="1"/>
          <line x1="0" y1="60"  x2="60" y2="60" stroke={SAGE} strokeWidth="1"/>
          <line x1="60" y1="60" x2="60" y2="100" stroke={SAGE} strokeWidth="1"/>
          <circle cx="60" cy="60" r="3" fill={SAGE}/>
        </svg>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Left */}
        <div className="flex flex-col gap-5">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <BrawnFoxLogo width={172} />
          </motion.div>
          <motion.div className="flex flex-col gap-2" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-5">
              <h1 className="hero-title" style={{ fontSize: 42, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 300 }}>
                Georgia Collection
              </h1>
              <span style={{ color: COPPER_BRIGHT, fontSize: 13, letterSpacing: '0.35em', textTransform: 'uppercase' }}>
                Campaign Performance
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-5">
              <span style={{ color: SUB, fontSize: 14, letterSpacing: '0.2em' }}>March 24 – April 13, 2026</span>
              <span style={{ color: GOLD_DIM }}>·</span>
              <span style={{ color: SUB, fontSize: 14, letterSpacing: '0.2em' }}>15 Days</span>
              <span style={{ color: GOLD_DIM }}>·</span>
              <span style={{ color: SUB, fontSize: 14, letterSpacing: '0.2em' }}>Meta Ads + Klaviyo</span>
            </div>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div className="flex flex-col items-start lg:items-end gap-5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            border: `1px solid ${SAGE}50`,
            background: `rgba(110,139,110,0.08)`,
            padding: '6px 14px',
            boxShadow: `0 0 20px ${SAGE}15`,
          }}>
            <div className="status-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: SAGE, flexShrink: 0 }} />
            <span style={{ color: SAGE_BRIGHT, fontSize: 12, letterSpacing: '0.28em', textTransform: 'uppercase' }}>Campaign Concluded</span>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              { label: 'Unique Reach', value: '40,376', color: GOLD_BRIGHT   },
              { label: 'Impressions',  value: '83,526', color: COPPER_BRIGHT },
              { label: 'Add-to-Cart',  value: '205',    color: SAGE_BRIGHT   },
            ].map((s) => (
              <div key={s.label} className="text-left lg:text-right">
                <p style={{ color: LABEL, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{s.label}</p>
                <p style={{ color: s.color, fontFamily: 'ui-monospace, monospace', fontSize: 26, marginTop: 3, textShadow: `0 0 18px ${s.color}60` }}>{s.value}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            {[
              { label: 'Meta Ads',      color: COPPER },
              { label: 'Klaviyo Email', color: SAGE   },
            ].map((ch) => (
              <div key={ch.label} style={{
                border: `1px solid ${ch.color}35`,
                background: `${ch.color}08`,
                padding: '6px 16px', fontSize: 12, color: ch.color, letterSpacing: '0.25em', textTransform: 'uppercase',
              }}>
                {ch.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${COPPER}50, ${GOLD_BRIGHT}80, ${SAGE}50, transparent)` }} />
    </header>
  );
}
