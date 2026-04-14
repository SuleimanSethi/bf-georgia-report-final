'use client';

import { motion } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, SectionTitle, SpinRing } from './Shared';
import { attributionData } from '../../data/campaign';
import { SAGE, SAGE_BRIGHT, COPPER, TEAL, PAGE_BG, SUB, LABEL, TEXT } from '../tokens';

export function AttributionSection() {
  return (
    <Card className="h-full" accent={SAGE}>
      <SectionTitle color={SAGE_BRIGHT}>Order Attribution</SectionTitle>

      {/* Donut */}
      <div style={{ position: 'relative', height: 200 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={attributionData}
              cx="50%" cy="50%"
              innerRadius={48} outerRadius={78}
              startAngle={90} endAngle={-270}
              dataKey="orders"
              strokeWidth={1}
              stroke={PAGE_BG}
            >
              {attributionData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <SpinRing size={170} color={`${SAGE}35`}   duration={16} />
        <SpinRing size={188} color={`${COPPER}20`} duration={24} reverse />
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-2 mt-2">
        {attributionData.map((d, i) => (
          <motion.div
            key={d.name}
            className="flex items-center justify-between"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <div style={{ width: 8, height: 8, background: d.color, flexShrink: 0, boxShadow: `0 0 6px ${d.color}80` }} />
              <span style={{ color: SUB, fontSize: 13 }}>{d.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span style={{ color: LABEL, fontSize: 13, fontFamily: 'ui-monospace, monospace' }}>{d.orders} orders</span>
              <span style={{ color: d.color, fontSize: 14, fontFamily: 'ui-monospace, monospace', width: 44, textAlign: 'right' }}>{d.pct}%</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ height: 1, background: `linear-gradient(to right, transparent, ${SAGE}35, transparent)`, margin: '16px 0' }} />

      {/* Attribution confidence */}
      <div style={{ padding: '12px 14px', background: `rgba(74,128,128,0.08)`, border: `1px solid ${TEAL}30`, boxShadow: `0 0 20px ${TEAL}05` }}>
        <p style={{ color: TEAL, fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 4 }}>Attribution Confidence</p>
        <p style={{ color: TEXT, fontFamily: 'ui-monospace, monospace', fontSize: 29, textShadow: `0 0 20px ${TEAL}60` }}>73.3%</p>
        <p style={{ color: SUB, fontSize: 13, marginTop: 3 }}>16-rule cross-reference across Shopify, Klaviyo, Meta pixel & URL parameters.</p>
      </div>
    </Card>
  );
}
