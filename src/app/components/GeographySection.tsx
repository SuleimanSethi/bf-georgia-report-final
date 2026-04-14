'use client';

import { Card, SectionTitle, Label, GlowBar } from './Shared';
import { stateData } from '../../data/campaign';
import { GOLD, SAGE, SAGE_BRIGHT, TEXT, SUB, LABEL } from '../tokens';

export function GeographySection() {
  return (
    <Card className="h-full" accent="#4A8080">
      <SectionTitle color={SAGE_BRIGHT}>Geographic Reach</SectionTitle>

      <div className="flex flex-col gap-2">
        {stateData.map((s, i) => (
          <div key={s.state} className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span style={{ color: i === 0 ? TEXT : i < 3 ? SUB : LABEL, fontSize: 14 }}>
                {s.state}
                {i === 0 && (
                  <span style={{ color: GOLD, marginLeft: 8, fontSize: 10, letterSpacing: '0.14em', textShadow: `0 0 10px ${GOLD}` }}>
                    34% OF ALL ORDERS
                  </span>
                )}
              </span>
              <div className="flex items-center gap-4">
                <span style={{ color: LABEL, fontFamily: 'ui-monospace, monospace', fontSize: 13 }}>${s.revenue.toFixed(0)}</span>
                <span style={{ color: s.color, fontFamily: 'ui-monospace, monospace', fontSize: 17, width: 24, textAlign: 'right' }}>{s.orders}</span>
              </div>
            </div>
            <GlowBar pct={(s.orders / 51) * 100} color={s.color} delay={0.15 + i * 0.06} height={4} />
          </div>
        ))}
      </div>

      <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <p style={{ color: SUB, fontSize: 13 }}>24 states reached in total</p>
        <p style={{ color: SAGE_BRIGHT, fontSize: 12, letterSpacing: '0.18em', textShadow: `0 0 12px ${SAGE}70` }}>HOME STATE LED</p>
      </div>
    </Card>
  );
}
