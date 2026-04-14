'use client';

import { motion } from 'motion/react';
import { Card, SectionTitle, Label, GlowBar } from './Shared';
import { adData, placements } from '../../data/campaign';
import {
  GOLD_BRIGHT, COPPER, COPPER_BRIGHT, WARM_TAN, SAGE_BRIGHT,
  TEXT, SUB, LABEL, DECO,
} from '../tokens';

export function MetaAdsSection() {
  return (
    <Card className="h-full" accent={COPPER}>
      <SectionTitle color={COPPER_BRIGHT}>Meta Ads Performance</SectionTitle>

      {/* Ad creative performance */}
      <div className="mb-6">
        <Label>Ad Creative Performance</Label>
        <div className="mt-4 flex flex-col gap-4">
          {adData.map((ad, i) => (
            <motion.div
              key={ad.ad}
              className="flex flex-col gap-2"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span style={{ color: ad.winner ? TEXT : ad.roas ? SUB : LABEL, fontSize: 16 }}>
                    {ad.ad} Carousel
                  </span>
                  {ad.winner && (
                    <motion.span
                      style={{ fontSize: 10, color: COPPER_BRIGHT, border: `1px solid ${COPPER}60`, padding: '2px 7px', letterSpacing: '0.18em', boxShadow: `0 0 12px ${COPPER}40` }}
                      animate={{ boxShadow: [`0 0 8px ${COPPER}30`, `0 0 18px ${COPPER}70`, `0 0 8px ${COPPER}30`] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >WINNER</motion.span>
                  )}
                  {!ad.winner && !ad.roas && (
                    <span style={{ fontSize: 10, color: LABEL, border: `1px solid ${DECO}`, padding: '2px 7px', letterSpacing: '0.18em' }}>CONSOLIDATED</span>
                  )}
                </div>
                <div className="flex items-center gap-5">
                  <span style={{ color: SUB, fontFamily: 'ui-monospace, monospace', fontSize: 16 }}>${ad.spend.toLocaleString()}</span>
                  <span style={{ color: ad.winner ? COPPER_BRIGHT : ad.roas ? WARM_TAN : LABEL, fontFamily: 'ui-monospace, monospace', fontSize: 17, width: 44, textAlign: 'right' }}>
                    {ad.roas ? `${ad.roas}×` : '—'}
                  </span>
                </div>
              </div>
              <GlowBar
                pct={ad.spend > 100 ? (ad.spend / 571.16) * 100 : 2}
                color={ad.winner ? COPPER : ad.roas ? WARM_TAN : undefined}
                delay={0.2 + i * 0.15}
                height={5}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div style={{ height: 1, background: `linear-gradient(to right, transparent, ${COPPER}35, transparent)` }} />

      {/* Audience reach */}
      <div className="my-6">
        <Label>Audience Reach</Label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          {[
            { label: 'Unique Reach', value: '40,376', color: GOLD_BRIGHT   },
            { label: 'Impressions',  value: '83,526', color: COPPER_BRIGHT },
            { label: 'Frequency',    value: '2.07×',  color: WARM_TAN      },
            { label: 'Add-to-Cart',  value: '205',    color: SAGE_BRIGHT   },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Label>{s.label}</Label>
              <p style={{ color: s.color, fontFamily: 'ui-monospace, monospace', fontSize: 24, marginTop: 5, textShadow: `0 0 16px ${s.color}60` }}>{s.value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div style={{ height: 1, background: `linear-gradient(to right, transparent, ${COPPER}35, transparent)` }} />

      {/* Channel split */}
      <div className="mt-6">
        <Label>Channel Split — Facebook vs Instagram</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
          {placements.map((p) => (
            <div key={p.name} style={{
              padding: 18,
              background: `linear-gradient(135deg, ${p.color}08 0%, transparent 100%)`,
              border: `1px solid ${p.color}25`,
              boxShadow: `0 0 30px ${p.color}06`,
            }}>
              <div className="flex items-center justify-between mb-4">
                <span style={{ color: p.color, fontSize: 17, letterSpacing: '0.18em', textTransform: 'uppercase', textShadow: `0 0 12px ${p.color}60` }}>{p.name}</span>
                <span style={{ color: SUB, fontSize: 13 }}>{p.pct}% spend</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: 'Spend',     value: `$${p.spend.toLocaleString()}`, highlight: false },
                  { label: 'Purchases', value: `${p.purchases}`,               highlight: false },
                  { label: 'ROAS',      value: `${p.roas}×`,                   highlight: true  },
                  { label: 'CPA',       value: `$${p.cpa}`,                    highlight: false },
                ].map((s) => (
                  <div key={s.label}>
                    <Label>{s.label}</Label>
                    <p style={{ color: s.highlight ? p.color : TEXT, fontFamily: 'ui-monospace, monospace', fontSize: 20, marginTop: 3 }}>{s.value}</p>
                  </div>
                ))}
              </div>
              <GlowBar pct={(p.purchases / 61) * 100} color={p.color} height={3} delay={0.5} />
              <p style={{ color: SUB, fontSize: 12, marginTop: 6, letterSpacing: '0.1em' }}>{p.note}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
