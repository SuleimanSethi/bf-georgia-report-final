'use client';

import { motion } from 'motion/react';
import { Card, SectionTitle, Label, GlowBar } from './Shared';
import { emailSends } from '../../data/campaign';
import { GOLD, GOLD_BRIGHT, SAGE, SAGE_BRIGHT, TEXT, SUB, LABEL, DECO } from '../tokens';

export function EmailSection() {
  return (
    <Card className="h-full" accent={SAGE}>
      <SectionTitle color={SAGE_BRIGHT}>Klaviyo Email</SectionTitle>

      {/* Open rate comparison */}
      <div className="mb-6">
        <Label>Open Rate vs DTC Benchmark</Label>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span style={{ color: TEXT, fontSize: 16 }}>Brawn & Fox</span>
              <span style={{ color: SAGE_BRIGHT, fontFamily: 'ui-monospace, monospace', fontSize: 20, textShadow: `0 0 16px ${SAGE}80` }}>58%</span>
            </div>
            <GlowBar pct={58} color={SAGE} delay={0.3} height={7} />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span style={{ color: SUB, fontSize: 16 }}>DTC Apparel Benchmark</span>
              <span style={{ color: LABEL, fontFamily: 'ui-monospace, monospace', fontSize: 20 }}>25–35%</span>
            </div>
            <div style={{ height: 7, background: DECO, borderRadius: 2 }}>
              <div style={{ height: '100%', width: '30%', background: `linear-gradient(90deg, ${LABEL}50, ${LABEL}80)`, borderRadius: 2 }} />
            </div>
          </div>
          <div style={{ padding: '10px 14px', background: `rgba(110,139,110,0.12)`, border: `1px solid ${SAGE}40`, boxShadow: `0 0 20px ${SAGE}10` }}>
            <p style={{ color: SAGE_BRIGHT, fontSize: 13, letterSpacing: '0.2em' }}>NEARLY 2× THE INDUSTRY BENCHMARK</p>
          </div>
        </div>
      </div>

      <div style={{ height: 1, background: `linear-gradient(to right, transparent, ${SAGE}35, transparent)`, margin: '4px 0 20px' }} />

      {/* Send-level breakdown */}
      <div className="flex flex-col gap-4 mb-6">
        {emailSends.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            style={{ padding: '16px', background: `linear-gradient(135deg, ${SAGE}08 0%, transparent 100%)`, border: `1px solid ${SAGE}20` }}
          >
            <div className="flex items-center justify-between mb-4">
              <span style={{ color: TEXT, fontSize: 16, letterSpacing: '0.1em' }}>{s.name}</span>
              <span style={{ color: SUB, fontSize: 13, letterSpacing: '0.15em' }}>{s.date}</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Opens',   value: s.opens.toLocaleString(),   color: TEXT        },
                { label: 'Clicks',  value: `${s.clicks}`,              color: TEXT        },
                { label: 'Revenue', value: `$${s.revenue.toFixed(0)}`, color: SAGE_BRIGHT },
              ].map((m) => (
                <div key={m.label}>
                  <Label>{m.label}</Label>
                  <p style={{ color: m.color, fontFamily: 'ui-monospace, monospace', fontSize: 20, marginTop: 3 }}>{m.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ height: 1, background: `linear-gradient(to right, transparent, ${SAGE}35, transparent)`, margin: '4px 0 20px' }} />

      {/* Combined totals */}
      <div className="mb-6">
        <Label>Combined Campaign Total</Label>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {[
            { label: 'Total Opens',   value: '7,882',     color: TEXT        },
            { label: 'Total Clicks',  value: '462',       color: TEXT        },
            { label: 'Conversions',   value: '25',        color: SAGE_BRIGHT },
            { label: 'Email Revenue', value: '$1,290.52', color: GOLD_BRIGHT },
          ].map((s) => (
            <div key={s.label}>
              <Label>{s.label}</Label>
              <p style={{ color: s.color, fontFamily: 'ui-monospace, monospace', fontSize: 22, marginTop: 4 }}>{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Retargeting callout */}
      <div style={{ padding: '14px 16px', background: `linear-gradient(135deg, ${SAGE}12 0%, ${GOLD}06 100%)`, border: `1px solid ${SAGE}35`, boxShadow: `0 0 30px ${SAGE}08` }}>
        <p style={{ color: SAGE_BRIGHT, fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 6 }}>Retargeting Asset Built</p>
        <p style={{ color: TEXT, fontSize: 42, fontFamily: 'ui-monospace, monospace', textShadow: `0 0 30px ${SAGE}50` }}>~2,000</p>
        <p style={{ color: SUB, fontSize: 14, marginTop: 4 }}>Georgia openers who haven't purchased — the warmest audience the brand has ever built.</p>
      </div>
    </Card>
  );
}
