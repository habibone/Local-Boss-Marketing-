
import React from 'react';
import { Button, Icons, Card, SectionHeading, Badge } from '../components/UI.tsx';
import { useModals } from '../components/Layout.tsx';

const HomePage: React.FC = () => {
  const { openBookDemo } = useModals();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const jumpLinks = [
    { id: 'problem', label: 'Problem' },
    { id: 'solution', label: 'Solution' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'services', label: 'Services' },
    { id: 'who-its-for', label: 'Who It’s For' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'get-started', label: 'Get Started' },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* SECTION 1: HERO (Above the Fold) */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 bg-white">
        <div className="absolute top-0 inset-x-0 h-[80%] bg-gradient-to-b from-brand-light/50 to-white -z-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="red" className="mb-6">Built for Local Business Success</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-navy leading-[1.1] mb-8 tracking-tighter">
              Turn Your Website Into a <br className="hidden md:block" />
              <span className="text-brand-red">24/7 Salesperson</span> <br className="hidden md:block" />
              for Your Local Business
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Most websites just sit there. <br className="hidden md:block" />
              We build smart websites that answer calls, reply to customers, book appointments, and bring leads — even when you’re busy or closed.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
              <Button size="lg" onClick={openBookDemo} className="w-full sm:w-auto shadow-2xl shadow-brand-red/20">
                See How It Works (2-Minute Demo)
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollTo('get-started')} className="w-full sm:w-auto">
                Get a Free Website Check
              </Button>
            </div>

            {/* Quick Jump Anchor Row */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-10 border-t border-gray-100">
               {jumpLinks.map(link => (
                 <button 
                  key={link.id} 
                  onClick={() => scrollTo(link.id)}
                  className="text-xs font-black uppercase tracking-widest text-brand-navy hover:text-brand-red transition-colors"
                >
                  {link.label}
                 </button>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE REAL PROBLEM (ID: problem) */}
      <section id="problem" className="py-24 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading 
              title="If This Sounds Like Your Business — You’re Not Alone" 
              subtitle="The problem isn’t your service. The problem is your website isn’t doing any work for you."
            />
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-gray-100">
              <ul className="space-y-6 mb-12">
                {[
                  "Your phone rings… but you miss calls while working",
                  "People visit your website… but never contact you",
                  "Customers ask the same questions again and again",
                  "Google shows your competitors before you",
                  "Your website looks ‘fine’ but doesn’t bring business"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-brand-light transition-colors group">
                    <div className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0 mt-1 group-hover:bg-brand-red transition-colors">
                      <Icons.X className="text-brand-red group-hover:text-white" size={14} />
                    </div>
                    <span className="text-lg font-bold text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center pt-8 border-t border-gray-50">
                <Button onClick={() => scrollTo('solution')} size="lg">Show Me the Fix</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE SOLUTION (ID: solution) */}
      <section id="solution" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading 
              title="We Fix That With One Simple System"
              subtitle="Local Boss Marketing helps local business owners turn their website into a smart assistant that:"
            />
            <div className="grid md:grid-cols-2 gap-8 text-left mb-16">
               {[
                 "Talks to visitors",
                 "Answers common questions",
                 "Captures leads automatically",
                 "Follows up when you miss a call",
                 "Helps customers book faster"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 p-6 bg-brand-light rounded-2xl border border-transparent hover:border-brand-red transition-all">
                    <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center shrink-0">
                       <Icons.Check className="text-white" size={18} />
                    </div>
                    <span className="text-lg font-black text-brand-navy">{item}</span>
                 </div>
               ))}
            </div>
            <p className="text-xl font-bold text-gray-600 mb-10 leading-relaxed">
              You don’t need to learn marketing. <br />
              You don’t need to manage tools. <br />
              <span className="text-brand-navy font-black underline decoration-brand-red decoration-4">We set it up. It works in the background.</span>
            </p>
            <div className="pt-10 border-t border-gray-100">
              <p className="text-brand-red font-black uppercase text-[10px] tracking-[0.2em] mb-6">Here’s how it works step-by-step.</p>
              <Button onClick={() => scrollTo('how-it-works')} variant="outline" size="lg">See the Steps</Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS (ID: how-it-works) */}
      <section id="how-it-works" className="py-32 bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading 
            light
            title="How Our System Brings You More Customers" 
            subtitle="Bridging the gap between a visitor and a loyal client."
          />
          
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 relative max-w-6xl mx-auto">
            {[
              { t: "Smart Website", d: "Your website greets visitors, explains your service, and guides them to take action instead of leaving." },
              { t: "Instant Responses", d: "If someone calls and you miss it, or sends a message — they get an automatic reply." },
              { t: "Lead Capture", d: "Names, phone numbers, and service requests are saved automatically." },
              { t: "Follow-Up", d: "The system follows up so you don’t lose interested customers." },
              { t: "More Bookings", d: "You talk only to people who are already interested." }
            ].map((step, i) => (
              <div key={i} className="flex-1 bg-white/5 border border-white/10 p-8 rounded-[2rem] relative group hover:bg-white/10 transition-colors">
                <div className="text-4xl font-black text-brand-red mb-6 opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                <h4 className="text-xl font-black mb-4">{step.t}</h4>
                <p className="text-blue-100/60 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-blue-100/40 mb-8 font-bold">Now let’s look at what we set up for you.</p>
            <Button onClick={() => scrollTo('services')} variant="white" size="lg" className="text-brand-navy">View What’s Included</Button>
          </div>
        </div>
      </section>

      {/* SECTION 5: SERVICES (ID: services) */}
      <section id="services" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What We Set Up For Your Business" 
            subtitle="All tools work together — not separate systems." 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { t: "Smart Website", d: "A modern website that actually talks to visitors and pushes them to contact you.", icon: <Icons.Layout /> },
              { t: "Missed-Call Text Back", d: "Miss a call? The system instantly sends a text like: 'Sorry we missed your call — how can we help?'", icon: <Icons.Phone /> },
              { t: "Website Chat Assistant", d: "Visitors ask questions. The website answers instantly.", icon: <Icons.MessageCircle /> },
              { t: "Google Business Profile Help", d: "We help your business show up better on Google when people search nearby.", icon: <Icons.Shield /> },
              { t: "Reviews & Reputation", d: "We help you get more good reviews without awkward asking.", icon: <Icons.Star /> }
            ].map((svc, i) => (
              <Card key={i} className="group hover:-translate-y-2 transition-all">
                <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                  {svc.icon}
                </div>
                <h4 className="text-2xl font-black mb-4 text-brand-navy">{svc.t}</h4>
                <p className="text-gray-600 font-medium leading-relaxed">{svc.d}</p>
              </Card>
            ))}
            <div className="bg-brand-navy rounded-[2rem] p-10 flex flex-col justify-center items-center text-center text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity"><Icons.Zap size={100} /></div>
               <h4 className="text-2xl font-black mb-6 relative z-10">Wondering if this is right for your business?</h4>
               <Button onClick={() => scrollTo('who-its-for')} variant="white" size="md" className="text-brand-navy relative z-10">Is This For Me?</Button>
            </div>
          </div>
          <div className="text-center mt-12 font-bold text-gray-400">
             All tools work together — not separate systems.
          </div>
        </div>
      </section>

      {/* SECTION 6: WHO THIS IS FOR (ID: who-its-for) */}
      <section id="who-its-for" className="py-32 bg-brand-light">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading title="Built for Local Business Owners Like You" subtitle="Not for big corporations. Not for DIY marketers. Perfect for owners who want results, not headaches." />
          <div className="max-w-3xl mx-auto bg-white p-12 rounded-[3.5rem] shadow-xl text-left border border-gray-100">
             <h4 className="text-2xl font-black mb-8 text-brand-navy">This works best for:</h4>
             <ul className="grid md:grid-cols-2 gap-6 mb-12">
               {[
                 "Contractors & home services",
                 "HVAC, plumbing, remodeling",
                 "Car rentals & auto services",
                 "Clinics & professional services",
                 "Any local business wanting more calls"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                       <Icons.Check className="text-green-600" size={14} />
                    </div>
                    <span className="text-lg font-bold text-gray-700">{item}</span>
                 </li>
               ))}
             </ul>
             <div className="pt-10 border-t border-gray-100 text-center">
                <p className="text-gray-400 font-bold mb-8 italic">Here’s why owners choose Local Boss Marketing.</p>
                <Button onClick={() => scrollTo('why-us')}>Why Choose You?</Button>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY US (ID: why-us) */}
      <section id="why-us" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading 
              align="left" 
              title="Why Business Owners Choose Local Boss Marketing" 
              subtitle="Your business stays the boss. Your website does the work." 
            />
            <div className="space-y-6 mb-12">
              {[
                "We speak in plain language, not marketing terms",
                "We focus on calls, messages, and bookings — not vanity metrics",
                "Everything is set up for local businesses, not generic websites",
                "One connected system instead of 5 confusing tools",
                "You always know what’s happening"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-brand-light rounded-2xl border border-gray-100 hover:border-brand-red transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-red shadow-sm group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <Icons.Shield size={24} />
                  </div>
                  <span className="text-lg md:text-xl font-black text-brand-navy">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center pt-10 border-t border-gray-100">
               <p className="text-brand-red font-black uppercase text-[10px] tracking-widest mb-6">Ready to see if this fits your business?</p>
               <Button onClick={() => scrollTo('get-started')} size="lg">Get Started</Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: SIMPLE CTA + FORM (ID: get-started) */}
      <section id="get-started" className="py-32 bg-brand-navy relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto bg-white rounded-[4rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 bg-brand-light">
              <h2 className="text-3xl lg:text-5xl font-black text-brand-navy mb-8">Want to See If This Will Work for Your Business?</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                We’ll take a quick look at your current website and tell you:
              </p>
              <ul className="space-y-6 mb-12">
                {[
                  "What’s stopping customers from contacting you",
                  "What can be fixed quickly",
                  "If our system makes sense for you"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <Icons.Check className="text-brand-red mt-1 shrink-0" size={18} />
                    <span className="font-bold text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                 <Button onClick={openBookDemo} size="lg" className="w-full">Watch the 2-Minute Demo</Button>
              </div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-16 bg-white">
              <div className="mb-10 text-center lg:text-left">
                <h3 className="text-2xl font-black text-brand-navy mb-2">Request Your Free Check</h3>
                <p className="text-gray-500 font-medium">Get a professional report in under 24 hours.</p>
              </div>
              <form className="space-y-6" onSubmit={e => { e.preventDefault(); alert('Check Sent! We will contact you shortly.'); }}>
                 <div className="grid grid-cols-2 gap-5">
                    <div className="group space-y-2">
                       <label className="text-[11px] font-black uppercase text-gray-500 tracking-[0.15em] ml-1 transition-colors group-focus-within:text-brand-red">Your Name</label>
                       <input required type="text" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 font-bold text-brand-navy focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red outline-none transition-all placeholder:text-gray-300" placeholder="John Doe" />
                    </div>
                    <div className="group space-y-2">
                       <label className="text-[11px] font-black uppercase text-gray-500 tracking-[0.15em] ml-1 transition-colors group-focus-within:text-brand-red">Business Name</label>
                       <input required type="text" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 font-bold text-brand-navy focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red outline-none transition-all placeholder:text-gray-300" placeholder="Doe's Plumbing" />
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-5">
                    <div className="group space-y-2">
                       <label className="text-[11px] font-black uppercase text-gray-500 tracking-[0.15em] ml-1 transition-colors group-focus-within:text-brand-red">Phone</label>
                       <input required type="tel" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 font-bold text-brand-navy focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red outline-none transition-all placeholder:text-gray-300" placeholder="(555) 000-0000" />
                    </div>
                    <div className="group space-y-2">
                       <label className="text-[11px] font-black uppercase text-gray-500 tracking-[0.15em] ml-1 transition-colors group-focus-within:text-brand-red">Email</label>
                       <input required type="email" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 font-bold text-brand-navy focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red outline-none transition-all placeholder:text-gray-300" placeholder="john@example.com" />
                    </div>
                 </div>
                 <div className="group space-y-2">
                    <label className="text-[11px] font-black uppercase text-gray-500 tracking-[0.15em] ml-1 transition-colors group-focus-within:text-brand-red">Website URL (Optional)</label>
                    <div className="relative">
                      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-red transition-colors">
                        <Icons.Layout size={18} />
                      </div>
                      <input type="url" className="w-full bg-white border border-gray-200 rounded-2xl pl-14 pr-6 py-4 font-bold text-brand-navy focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red outline-none transition-all placeholder:text-gray-300" placeholder="www.yourbusiness.com" />
                    </div>
                 </div>
                 <div className="group space-y-2">
                    <label className="text-[11px] font-black uppercase text-gray-500 tracking-[0.15em] ml-1 transition-colors group-focus-within:text-brand-red">What do you want more of?</label>
                    <div className="relative">
                       <select className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 font-bold text-brand-navy focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red outline-none transition-all appearance-none cursor-pointer">
                          <option>I want more Phone Calls</option>
                          <option>I want more Text Messages</option>
                          <option>I want more Online Bookings</option>
                       </select>
                       <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          <Icons.ArrowRight size={18} className="rotate-90" />
                       </div>
                    </div>
                 </div>
                 <div className="pt-6">
                    <Button type="submit" fullWidth size="lg" className="py-5 shadow-2xl shadow-brand-red/30">
                       <Icons.Shield size={18} className="mr-2" />
                       Send My Free Strategy Report
                    </Button>
                    <div className="mt-6 flex items-center justify-center gap-4 text-gray-400">
                       <div className="flex items-center gap-1.5">
                          <Icons.Shield size={14} className="text-green-500" />
                          <span className="text-[10px] font-black uppercase tracking-widest">Secure Submission</span>
                       </div>
                       <div className="w-px h-3 bg-gray-200"></div>
                       <span className="text-[11px] font-bold tracking-tight italic">
                          No pressure. No credit card required.
                       </span>
                    </div>
                 </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FOOTER MESSAGE */}
      <section className="py-20 bg-brand-light border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
           <h3 className="text-2xl md:text-3xl font-black text-brand-navy max-w-2xl mx-auto leading-tight">
              You focus on running your business. <br className="hidden md:block" />
              We’ll make sure your website helps instead of hurts.
           </h3>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
