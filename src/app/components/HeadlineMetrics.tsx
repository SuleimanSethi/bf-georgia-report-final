'use client';

import { motion } from 'motion/react';
import { AnimatedMetric, FloatingOrb } from './Shared';
import { headlineRow1, headlineRow2 } from '../../data/campaign';
import { GOLD, GOLD_DIM, COPPER, DECO, PAGE_BG } from '../tokens';

export function HeadlineMetrics() {
  return (
    <section style={{
      position: 'relative',
      padding: '72px 64px 52px',
      overflow: 'hidden',
      background: `radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 55%),
                   radial-gradient(ellipse at 0% 100%, rgba(196,120,72,0.06) 0%, transparent 50%),
                   radial-gradient(ellipse at 100% 50%, rgba(110,139,110,0.05) 0%, transparent 50%),
                   ${PAGE_BG}`,
    }}>
      <FloatingOrb x="20%" y="0%"  size={250} color={GOLD}   />
      <FloatingOrb x="75%" y="50%" size={180} color={COPPER} delay={2} />

      {[headlineRow1, headlineRow2].map((row, rowIdx) => (
        <div key={rowIdx} className={`grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 ${rowIdx === 0 ? 'mb-10' : ''}`}>
          {row.map((m, i) => {
            const globalIdx = rowIdx * 3 + i;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: globalIdx * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={i > 0 ? 'sm:border-l' : ''}
                style={{
                  padding: '0 40px',
                  borderLeftColor: DECO,
                  position: 'relative',
                }}
              >
                <div style={{ marginBottom: 20 }}>
                  <div style={{ height: 2, background: DECO, position: 'relative', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.3 + globalIdx * 0.08, duration: 0.9 }}
                      style={{
                        position: 'absolute', inset: 0,
                        background: rowIdx === 0
                          ? `linear-gradient(90deg, ${GOLD_DIM}, ${m.accent})`
                          : `linear-gradient(90deg, ${COPPER}60, ${m.accent})`,
                        transformOrigin: 'left',
                        boxShadow: `0 0 8px ${m.accent}80`,
                      }}
                    />
                  </div>
                </div>
                <AnimatedMetric
                  value={m.value}
                  prefix={'prefix' in m ? m.prefix : ''}
                  suffix={'suffix' in m ? m.suffix : ''}
                  decimals={m.decimals}
                  label={m.label}
                  sub={m.sub}
                  accentColor={m.accent}
                />
              </motion.div>
            );
          })}
        </div>
      ))}

      {/* Horizontal rule between rows */}
      <div style={{ position: 'absolute', left: 64, right: 64, top: '50%', height: 1, background: `linear-gradient(to right, transparent, ${DECO}, ${DECO}, transparent)` }} />
    </section>
  );
}
