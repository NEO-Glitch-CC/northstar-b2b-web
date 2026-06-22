'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const topIntegrations = [
  { name: 'Salesforce', color: 'bg-blue-500', letter: 'S' },
  { name: 'Stripe', color: 'bg-violet-500', letter: 'S' },
  { name: 'HubSpot', color: 'bg-orange-500', letter: 'H' },
  { name: 'Slack', color: 'bg-emerald-500', letter: 'S' },
  { name: 'Segment', color: 'bg-sky-500', letter: 'S' },
  { name: 'Notion', color: 'bg-neutral-800', letter: 'N' },
  { name: 'Linear', color: 'bg-indigo-500', letter: 'L' },
  { name: 'Shopify', color: 'bg-green-600', letter: 'S' },
  { name: 'Zapier', color: 'bg-orange-400', letter: 'Z' },
  { name: 'Figma', color: 'bg-pink-500', letter: 'F' },
];

const bottomIntegrations = [
  { name: 'Intercom', color: 'bg-blue-600', letter: 'I' },
  { name: 'Pipedrive', color: 'bg-green-500', letter: 'P' },
  { name: 'Airtable', color: 'bg-blue-400', letter: 'A' },
  { name: 'Mixpanel', color: 'bg-purple-500', letter: 'M' },
  { name: 'Amplitude', color: 'bg-indigo-600', letter: 'A' },
  { name: 'Looker', color: 'bg-amber-500', letter: 'L' },
  { name: 'Tableau', color: 'bg-blue-700', letter: 'T' },
  { name: 'Snowflake', color: 'bg-sky-400', letter: 'S' },
  { name: 'Databricks', color: 'bg-red-500', letter: 'D' },
  { name: 'Twilio', color: 'bg-red-600', letter: 'T' },
];

const featuredIntegrations = [
  {
    name: 'Salesforce',
    category: 'CRM',
    categoryKr: '고객관리',
    description: 'Sync deals, contacts, and pipeline stages in real-time.',
    color: 'bg-blue-500',
    letter: 'S',
  },
  {
    name: 'Stripe',
    category: 'Billing',
    categoryKr: '결제',
    description: 'Pull MRR, churn, and expansion revenue automatically.',
    color: 'bg-violet-500',
    letter: 'S',
  },
  {
    name: 'HubSpot',
    category: 'Marketing',
    categoryKr: '마케팅',
    description: 'Connect attribution data to revenue outcomes.',
    color: 'bg-orange-500',
    letter: 'H',
  },
  {
    name: 'Slack',
    category: 'Communication',
    categoryKr: '커뮤니케이션',
    description: 'Get daily operating signals in your team channel.',
    color: 'bg-emerald-500',
    letter: 'S',
  },
  {
    name: 'Segment',
    category: 'Data',
    categoryKr: '데이터',
    description: 'Ingest product usage events and map to accounts.',
    color: 'bg-sky-500',
    letter: 'S',
  },
  {
    name: 'Notion',
    category: 'Workspace',
    categoryKr: '워크스페이스',
    description: 'Embed live operating dashboards in your docs.',
    color: 'bg-neutral-800',
    letter: 'N',
  },
];

export default function Integrations() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        // Header reveal
        gsap.fromTo(
          '.integrations-header > *',
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.integrations-header',
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Top marquee
        gsap.to('.marquee-top', {
          xPercent: -50,
          duration: 40,
          repeat: -1,
          ease: 'linear',
        });

        // Bottom marquee (reverse direction)
        gsap.fromTo('.marquee-bottom', {
          xPercent: -50,
        }, {
          xPercent: 0,
          duration: 40,
          repeat: -1,
          ease: 'linear',
        });

        // Featured cards stagger
        gsap.fromTo(
          '.featured-card',
          { y: 40, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.featured-grid',
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Stats reveal
        gsap.fromTo(
          '.stat-item',
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.stats-row',
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );

        // CTA reveal
        gsap.fromTo(
          '.integrations-cta',
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.integrations-cta',
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Logo hover effects
        const logos = document.querySelectorAll('.logo-item');
        logos.forEach((logo) => {
          logo.addEventListener('mouseenter', () => {
            gsap.to(logo, {
              scale: 1.15,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
          logo.addEventListener('mouseleave', () => {
            gsap.to(logo, {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      id="integrations"
      ref={sectionRef}
      className="relative bg-bone text-charcoal overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Header */}
      <div className="integrations-header relative px-5 md:px-8 pt-20 md:pt-28 pb-12">
        <div className="mx-auto max-w-[1600px] text-center">
          <p className="font-mono text-xs font-bold uppercase text-signal-deep tracking-widest mb-6">
            Integrations / 통합
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight max-w-4xl mx-auto">
            Works with the tools
            <br />
            <span className="text-charcoal/30">you already use.</span>
          </h2>
          <p className="mt-6 text-lg text-charcoal/60 max-w-2xl mx-auto leading-relaxed">
            Deep integrations with the most popular B2B software, CRMs, and
            operational tools your team relies on.
          </p>
        </div>
      </div>

      {/* Top Marquee */}
      <div className="relative py-8 border-y border-charcoal/10 bg-white/50 backdrop-blur-sm">
        <div className="absolute left-0 inset-y-0 w-1/3 h-full z-1 bg-gradient-to-r from-bone to-transparent"/>
        <div className="absolute left-0 inset-y-0 w-1/3 h-full z-1 bg-gradient-to-r from-bone to-transparent"/>
        <div className="absolute right-0 inset-y-0 w-1/3 h-full z-1 bg-gradient-to-l from-bone to-transparent"/>
        <div className="absolute right-0 inset-y-0 w-1/3 h-full z-1 bg-gradient-to-l from-bone to-transparent"/>
        <div className="overflow-hidden">
          <div className="marquee-top flex gap-6 w-max">
            {[...topIntegrations, ...topIntegrations].map((item, idx) => (
              <div
                key={idx}
                className="logo-item flex-shrink-0 w-20 h-20 bg-white border border-charcoal/10 rounded-none flex items-center justify-center shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div
                  className={`w-12 h-12 ${item.color} rounded-none flex items-center justify-center text-white font-bold text-xl shadow-md`}
                >
                  {item.letter}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Center Content with Gradient Blob */}
      <div className="relative py-20 md:py-28 px-5 md:px-8">
        {/* Gradient blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200/40 via-sky-200/30 to-rose-200/30 rounded-none blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1600px]">
          {/* Stats row */}
          <div className="stats-row grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
            {[
              { value: '40+', label: 'Native integrations' },
              { value: '<2h', label: 'Setup time' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '2.4M', label: 'Records synced daily' },
            ].map((stat, idx) => (
              <div key={idx} className="stat-item text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-xs text-charcoal/50 font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Featured integrations grid */}
          <div className="featured-grid grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {featuredIntegrations.map((integration, idx) => (
              <div
                key={idx}
                className="featured-card group bg-white border border-charcoal/10 rounded-none p-6 md:p-8 hover:border-signal hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-14 h-14 ${integration.color} rounded-none flex items-center justify-center text-white font-bold text-2xl shadow-md flex-shrink-0`}
                  >
                    {integration.letter}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold mb-1">{integration.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-charcoal/60">
                        {integration.category}
                      </span>
                      <span className="w-1 h-1 bg-charcoal/30 rounded-none" />
                      <span className="text-xs text-charcoal/40 font-mono">
                        {integration.categoryKr}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  {integration.description}
                </p>
                <div className="mt-4 pt-4 border-t border-charcoal/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal/40">
                    Native integration
                  </span>
                  <svg
                    className="w-4 h-4 text-charcoal/40 group-hover:text-signal group-hover:translate-x-1 transition-all"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="relative py-8 border-y border-charcoal/10 bg-white/50 backdrop-blur-sm">
        <div className="absolute left-0 inset-y-0 w-1/3 h-full z-1 bg-gradient-to-r from-bone to-transparent"/>
        <div className="absolute left-0 inset-y-0 w-1/3 h-full z-1 bg-gradient-to-r from-bone to-transparent"/>
        <div className="absolute right-0 inset-y-0 w-1/3 h-full z-1 bg-gradient-to-l from-bone to-transparent"/>
        <div className="absolute right-0 inset-y-0 w-1/3 h-full z-1 bg-gradient-to-l from-bone to-transparent"/>
        <div className="overflow-hidden">
          <div className="marquee-bottom flex gap-6 w-max">
            {[...bottomIntegrations, ...bottomIntegrations].map((item, idx) => (
              <div
                key={idx}
                className="logo-item flex-shrink-0 w-20 h-20 bg-white border border-charcoal/10 rounded-none flex items-center justify-center shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div
                  className={`w-12 h-12 ${item.color} rounded-none flex items-center justify-center text-white font-bold text-xl shadow-md`}
                >
                  {item.letter}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="integrations-cta relative px-5 md:px-8 py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight mb-6">
            Don&apos;t see your stack?
            <br />
            <span className="text-signal">We&apos;ll build the connector.</span>
          </h3>
          <p className="text-lg text-charcoal/60 max-w-xl mx-auto leading-relaxed mb-10">
            Enterprise tier includes custom integration development. We&apos;ve built
            connectors for 40+ tools and counting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group inline-flex items-center gap-3 bg-charcoal text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-signal hover:text-charcoal transition-all duration-300">
              <span>Request Integration</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <span className="text-xs text-charcoal/40 font-mono">
              Average build time: 2 weeks
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
