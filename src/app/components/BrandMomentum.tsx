'use client';

import { motion } from 'motion/react';
import { BrawnFoxLogo } from './BrawnFoxLogo';
import { FloatingOrb, Label } from './Shared';
import { momentumStats } from '../../data/campaign';
import { GOLD, GOLD_BRIGHT, GOLD_DIM, SAGE, COPPER, COPPER_BRIGHT, SAGE_BRIGHT, PAGE_BG, SUB, LABEL as LABEL_COLOR, DECO } from '../tokens';

export function BrandMomentum() {
  return (
    <section id="section-brand-momentum" style={{
      position: 'relative',
      background: `radial-gradient(ellipse at 20% 100%, rgba(196,120,72,0.10) 0%, transparent 55%),
                   radial-gradient(ellipse at 80% 0%, rgba(110,139,110,0.08) 0%, transparent 55%),
                   radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 60%),
                   ${PAGE_BG}`,
      borderTop: `1px solid rgba(201,168,76,0.22)`,
      padding: '48px 64px',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 1, background: `linear-gradient(90deg, transparent, ${COPPER}60, ${GOLD_BRIGHT}90, ${SAGE}60, transparent)`, boxShadow: `0 0 20px ${GOLD}50` }} />
      <FloatingOrb x="5%"  y="10%" size={300} color={GOLD}   delay={0} />
      <FloatingOrb x="80%" y="40%" size={220} color={COPPER} delay={2} />
      <FloatingOrb x="50%" y="80%" size={180} color={SAGE}   delay={4} />

      {/* Section heading */}
      <div className="flex items-center gap-5 mb-10">
        <BrawnFoxLogo width={143} />
        <div style={{ width: 1, height: 28, background: DECO }} />
        <p style={{ color: LABEL_COLOR, fontSize: 13, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Brand Momentum</p>
        <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${GOLD}20, transparent)` }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div className="status-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: SAGE }} />
          <span style={{ color: SAGE, fontSize: 10, letterSpacing: '0.22em' }}>POST-CAMPAIGN SNAPSHOT</span>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-4 gap-0">
        {momentumStats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            style={{ padding: '0 36px', borderLeft: i > 0 ? `1px solid ${DECO}` : 'none' }}
          >
            <Label>{s.label}</Label>
            <motion.p
              style={{ color: s.color, fontFamily: 'ui-monospace, monospace', fontSize: 39, marginTop: 8, textShadow: `0 0 24px ${s.color}50` }}
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.6 }}
            >{s.value}</motion.p>
            <p style={{ color: SUB, fontSize: 13, marginTop: 5 }}>{s.sub}</p>
          </motion.div>
        ))}
      </div>

      <div style={{ height: 1, background: `linear-gradient(to right, ${COPPER}20, ${GOLD}30, ${SAGE}20)`, margin: '36px 0 22px' }} />

      <div className="flex items-center justify-between">
        <p style={{ color: LABEL_COLOR, fontSize: 12, letterSpacing: '0.2em' }}>
          GEORGIA COLLECTION · MARCH 24 – APRIL 13, 2026 · 15-DAY INTEGRATED CAMPAIGN
        </p>
        <p style={{ color: GOLD_DIM, fontSize: 12, letterSpacing: '0.2em' }}>
          BRAWN & FOX · PREMIUM GOLF HEADWEAR
        </p>
      </div>
    </section>
  );
}
