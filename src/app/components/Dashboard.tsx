'use client';

import { HeroHeader }       from './HeroHeader';
import { HeadlineMetrics }  from './HeadlineMetrics';
import { CampaignTimeline } from './CampaignTimeline';
import { MetaAdsSection }   from './MetaAdsSection';
import { EmailSection }     from './EmailSection';
import { ProductSection }   from './ProductSection';
import { CustomerSection }  from './CustomerSection';
import { GeographySection } from './GeographySection';
import { AttributionSection } from './AttributionSection';
import { BaselineSection }  from './BaselineSection';
import { BrandMomentum }    from './BrandMomentum';
import { GlowDivider }      from './Shared';
import { GOLD, COPPER, SAGE, TEAL, TEXT, PAGE_BG } from '../tokens';

export function Dashboard() {
  return (
    <div style={{ background: PAGE_BG, minHeight: '100vh', color: TEXT, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", position: 'relative' }}>
      {/* Animated grid background */}
      <div className="dashboard-grid-bg" />
      {/* Scanline beam */}
      <div className="scanline-overlay" />

      {/* Fixed ambient glows */}
      <div style={{ position: 'fixed', top: '5%',    left: '3%',  width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',  pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'fixed', top: '40%',   right: '3%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,120,72,0.04) 0%, transparent 70%)',  pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'fixed', bottom: '10%', left: '30%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(110,139,110,0.03) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <HeroHeader />
        <HeadlineMetrics />
        <GlowDivider color={COPPER} />
        <CampaignTimeline />
        <GlowDivider color={SAGE} />

        <section id="section-meta-email" style={{ padding: '52px 64px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6">
            <MetaAdsSection />
            <EmailSection />
          </div>
        </section>
        <GlowDivider color={GOLD} />

        <section id="section-product-customer" style={{ padding: '52px 64px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6">
            <ProductSection />
            <CustomerSection />
          </div>
        </section>
        <GlowDivider color={TEAL} />

        <section id="section-bottom-row" style={{ padding: '52px 64px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <GeographySection />
            <AttributionSection />
            <BaselineSection />
          </div>
        </section>
        <GlowDivider color={COPPER} />

        <BrandMomentum />
      </div>
    </div>
  );
}
