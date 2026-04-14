'use client';

import { motion } from 'motion/react';
import { SectionTitle, Card, Label, GlowBar } from './Shared';
import { timelineEvents, weekData } from '../../data/campaign';
import { GOLD, GOLD_BRIGHT, COPPER_BRIGHT, DECO, TEXT, SUB, PAGE_BG } from '../tokens';

export function CampaignTimeline() {
  return (
    <section style={{ padding: '52px 64px', background: `radial-gradient(ellipse at 50% 50%, rgba(196,120,72,0.05) 0%, transparent 70%), ${PAGE_BG}` }}>
      <SectionTitle color={COPPER_BRIGHT}>Campaign Timeline</SectionTitle>

      {/* Timeline track */}
      <div style={{ position: 'relative', height: 130, marginBottom: 48 }}>
        <div style={{ position: 'absolute', top: 60, left: 0, right: 0, height: 1, background: DECO }} />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.2, ease: 'easeOut', delay: 0.4 }}
          style={{
            position: 'absolute', top: 58, left: 0, right: 0, height: 3,
            background: `linear-gradient(90deg, ${COPPER_BRIGHT}, ${GOLD}, ${GOLD_BRIGHT})`,
            transformOrigin: 'left',
            boxShadow: `0 0 14px ${GOLD}70, 0 0 30px ${GOLD}30`,
          }}
        />
        <motion.div
          style={{ position: 'absolute', top: 52, width: 60, height: 14, background: `radial-gradient(ellipse, ${GOLD_BRIGHT}80 0%, transparent 80%)` }}
          animate={{ left: ['0%', '100%'] }}
          transition={{ duration: 2.5, ease: 'easeOut', delay: 0.4 }}
        />

        {timelineEvents.map((ev, i) => (
          <motion.div
            key={ev.date}
            initial={{ opacity: 0, y: i % 2 === 0 ? -14 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              ...(i === timelineEvents.length - 1
                ? { right: 0 }
                : { left: `${ev.pct}%`, transform: 'translateX(-50%)' }),
              top: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: i === timelineEvents.length - 1 ? 'flex-end' : 'center',
            }}
          >
            <div style={{ height: 48, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: i === timelineEvents.length - 1 ? 'flex-end' : 'center', gap: 2 }}>
              {i % 2 === 0 && (
                <>
                  <p style={{ color: TEXT, fontSize: 14, letterSpacing: '0.08em', whiteSpace: 'nowrap', textAlign: i === timelineEvents.length - 1 ? 'right' : 'center' }}>{ev.label}</p>
                  <p style={{ color: SUB,  fontSize: 12, letterSpacing: '0.1em',  whiteSpace: 'nowrap', textAlign: i === timelineEvents.length - 1 ? 'right' : 'center' }}>{ev.desc}</p>
                </>
              )}
            </div>
            <div style={{ position: 'relative', width: 14, height: 14, flexShrink: 0, marginTop: 4, marginBottom: 4 }}>
              <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: ev.color, boxShadow: `0 0 12px ${ev.color}, 0 0 28px ${ev.color}60` }} />
              <motion.div
                style={{ position: 'absolute', inset: -4, borderRadius: '50%', border: `1px solid ${ev.color}80` }}
                animate={{ scale: [1, 3], opacity: [0.8, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.4 }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: i === timelineEvents.length - 1 ? 'flex-end' : 'center', gap: 2, height: 48 }}>
              <p style={{ color: ev.color, fontSize: 13, letterSpacing: '0.2em', whiteSpace: 'nowrap', textShadow: `0 0 14px ${ev.color}90` }}>{ev.date}</p>
              {i % 2 !== 0 && (
                <>
                  <p style={{ color: TEXT, fontSize: 14, letterSpacing: '0.08em', whiteSpace: 'nowrap', textAlign: i === timelineEvents.length - 1 ? 'right' : 'center' }}>{ev.label}</p>
                  <p style={{ color: SUB,  fontSize: 12, letterSpacing: '0.1em',  whiteSpace: 'nowrap', textAlign: i === timelineEvents.length - 1 ? 'right' : 'center' }}>{ev.desc}</p>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Week cards */}
      <div className="grid grid-cols-3 gap-4">
        {weekData.map((w, i) => (
          <Card key={w.phase} accent={w.accent}>
            <div className="flex flex-col gap-5">
              <div className="flex items-start justify-between">
                <div>
                  <Label color={w.accent}>{w.phase}</Label>
                  <p style={{ color: SUB, fontSize: 13, marginTop: 2 }}>{w.label}</p>
                </div>
                <div className="text-right">
                  <motion.p
                    style={{ color: w.accent, fontFamily: 'ui-monospace, monospace', fontSize: 31, textShadow: `0 0 20px ${w.accent}80` }}
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  >{w.roas}×</motion.p>
                  <p style={{ color: SUB, fontSize: 12, letterSpacing: '0.15em' }}>ROAS</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Spend',       value: `$${w.spend.toLocaleString()}` },
                  { label: 'Impressions', value: w.impressions.toLocaleString() },
                  { label: 'Purchases',   value: `${w.purchases}` },
                ].map((s) => (
                  <div key={s.label}>
                    <Label>{s.label}</Label>
                    <p style={{ color: TEXT, fontFamily: 'ui-monospace, monospace', fontSize: 18, marginTop: 4 }}>{s.value}</p>
                  </div>
                ))}
              </div>
              <GlowBar pct={(w.roas / 3) * 100} color={w.accent} delay={0.4 + i * 0.2} height={4} />
              {i === 1 && <p style={{ color: SUB, fontSize: 13 }}>Week 2 delivered 2× the purchases of Week 1 at a 37% higher ROAS — the campaign found its groove.</p>}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
