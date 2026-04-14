'use client';

import { motion } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, SectionTitle, SpinRing } from './Shared';
import { customerPieData } from '../../data/campaign';
import { GOLD, COPPER, COPPER_BRIGHT, TEXT, SUB, LABEL, DECO } from '../tokens';

export function CustomerSection() {
  return (
    <Card className="h-full" accent={COPPER}>
      <SectionTitle color={COPPER_BRIGHT}>Customer Acquisition</SectionTitle>

      {/* Donut chart */}
      <div style={{ position: 'relative', height: 210 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={customerPieData}
              cx="50%" cy="50%"
              innerRadius={62} outerRadius={88}
              startAngle={90} endAngle={-270}
              dataKey="value"
              strokeWidth={0}
            >
              {customerPieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <SpinRing size={200} color={`${COPPER}40`} duration={14} />
        <SpinRing size={220} color={`${GOLD}20`}   duration={20} reverse />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <motion.p
            style={{ color: COPPER_BRIGHT, fontFamily: 'ui-monospace, monospace', fontSize: 36, textShadow: `0 0 24px ${COPPER}80` }}
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          >82.7%</motion.p>
          <p style={{ color: SUB, fontSize: 12, letterSpacing: '0.15em', marginTop: 2 }}>NEW</p>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-4 mt-4">
        {[
          { label: 'New Customers', value: '124', pct: '82.7%', color: COPPER_BRIGHT },
          { label: 'Returning',     value: '26',  pct: '17.3%', color: LABEL        },
        ].map((s) => (
          <div key={s.label} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: s.color, boxShadow: `0 0 8px ${s.color}80`, flexShrink: 0 }} />
              <span style={{ color: SUB, fontSize: 14 }}>{s.label}</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span style={{ color: TEXT, fontFamily: 'ui-monospace, monospace', fontSize: 22 }}>{s.value}</span>
              <span style={{ color: s.color, fontSize: 14 }}>{s.pct}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: 1, background: `linear-gradient(to right, transparent, ${COPPER}25, transparent)`, margin: '20px 0' }} />

      <div style={{ padding: '12px 14px', background: `rgba(196,120,72,0.07)`, border: `1px solid ${COPPER}20` }}>
        <p style={{ color: SUB, fontSize: 14 }}>83% new customer acquisition — the campaign was a customer-acquisition engine that built the brand&apos;s future audience.</p>
      </div>
    </Card>
  );
}
