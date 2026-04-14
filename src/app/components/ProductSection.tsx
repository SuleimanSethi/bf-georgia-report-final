'use client';

import { motion } from 'motion/react';
import { Card, SectionTitle, GlowBar } from './Shared';
import { products, cartData } from '../../data/campaign';
import { GOLD, GOLD_BRIGHT, GOLD_DIM, COPPER, PAGE_BG, TEXT, SUB, LABEL } from '../tokens';

export function ProductSection() {
  return (
    <Card id="section-product-performance" className="h-full" accent="#A89070">
      <SectionTitle color={GOLD_BRIGHT}>Product Performance</SectionTitle>
      <div className="grid grid-cols-2 gap-10">

        {/* SKU breakdown */}
        <div style={{ overflow: 'hidden' }}>
          <p style={{ color: LABEL, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Units by SKU — Georgia Collection</p>
          <div className="flex flex-col gap-3 mt-4">
            {products.map((p, i) => (
              <div key={p.name} className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span style={{ color: i === 0 ? TEXT : i < 3 ? SUB : LABEL, fontSize: 14 }}>
                    {p.name}
                    {i === 0 && (
                      <span style={{ color: GOLD, marginLeft: 8, fontSize: 10, letterSpacing: '0.18em', textShadow: `0 0 12px ${GOLD}` }}>
                        BREAKOUT
                      </span>
                    )}
                  </span>
                  <span style={{ color: p.color, fontFamily: 'ui-monospace, monospace', fontSize: 14 }}>{p.pct}%</span>
                </div>
                <GlowBar pct={p.pct} color={p.color} delay={0.3 + i * 0.07} height={4} />
              </div>
            ))}
          </div>
          <div style={{ marginTop: 14, padding: '9px 13px', background: `rgba(201,168,76,0.06)`, border: `1px solid ${GOLD}20` }}>
            <p style={{ color: SUB, fontSize: 12, letterSpacing: '0.18em' }}>AZALEA WHITE: 59% OF ALL GEORGIA UNITS SOLD</p>
          </div>
        </div>

        {/* Mixed-cart AOV */}
        <div style={{ overflow: 'hidden' }}>
          <p style={{ color: LABEL, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Mixed-Cart Lift — AOV by Order Type</p>
          <div className="flex flex-col gap-4 mt-4">
            {cartData.map((c, i) => (
              <motion.div
                key={c.type}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.14, duration: 0.5 }}
                style={{
                  padding: '16px',
                  background: i === 1
                    ? `linear-gradient(135deg, ${GOLD}12 0%, ${COPPER}06 100%)`
                    : `linear-gradient(135deg, ${c.color}06 0%, transparent 100%)`,
                  border: `1px solid ${i === 1 ? GOLD + '45' : c.color + '20'}`,
                  position: 'relative',
                  boxShadow: i === 1 ? `0 0 30px ${GOLD}10` : 'none',
                }}
              >
                {i === 1 && (
                  <div style={{ position: 'absolute', top: -1, right: -1, background: `linear-gradient(90deg, ${GOLD_DIM}, ${GOLD})`, padding: '3px 10px', boxShadow: `0 0 12px ${GOLD}60` }}>
                    <p style={{ color: PAGE_BG, fontSize: 10, letterSpacing: '0.18em' }}>+64% AOV</p>
                  </div>
                )}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p style={{ color: i === 1 ? TEXT : SUB, fontSize: 16 }}>{c.type}</p>
                    <p style={{ color: LABEL, fontSize: 13, marginTop: 2 }}>{c.orders} orders</p>
                  </div>
                  <p style={{ color: c.color, fontFamily: 'ui-monospace, monospace', fontSize: i === 1 ? 39 : 29, textShadow: i === 1 ? `0 0 24px ${c.color}60` : 'none' }}>
                    ${c.aov.toFixed(2)}
                  </p>
                </div>
                <GlowBar pct={(c.aov / 70.40) * 100} color={c.color} height={3} delay={0.4 + i * 0.15} />
              </motion.div>
            ))}
          </div>
          <p style={{ color: SUB, fontSize: 13, marginTop: 10 }}>Mixed carts spent 64% more than Georgia-only buyers — the collection pulled customers into the broader catalog.</p>
        </div>
      </div>
    </Card>
  );
}
