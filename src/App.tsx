import React, { Component, ErrorInfo, ReactNode } from 'react';

/* ── Error Boundary ── */
class ErrorBoundary extends Component<{children: ReactNode}, {hasError: boolean, error: Error | null}> {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error: Error) { return { hasError: true, error }; }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) { console.error("App Error:", error, errorInfo); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-red-600 bg-red-50 min-h-screen font-sans">
          <h1 className="text-2xl font-bold mb-4">Application Error</h1>
          <pre className="whitespace-pre-wrap font-mono text-sm">{this.state.error?.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

/* ── Icons ── */
const HB = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>;
const GlobeI = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const ClkI = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const ShldI = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const TrendI = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const PhoneI = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const MapI = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const MsgI = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const LstI = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>;
const StarI = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const AwardI = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>;
const ZapI = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const ImgI = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>;
const LayI = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>;
const SmphI = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>;
const ExtI = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>;
const ChkI = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;

/* ── Shared ── */
function Logo() {
  return (
    <div className="flex items-center gap-3 mb-16">
      <div className="text-blue-700">
        <HB />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-xl tracking-wider text-slate-900">TOUCHSTONE</span>
        <span className="text-xs text-blue-700 font-bold tracking-[0.2em]">DIAGNOSTICS</span>
      </div>
    </div>
  );
}

function Heading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-slate-900 mb-3">{title}</h2>
      {subtitle && <p className="text-xl text-slate-500">{subtitle}</p>}
      <div className="w-16 h-1.5 bg-blue-600 mt-6 rounded-full"></div>
    </div>
  );
}

function Footer({ page }: { page: number }) {
  return (
    <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end text-sm text-slate-400 border-t border-slate-100 pt-6">
      <div className="flex flex-col gap-1">
        <span className="font-medium text-slate-500">© 2026 Touchstone Diagnostics Ltd. All rights reserved</span>
        <span>0901 888 8143 · 66 Ogunlana Drive, Surulere, Lagos</span>
      </div>
      <span className="font-bold">Page {page}</span>
    </div>
  );
}

/* ── Page 1: Cover ── */
function P1() {
  return (
    <div className="bg-white shadow-xl my-8 p-12 rounded-2xl border border-slate-200 flex flex-col min-h-[1056px] relative">
      <Logo />
      <div className="flex-grow flex flex-col justify-center">
        <h1 className="text-6xl font-extrabold text-slate-900 leading-tight mb-6">
          Professional<br />
          Diagnostic <span className="text-blue-600">Web Platform</span>
        </h1>
        <p className="text-2xl text-slate-500 max-w-2xl leading-relaxed">
          Your Patients Are Searching Online. Let's Make Sure They Find You.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-12 mt-24 mb-12">
        <div>
          <label className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-3 block">PREPARED FOR</label>
          <p className="font-bold text-lg text-slate-900 mb-1">Touchstone Diagnostics</p>
          <p className="text-slate-600 mb-1">66 Ogunlana Drive, Surulere, Lagos</p>
          <p className="text-slate-600 mb-1">0901 888 8143</p>
        </div>
        <div>
          <label className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-3 block">PREPARED BY</label>
          <p className="font-bold text-lg text-slate-900 mb-1">David Ajibua</p>
          <p className="text-slate-600 mb-1">Web Developer</p>
          <p className="text-slate-600 mb-1">07068634125</p>
          <p className="text-slate-600 mb-1">davidajibua78@gmail.com</p>
        </div>
      </div>
      <hr className="border-t-2 border-slate-100 my-8" />
      <div className="grid grid-cols-2 gap-12 mb-24">
        <div>
          <label className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-3 block">DEMO WEBSITE</label>
          <a href="https://touchstone-diagnostics.vercel.app" className="text-blue-600 font-medium hover:underline">
            touchstone-diagnostics.vercel.app
          </a>
        </div>
        <div>
          <label className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-3 block">DATE</label>
          <p className="text-slate-900 font-medium">March 2026</p>
        </div>
      </div>
      <Footer page={1} />
    </div>
  );
}

/* ── Page 2: Executive Summary ── */
function P2() {
  const pts = [
    { icon: <GlobeI />, title: 'Digital-First Patient Discovery', desc: "Today's patients search Google before choosing a diagnostic center. A professional website ensures Touchstone appears when it matters most." },
    { icon: <ClkI />, title: '24/7 Online Availability', desc: 'Your website works around the clock—showcasing services, displaying contact info, and routing patients to WhatsApp even outside business hours.' },
    { icon: <ShldI />, title: 'Credibility & Patient Trust', desc: 'A polished online presence signals clinical quality and professionalism, giving prospective patients the confidence to choose your center.' },
    { icon: <TrendI />, title: 'Competitive Advantage', desc: 'Most diagnostic centers in Lagos lack a strong web presence—this is a window of opportunity to capture patients searching for lab services online.' },
  ];
  return (
    <div className="bg-white shadow-xl my-8 p-12 rounded-2xl border border-slate-200 flex flex-col min-h-[1056px] relative">
      <Heading title="Executive Summary" />
      <blockquote className="text-2xl font-medium text-slate-700 italic border-l-4 border-blue-600 pl-6 my-12 leading-relaxed">
        "In today's healthcare landscape, the first impression a diagnostic center makes is no longer at the reception desk—it's on a digital screen."
      </blockquote>
      <div className="grid gap-8 mb-12">
        {pts.map((p, i) => (
          <div key={i} className="flex gap-6">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">{p.icon}</div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{p.title}</h4>
              <p className="text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mt-auto mb-24">
        <h4 className="text-lg font-bold text-slate-900 mb-3">The Goal</h4>
        <p className="text-slate-600 leading-relaxed">
          This proposal presents a fully-built professional website for Touchstone Diagnostics—designed to attract more patients, showcase your complete range of diagnostic services, and establish a trusted digital presence that reflects the clinical excellence your center already delivers.
        </p>
      </div>
      <Footer page={2} />
    </div>
  );
}

/* ── Page 3: Solution ── */
function P3() {
  const objs = [
    'Attract patients actively searching for diagnostic services in Lagos',
    'Showcase all 8 diagnostic service categories clearly and professionally',
    'Enable instant WhatsApp appointment booking with one tap',
    'Provide Google Maps integration to help patients locate the center',
    'Display 24/7 emergency contact and availability information prominently',
    'Build credibility through a modern, mobile-optimized design',
    'Ensure fast performance and smooth experience on all devices',
  ];
  return (
    <div className="bg-white shadow-xl my-8 p-12 rounded-2xl border border-slate-200 flex flex-col min-h-[1056px] relative">
      <Heading title="The Solution" subtitle="Diagnostic Web Presence Platform" />
      <div className="flex items-center gap-3 bg-blue-50 text-blue-700 p-4 rounded-lg mb-12 font-medium">
        <span className="shrink-0"><ExtI /></span>
        <span>Live Platform:</span>
        <a href="https://touchstone-diagnostics.vercel.app" target="_blank" rel="noreferrer" className="hover:underline">
          https://touchstone-diagnostics.vercel.app
        </a>
      </div>
      <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-12">
        <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
          <span className="w-3 h-3 rounded-full bg-red-400"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-400"></span>
          <span className="ml-4 bg-white px-3 py-1 rounded text-xs text-slate-500 font-mono w-64 text-center">touchstone-diagnostics.vercel.app</span>
        </div>
        <div className="bg-slate-50 h-64 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-blue-600 font-bold mb-3">
            <SmphI />
            <span>Fully Responsive</span>
          </div>
          <p className="text-slate-500 text-sm">Optimized for all devices</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12 mb-24">
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-6">Key Objectives</h3>
          <ul className="flex flex-col gap-4">
            {objs.map((o, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700">
                <span className="text-green-500 mt-1 shrink-0"><ChkI /></span>
                {o}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-slate-600 leading-relaxed">
          <p>A fully functional diagnostic website has been built specifically for Touchstone Diagnostics—tailored to the services, branding, and patient needs of a modern Nigerian diagnostic center.</p>
          <p>The platform serves as a 24/7 digital front desk: answering common questions, showcasing all diagnostic services, and routing interested patients directly to your WhatsApp for immediate booking.</p>
          <p>Hosted on Vercel for lightning-fast performance, the site is fully mobile-optimized to serve the majority of patients browsing on smartphones across Lagos.</p>
        </div>
      </div>
      <Footer page={3} />
    </div>
  );
}

/* ── Page 4: Features ── */
function P4() {
  const feats = [
    { icon: <LayI />, title: 'Professional Diagnostic Website', description: 'A clean, modern website built specifically for diagnostic centers—projecting clinical professionalism and immediately inspiring patient trust.' },
    { icon: <LstI />, title: 'Full Services Directory', description: 'All 8 service categories on display: cardiovascular, cancer prevention, diabetes wellness, fertility, imaging, lab medicine, specialized diagnostics and wellness packages.' },
    { icon: <MsgI />, title: 'WhatsApp Appointment Booking', description: 'Patients book instantly via a pre-filled WhatsApp message—zero friction for the patient, immediate notification for your team.' },
    { icon: <MapI />, title: 'Google Maps Integration', description: 'An interactive map helps patients easily locate your center at 66 Ogunlana Drive, Surulere—reducing first-visit drop-off.' },
    { icon: <PhoneI />, title: '24/7 Emergency Contact Bar', description: 'Your direct emergency number is displayed prominently at the top of every page, ensuring patients can always reach you instantly.' },
    { icon: <SmphI />, title: 'Mobile-First Responsive Design', description: 'Fully optimized experience across all smartphones, tablets, and desktops—reaching patients on every device they use.' },
    { icon: <StarI />, title: 'Modern UI and Brand Identity', description: 'A refined design using your navy and blue brand colors that reflects clinical excellence and positions Touchstone as a premium provider.' },
    { icon: <ImgI />, title: 'Facility and Equipment Imagery', description: 'High-quality images showcasing your lab, equipment, and environment—reassuring patients about your facility before they arrive.' },
  ];
  return (
    <div className="bg-white shadow-xl my-8 p-12 rounded-2xl border border-slate-200 flex flex-col min-h-[1056px] relative">
      <Heading title="Platform Features" />
      <div className="grid grid-cols-2 gap-x-8 gap-y-12 mb-24">
        {feats.map((f, i) => (
          <div key={i} className="flex flex-col">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">{f.icon}</div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h4>
            <p className="text-slate-600 leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
      <Footer page={4} />
    </div>
  );
}

/* ── Page 5: Benefits ── */
function P5() {
  const bens = [
    { icon: <TrendI />, title: 'Attract More Patients', description: 'Capture patients actively searching online for diagnostic services in Surulere and across greater Lagos.' },
    { icon: <AwardI />, title: 'Build Online Credibility', description: 'A professional web presence signals quality care and builds instant trust with new patients before they visit.' },
    { icon: <ZapI />, title: 'Streamline Appointment Flow', description: 'WhatsApp booking integration reduces manual phone coordination load for your reception staff.' },
    { icon: <ClkI />, title: 'Always Open, Always Working', description: 'Your website handles patient inquiries around the clock—on weekends, public holidays, and after hours.' },
    { icon: <MapI />, title: 'Easier Patient Navigation', description: 'Integrated location map and clear directions reduce friction for first-time patients finding your center.' },
    { icon: <ShldI />, title: 'Stand Out from Competitors', description: 'Most diagnostic centers lack a quality web presence—this positions Touchstone as the clear digital leader in the area.' },
  ];
  return (
    <div className="bg-white shadow-xl my-8 p-12 rounded-2xl border border-slate-200 flex flex-col min-h-[1056px] relative">
      <Heading title="Benefits to Touchstone Diagnostics" />
      <div className="grid grid-cols-1 gap-8 mb-12">
        {bens.map((b, i) => (
          <div key={i} className="flex items-start gap-6 p-6 bg-slate-50 rounded-xl border border-slate-100">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm text-blue-600 flex items-center justify-center shrink-0">{b.icon}</div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{b.title}</h4>
              <p className="text-slate-600">{b.description}</p>
            </div>
          </div>
        ))}
      </div>
      <blockquote className="text-2xl font-medium text-slate-700 italic border-l-4 border-blue-600 pl-6 my-12 leading-relaxed mt-auto mb-24">
        "Digital transformation in healthcare is not an expense—it's a patient acquisition strategy that works 24 hours a day, 7 days a week."
      </blockquote>
      <Footer page={5} />
    </div>
  );
}

/* ── Page 6: Investment ── */
function P6() {
  const inc = ['Full Diagnostic Website', 'WhatsApp Booking Integration', 'Google Maps Embed', 'Mobile Optimization', 'All 8 Service Pages', 'Professional UI/UX Design'];
  const mnt = ['Content Updates', 'Uploading New Images', 'Minor Improvements', 'Technical Support', 'Service Page Edits', 'Performance Monitoring'];
  return (
    <div className="bg-white shadow-xl my-8 p-12 rounded-2xl border border-slate-200 flex flex-col min-h-[1056px] relative">
      <Heading title="Investment" />
      <div className="border-2 border-blue-600 rounded-2xl p-8 mb-8 relative overflow-hidden">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">Website Development</h3>
            <p className="text-slate-500">Full digital platform implementation</p>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-4xl font-extrabold text-blue-600">$500</span>
            <span className="text-lg text-slate-500 font-medium">&#8358;700,000</span>
            <span className="text-xs font-bold text-blue-600 tracking-widest uppercase mt-2 bg-blue-50 px-2 py-1 rounded">ONE-TIME COST</span>
          </div>
        </div>
        <div className="border-t border-slate-200 mb-8"></div>
        <ul className="grid grid-cols-2 gap-4">
          {inc.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
              <span className="text-blue-600"><ChkI /></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-slate-900 text-white rounded-2xl p-8 relative mb-12">
        <span className="absolute -top-3 right-8 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider">INCLUDED</span>
        <h4 className="text-xl font-bold mb-6">FREE Maintenance for 1 Full Year</h4>
        <ul className="grid grid-cols-2 gap-4 mb-6">
          {mnt.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-slate-300">
              <span>&#8226;</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-500 border-t border-slate-800 pt-4">After the first year, maintenance can be discussed as needed.</p>
      </div>
      <div className="flex justify-between items-center bg-slate-50 p-6 rounded-xl border border-slate-100 mt-auto mb-24">
        <div>
          <label className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-1 block">DEVELOPER</label>
          <p className="font-bold text-slate-900">David Ajibua</p>
          <p className="text-slate-500 text-sm">Web Developer</p>
        </div>
        <div className="text-right text-sm text-slate-600 flex flex-col gap-1">
          <p>07068634125</p>
          <p>davidajibua78@gmail.com</p>
          <a href="https://touchstone-diagnostics.vercel.app" className="text-blue-600 hover:underline">touchstone-diagnostics.vercel.app</a>
        </div>
      </div>
      <Footer page={6} />
    </div>
  );
}

/* ── Root ── */
export default function App() {
  return (
    <ErrorBoundary>
      <div className="max-w-4xl mx-auto bg-slate-50 min-h-screen font-sans text-slate-800 p-4 sm:p-8">
        <P1 />
        <P2 />
        <P3 />
        <P4 />
        <P5 />
        <P6 />
      </div>
    </ErrorBoundary>
  );
}