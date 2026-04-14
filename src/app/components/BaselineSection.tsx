'use client';

import { motion } from 'motion/react';
import { Card, SectionTitle, Label } from './Shared';
import { baselineRows } from '../../data/campaign';
import { GOLD, GOLD_BRIGHT, COPPER, COPPER_BRIGHT, CARD_BG, SUB, LABEL, TEXT, DECO } from '../tokens';

export function BaselineSection() {
  return (
    <Card className="h-full" accent="#B06858">
      <SectionTitle color={COPPER_BRIGHT}>Campaign Lift vs Baseline</SectionTitle>

      {/* Hero lift numbers */}
      <div style={{
        padding: '20px',
        background: `linear-gradient(135deg, ${GOLD}10 0%, ${COPPER}06 50%, rgba(176,104,88,0.06) 100%)`,
        border: `1px solid ${GOLD}35`,
        boxShadow: `0 0 40px ${GOLD}10`,
        marginBottom: 24,
      }}>
        <div className="grid grid-cols-2 gap-6">
          {[
            { label: 'Daily Order Rate', lift: '5×',   baseline: '~1.9/day', campaign: '10.0/day',  color: GOLD_BRIGHT   },
            { label: 'Daily Revenue',    lift: '5.3×', baseline: '~$86/day', campaign: '~$454/day', color: COPPER_BRIGHT },
          ].map((c, i) => (
            <div key={c.label}>
              <Label>{c.label}</Label>
              <motion.p
                style={{ color: c.color, fontFamily: 'ui-monospace, monospace', fontSize: 57, lineHeight: 1, marginTop: 6, textShadow: `0 0 30px ${c.color}60` }}
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.8 }}
              >{c.lift}</motion.p>
              <div className="flex items-center gap-2 mt-2">
                <span style={{ color: LABEL, fontSize: 13, fontFamily: 'ui-monospace, monospace' }}>{c.baseline}</span>
                <motion.span
                  style={{ color: c.color, fontSize: 14 }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >→</motion.span>
                <span style={{ color: SUB, fontSize: 13, fontFamily: 'ui-monospace, monospace' }}>{c.campaign}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison table */}
      <div>
        <div className="grid grid-cols-3 gap-2" style={{ marginBottom: 8 }}>
          <p style={{ color: LABEL, fontSize: 12, letterSpacing: '0.2em' }}>METRIC</p>
          <p style={{ color: LABEL, fontSize: 12, letterSpacing: '0.2em' }}>14-MO BASELINE</p>
          <p style={{ color: COPPER_BRIGHT, fontSize: 12, letterSpacing: '0.2em' }}>GEORGIA 15 DAYS</p>
        </div>
        {baselineRows.map((r, i) => (
          <motion.div
            key={r.label}
            className="grid grid-cols-3 gap-2 py-2"
            style={{ borderTop: `1px solid ${DECO}` }}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <p style={{ color: SUB, fontSize: 14 }}>{r.label}</p>
            <p style={{ color: TEXT, fontFamily: 'ui-monospace, monospace', fontSize: 17 }}>{r.baseline}</p>
            <p style={{ color: COPPER_BRIGHT, fontFamily: 'ui-monospace, monospace', fontSize: 17, textShadow: `0 0 10px ${COPPER}60` }}>{r.campaign}</p>
          </motion.div>
        ))}
      </div>

      <div style={{ height: 1, background: `linear-gradient(to right, transparent, ${COPPER}35, transparent)`, margin: '20px 0' }} />

      <div style={{ padding: '12px 14px', background: CARD_BG, border: `1px solid ${DECO}` }}>
        <p style={{ color: SUB, fontSize: 14 }}>Everything that was built to run, ran profitably — for the full 15-day duration.</p>
      </div>
    </Card>
  );
}
