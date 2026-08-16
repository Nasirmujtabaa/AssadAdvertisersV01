import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Instagram,
  Camera,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  CartesianGrid,
} from "recharts";

const reveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show:   { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.8, ease: [0.2, 0.7, 0.3, 1] } },
};
const stagger = { show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };

/* ============================================================ */
/* QASWA SALES GROWTH CHART — realistic month-by-month curve     */
/* ============================================================ */
const QASWA_DATA = [
  { m: "Jan", sales: 450, label: "Before" },
  { m: "Feb", sales: 470, label: "Before" },
  { m: "Mar", sales: 460, label: "Before" },

  { m: "Apr", sales: 490, label: "Ads Start" },

  { m: "May", sales: 530, label: "After" },
  { m: "Jun", sales: 570, label: "After" },
  { m: "Jul", sales: 610, label: "After" },
  { m: "Aug", sales: 650, label: "After" },
  { m: "Sep", sales: 680, label: "After" },
  { m: "Oct", sales: 700, label: "After" },
  { m: "Nov", sales: 710, label: "After" },
  { m: "Dec", sales: 710, label: "After" },
];

const ChartTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="aa-card !p-3 !rounded-xl text-xs" style={{ background: "#1d1d22", border: "1px solid rgba(184,242,225,0.3)" }}>
      <div className="font-semibold mb-1">{label}</div>
      <div className="aa-soft">{payload[0].value} units </div>
    </div>
  );
};

export const CaseStudyChart = () => (
  <section id="case-study" data-testid="case-study-section" className="bg-[var(--aa-bg-dark)] aa-grid-bg py-28 relative overflow-hidden">
    <div className="aa-blob aa-blob-2" style={{ width: 520, height: 520, top: "20%", right: "-200px", background: "radial-gradient(circle, #1a3f37 0%, transparent 70%)", opacity: 0.3 }} />
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger} className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <motion.span variants={reveal} className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase aa-muted mb-5">
            <TrendingUp size={14} className="text-[var(--aa-accent)]" />
            Case Study
          </motion.span>
          <motion.h2 variants={reveal} className="aa-display text-4xl sm:text-5xl lg:text-6xl">
            Qaswa Foods reported<span className="aa-acc-box" data-cursor="grow">+58% </span> in sales
            after running their TVC over major News channels.
          </motion.h2>
          <motion.p variants={reveal} className="aa-body aa-soft mt-6 max-w-md">
            We ran  Qaswa Foods advrtisement/TVC over major news channes across J&K, 
            rebuilt the keyword strategy around regional Kashmiri shoppers, and added
            local schema. Four months in, organic traffic crossed +58%.
          </motion.p>
          <motion.div variants={reveal} className="mt-8 grid grid-cols-3 gap-4">
            {[
              { k: "+58%", l: "Sales lift" },
              { k: "1.58×",   l: "Organic traffic" },
              { k: "#1",     l: "Local rank (30 kms)" },
            ].map((x) => (
              <div key={x.l} className="border-t border-[var(--aa-line)] pt-3">
                <div className="aa-display text-2xl">{x.k}</div>
                <div className="text-xs aa-muted mt-1">{x.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={reveal} className="lg:col-span-7">
          <div className="aa-card !p-6" data-testid="qaswa-chart">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-xs tracking-widest uppercase aa-muted"> 2025 </div>
                <div className="aa-display text-lg mt-1">Qaswa Foods Growth %</div>
              </div>
              <div className="hidden sm:flex gap-3 text-xs">
                <span className="flex items-center gap-1.5 aa-muted"><span className="w-2 h-2 rounded-full bg-white/40" /> Before</span>
                <span className="flex items-center gap-1.5 aa-muted"><span className="w-2 h-2 rounded-full bg-[var(--aa-accent)]" /> After SEO</span>
              </div>
            </div>
            <div className="h-[300px] sm:h-[340px]">
              <ResponsiveContainer width="100%" height="100%">http
                <AreaChart data={QASWA_DATA} margin={{ top: 10, right: 12, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="qaswa-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%"   stopColor="#b8f2e1" stopOpacity={0.7} />
                      <stop offset="100%" stopColor="#b8f2e1" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(244,239,230,0.06)" vertical={false} />
                  <XAxis dataKey="m" tick={{ fill: "#7a766c", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#7a766c", fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 110]} />
                  <Tooltip content={<ChartTooltip />} cursor={{ stroke: "rgba(184,242,225,0.3)", strokeDasharray: "3 3" }} />
                  <ReferenceLine x="Apr" stroke="#b8f2e1" strokeDasharray="4 4" strokeOpacity={0.6} label={{ value: "Ad campaign Started", fill: "#b8f2e1", fontSize: 11, position: "insideTopRight" }} />
                  <Area type="monotone" dataKey="sales" stroke="#b8f2e1" strokeWidth={2.5} fill="url(#qaswa-grad)" dot={{ r: 3, fill: "#b8f2e1" }} activeDot={{ r: 6, fill: "#b8f2e1", stroke: "#0c0c0e", strokeWidth: 2 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

/* ============================================================ */
/* PHOTOGRAPHY GALLERY                                            */
/* ============================================================ */

const PHOTOS = [
  { src: "/88.png", caption: "Pashmina House" },
  { src: "/77.png", caption: "Kashmir Crafts" },
  { src: "/55.jpg", caption: "Dal Lake Cafe" },
  { src: "/100.png", caption: "Saffron Co." },
  { src: "/133.png", caption: "Qaswa Brand" },
  { src: "/122.png", caption: "Editorial Series" },
];

export const PhotographySection = () => (
  <section id="photography" data-testid="photography-section" className="bg-[var(--aa-bg-light)] aa-grid-bg-lg py-28 relative overflow-hidden">
    <div className="aa-blob aa-blob-2" style={{ width: 540, height: 540, bottom: "10%", left: "40%", background: "radial-gradient(circle, #18342d 0%, transparent 70%)", opacity: 0.22 }} />
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
        <div>
          <motion.span variants={reveal} className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase aa-muted mb-4">
            <Camera size={14} className="text-[var(--aa-accent)]" />
            Multimedia
          </motion.span>
          <motion.h2 variants={reveal} className="aa-display text-4xl sm:text-5xl lg:text-6xl max-w-2xl">
            Final Shipments our <span className="aa-acc-box" data-cursor="grow">clients</span> love.
          </motion.h2>
          <motion.p variants={reveal} className="aa-body aa-soft mt-5 max-w-xl">
            We've Shipped 15+ commercial advertisements/TVC's , 30+ Cinemtic Reels that went viral ,  70+ Commercial Photos appearing in various Newspapers, magzines and editorials....
          </motion.p>
        </div>
        <motion.a variants={reveal} href="#contact" className="aa-outline-pill text-sm flex items-center gap-2">
          Book a shoot <ChevronRight size={14} />
        </motion.a>
      </motion.div>

    <div className="multimedia-grid">
  {PHOTOS.map((p, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0.96, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: i * 0.06 }}
      data-testid={`photo-${i}`}
      className="aa-img-zoom relative overflow-hidden rounded-2xl border border-[var(--aa-line)] bg-[var(--aa-surface)]"
      data-cursor="grow"
    >
      <img
        src={p.src}
        alt={p.caption}
        className="w-full h-full object-cover"
      />
    </motion.div>
  ))}
</div>
    </div>
  </section>
);
