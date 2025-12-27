import React from 'react';
import { SectionHeading, Card, Button, Icons } from '../components/UI';
import { useModals } from '../components/Layout';
import { NavLink } from 'react-router-dom';

// --- Privacy Policy Page ---
export const PrivacyPage: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-4xl font-extrabold text-brand-navy mb-2">Privacy Policy</h1>
          <p className="text-gray-500 mb-8 font-medium italic">Last Updated: {lastUpdated}</p>
          
          <div className="prose prose-slate max-w-none text-gray-700 space-y-8">
            <p className="leading-relaxed">
              Local Boss Marketing LLC (“we,” “us,” or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
            </p>

            <section className="bg-brand-light p-8 rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Contact Information</h2>
              <address className="not-italic text-gray-800">
                <p className="font-bold">Local Boss Marketing LLC</p>
                <p>312 W 2nd St #5196</p>
                <p>Casper, 82601 Wyoming, United States</p>
              </address>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Terms & Conditions Page ---
export const TermsPage: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-4xl font-extrabold text-brand-navy mb-2">Terms & Conditions</h1>
          <p className="text-gray-500 mb-8 font-medium italic">Last Updated: {currentDate}</p>
          
          <div className="prose prose-slate max-w-none text-gray-700 space-y-8">
            <p className="leading-relaxed">
              Welcome to Local Boss Marketing LLC. These Terms & Conditions govern your access to and use of our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- GMB Page ---
export const GMBPage: React.FC = () => {
  const { openBookDemo } = useModals();

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Icons.Map className="w-full h-full text-white" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-red/20 text-brand-red border border-brand-red/30 text-xs font-black uppercase tracking-widest mb-6">
            Map Pack Mastery
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
            Claim The <span className="text-brand-red">#1 Spot</span> On Google Maps
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-300 mb-10 leading-relaxed">
            The Top 3 results on Google Maps get 70% of the local clicks. If you're not in the "Map Pack," you're losing jobs to your competitors every single day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={openBookDemo} className="bg-brand-red">
              Audit My GMB Profile
            </Button>
            <a href="tel:+16072351747">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-navy">
                Call a Strategist
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* The Map Pack Explained */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black text-brand-navy mb-8 leading-tight">Why Maps Is Your Most Important <span className="text-brand-red">Lead Source</span></h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-red shadow-inner">
                    <Icons.Zap size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-navy mb-2">High-Intent Traffic</h4>
                    <p className="text-gray-600">People searching "Plumber near me" are ready to buy NOW. They don't want to research; they want to hire.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-red shadow-inner">
                    <Icons.Star size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-navy mb-2">Immediate Social Proof</h4>
                    <p className="text-gray-600">Your star rating is visible directly in the search. We help you build a mountain of reviews that forces them to call you first.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-red shadow-inner">
                    <Icons.Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-navy mb-2">One-Tap Contact</h4>
                    <p className="text-gray-600">Google Maps removes the friction. With one tap, customers are calling your phone or getting directions to your office.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-gray-100 p-8 rounded-[3rem] border border-gray-200 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-white/40 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10 space-y-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center text-white font-bold">1</div>
                      <div className="font-black text-brand-navy">Your Competitor</div>
                    </div>
                    <div className="flex text-brand-gold gap-1 ml-13">
                      {[...Array(5)].map((_, i) => <Icons.Star key={i} size={12} fill="currentColor" />)}
                      <span className="text-[10px] text-gray-400 font-bold ml-1">(12 reviews)</span>
                    </div>
                  </div>
                  <div className="bg-brand-navy p-6 rounded-2xl shadow-xl border-2 border-brand-red scale-105">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg">LB</div>
                        <div>
                          <div className="font-black text-white text-lg">Your Business</div>
                          <div className="flex text-brand-gold gap-1">
                            {[...Array(5)].map((_, i) => <Icons.Star key={i} size={14} fill="currentColor" />)}
                            <span className="text-[10px] text-blue-200 font-bold ml-1">(158 reviews)</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-brand-red text-white text-[10px] px-2 py-1 rounded font-black tracking-tighter animate-pulse">#1 RANKED</div>
                    </div>
                    <p className="text-xs text-blue-100">Optimized by Local Boss Engine</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 opacity-60">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-bold">3</div>
                      <div className="font-bold text-gray-400">Another Competitor</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Website & Lead Capture Page ---
export const WebsitePage: React.FC = () => {
  const { openBookDemo } = useModals();

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white relative">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-red/20 text-brand-red border border-brand-red/30 text-xs font-black uppercase tracking-widest mb-6">
            Conversion Architecture
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
            The Digital <span className="text-brand-red">Sales Machine</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-300 mb-10 leading-relaxed">
            Stop losing 90% of your website traffic. We build ultra-fast, psychology-backed websites and funnels that transform "window shoppers" into high-paying clients.
          </p>
          <Button size="lg" onClick={openBookDemo} className="bg-brand-red">Build My Machine</Button>
        </div>
      </section>

      {/* The 1-Second Load Rule */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Speed Is Revenue" 
            subtitle="If your site takes more than 3 seconds to load, you've already lost the lead. Our sites are engineered for pure velocity." 
          />
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-brand-light p-10 rounded-[2.5rem] border border-gray-100 relative shadow-inner">
               <div className="mb-10">
                 <div className="flex justify-between items-end mb-4">
                    <span className="text-sm font-black text-brand-navy uppercase">Old Slow Website</span>
                    <span className="text-gray-400 font-bold">6.8 Seconds</span>
                 </div>
                 <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-400 w-full animate-pulse"></div>
                 </div>
               </div>
               <div className="mb-4">
                 <div className="flex justify-between items-end mb-4">
                    <span className="text-sm font-black text-brand-red uppercase">Local Boss Website</span>
                    <span className="text-brand-red font-black">0.8 Seconds</span>
                 </div>
                 <div className="h-4 bg-brand-navy rounded-full overflow-hidden">
                    <div className="h-full bg-brand-red w-[12%] shadow-[0_0_15px_rgba(229,57,53,0.5)]"></div>
                 </div>
               </div>
               <p className="text-xs text-gray-500 font-bold mt-8 italic text-center">"Every 1-second delay reduces conversions by 7%." — Akamai Research</p>
            </div>
            <div className="space-y-8">
              <h3 className="text-3xl font-black text-brand-navy">Why Our Sites <span className="text-brand-red">Crush</span> The Competition:</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Icons.Check className="text-green-500 shrink-0 mt-1" />
                  <div>
                    <span className="block font-bold text-brand-navy">Psychological Trigger Points</span>
                    <p className="text-gray-600">We use authority signals, scarcity, and trust badges to guide users to the "Call" button.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Icons.Check className="text-green-500 shrink-0 mt-1" />
                  <div>
                    <span className="block font-bold text-brand-navy">Smart Lead Qualification</span>
                    <p className="text-gray-600">Forms that ask the right questions so you only spend time on high-ticket jobs.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Icons.Check className="text-green-500 shrink-0 mt-1" />
                  <div>
                    <span className="block font-bold text-brand-navy">Direct CRM Integration</span>
                    <p className="text-gray-600">Leads go straight to your phone. No spreadsheets. No manual entry.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Funnels Section */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4">
           <div className="bg-brand-navy rounded-[3rem] p-12 md:p-20 text-white flex flex-col lg:flex-row gap-16 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                 <Icons.Layout className="w-full h-full scale-150" />
              </div>
              <div className="lg:w-1/2 relative z-10">
                 <h2 className="text-4xl font-black mb-6">Website vs. <span className="text-brand-red">Sales Funnel</span></h2>
                 <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                   A website is a directory. A funnel is a pathway. We build specific landing pages for your most profitable services (e.g., "Full Roof Replacement"). 
                 </p>
                 <div className="grid grid-cols-2 gap-8 mb-10">
                   <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                      <span className="block text-brand-gold font-black text-2xl mb-2">2-5%</span>
                      <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Avg Website Conv.</span>
                   </div>
                   <div className="bg-brand-red/10 p-6 rounded-2xl border border-brand-red/20">
                      <span className="block text-brand-red font-black text-2xl mb-2">15-30%</span>
                      <span className="text-xs text-red-200 font-bold uppercase tracking-wider">Local Boss Funnel Conv.</span>
                   </div>
                 </div>
                 <Button onClick={openBookDemo} size="lg" className="bg-brand-red">I Need This Funnel</Button>
              </div>
              <div className="lg:w-1/2 relative z-10">
                 <div className="bg-white/5 border border-white/10 p-4 rounded-3xl backdrop-blur-sm">
                    <img src="https://picsum.photos/600/600?marketing" alt="Funnel Visualization" className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

// --- AI Automation Page ---
export const AutomationPage: React.FC = () => {
  const { openBookDemo, openAIVoice } = useModals();

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white relative">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-red/20 text-brand-red border border-brand-red/30 text-xs font-black uppercase tracking-widest mb-6">
            AI Workforce
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
            The Employee That <span className="text-brand-red">Never Sleeps</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-300 mb-10 leading-relaxed">
            Every missed call is a missed job. Our AI Voice and SMS systems engage your leads instantly, qualify them, and book them onto your calendar—even at 3 AM.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={openBookDemo} className="bg-brand-red shadow-[0_10px_30px_rgba(229,57,53,0.3)]">Get My AI Agent</Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-brand-navy" onClick={openAIVoice}>
              <Icons.Mic className="mr-2" size={18} /> Test AI Voice Agent
            </Button>
          </div>
        </div>
      </section>

      {/* Missed Call Text-Back Demo Scenario */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="The 5-Second Response Rule" 
            subtitle="The business that responds first wins the job 78% of the time. We make sure you're ALWAYS first." 
          />
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
            <div className="flex-1 bg-brand-light rounded-[2rem] p-8 border border-gray-200">
               <h4 className="font-black text-brand-navy mb-6 text-center uppercase tracking-widest text-sm">Customer Perspective</h4>
               <div className="space-y-4">
                  <div className="bg-gray-200 p-4 rounded-2xl rounded-bl-none max-w-[80%] text-sm">
                    "Hey, I have a burst pipe in the basement. Can you come today?"
                  </div>
                  <div className="text-[10px] text-gray-400 font-bold ml-2">Delivered • 2:14 PM</div>
                  <div className="bg-brand-navy p-4 rounded-2xl rounded-br-none max-w-[80%] ml-auto text-sm text-white font-bold shadow-xl border-l-4 border-brand-red">
                    "Hey! This is the Local Boss Plumbing AI. We just missed your call. I'm so sorry! Can you tell me your address so I can check our schedule?"
                  </div>
                  <div className="text-[10px] text-brand-red font-black text-right mr-2">Sent via AI Text-Back • 2:14 PM (Instant)</div>
               </div>
            </div>
            <div className="flex-1 bg-brand-navy rounded-[2rem] p-8 text-white flex flex-col justify-center">
               <div className="text-brand-gold font-black text-4xl mb-4">$350 - $2,500</div>
               <p className="text-gray-400 mb-8 leading-relaxed">
                 That's the average value of a job saved by <span className="text-white font-bold">Missed-Call Text Back</span>. If you miss just one call a week, our system pays for itself 10x over.
               </p>
               <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy" onClick={openBookDemo}>Calculate Your Lost Revenue</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Voice AI Deep Dive */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black text-brand-navy mb-8 leading-tight">Human-Like <span className="text-brand-red">Voice AI</span> Receptionists</h2>
              <p className="text-lg text-gray-600 mb-10">
                Forget robotic IVRs. Our voice agents sound like real people, understand complex questions, and can handle booking directly into your ServiceTitan, Housecall Pro, or Google Calendar.
              </p>
              <div className="space-y-6">
                {[
                  "Answer calls while you're on a ladder or under a sink.",
                  "Filter out telemarketers and spam instantly.",
                  "Confirm appointments and send automated reminders.",
                  "Collect initial job details and photos via text follow-up."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center text-white">
                      <Icons.Check size={14} />
                    </div>
                    <span className="font-bold text-brand-navy">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
               <Card className="p-8 border-0 shadow-2xl rounded-[3rem] bg-white">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center text-brand-gold animate-bounce">
                        <Icons.Mic size={24} />
                     </div>
                     <div>
                        <span className="block text-[10px] font-black uppercase text-gray-400 tracking-widest">Active Call</span>
                        <span className="text-lg font-black text-brand-navy">AI Receptionist Core</span>
                     </div>
                  </div>
                  <div className="space-y-6">
                     <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">C</div>
                        <div className="text-sm bg-gray-50 p-4 rounded-2xl rounded-tl-none border">"Do you guys do emergency HVAC repair in Casper?"</div>
                     </div>
                     <div className="flex gap-3 flex-row-reverse">
                        <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center shrink-0 text-white text-xs font-black">AI</div>
                        <div className="text-sm bg-brand-navy text-white p-4 rounded-2xl rounded-tr-none shadow-lg">"Yes we do! We have a technician available at 4 PM today. Should I put you on the schedule?"</div>
                     </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-gray-100 flex justify-center">
                     <Button size="sm" onClick={openAIVoice} variant="secondary">Hear The Real Voice</Button>
                  </div>
               </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Reputation Management Page ---
export const ReputationPage: React.FC = () => {
  const { openBookDemo } = useModals();

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white relative">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-red/20 text-brand-red border border-brand-red/30 text-xs font-black uppercase tracking-widest mb-6">
            Reputation Engine
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
            The Power Of <span className="text-brand-red">Social Proof</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-300 mb-10 leading-relaxed">
            If you have 10 reviews and your competitor has 100, the customer will hire them 9 times out of 10. We automate your 5-star reviews so you never have to ask for a review again.
          </p>
          <Button size="lg" onClick={openBookDemo} className="bg-brand-red">Automate My Reviews</Button>
        </div>
      </section>

      {/* The Feedback Loop */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
           <SectionHeading title="How The Trust Engine Works" subtitle="A hands-off system that collects 5-star reviews from every happy client." />
           <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {[
                { 
                  title: "Instant Text Request", 
                  desc: "As soon as the job is marked complete in your CRM, our system sends a personalized SMS: 'How did we do?'",
                  icon: Icons.MessageCircle 
                },
                { 
                  title: "Smart Filtering", 
                  desc: "Happy customers are sent to Google/Facebook. Unhappy ones are sent to a private form so you can resolve it first.",
                  icon: Icons.Shield 
                },
                { 
                  title: "Auto-Publishing", 
                  desc: "New 5-star reviews are instantly streamed to your website as social proof pop-ups that close new leads.",
                  icon: Icons.Zap 
                }
              ].map((step, i) => (
                <div key={i} className="relative group">
                  <div className="bg-brand-light p-10 rounded-[2.5rem] h-full border border-gray-100 hover:border-brand-red transition-all duration-500 hover:-translate-y-2">
                     <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-red mb-8 shadow-sm group-hover:bg-brand-red group-hover:text-white transition-colors duration-500">
                        <step.icon size={32} />
                     </div>
                     <h4 className="text-2xl font-black text-brand-navy mb-4">{step.title}</h4>
                     <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                  {i < 2 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 text-gray-200">
                       <Icons.ArrowRight size={32} />
                    </div>
                  )}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Trust Comparison */}
      <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                 <h2 className="text-4xl font-black mb-8 leading-tight">Own Your Local Market Authority</h2>
                 <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                   In the service industry, reviews are currency. A business with 500 reviews can charge <span className="text-white font-bold">20-30% more</span> than one with 20 reviews. People pay for the peace of mind that comes with a proven track record.
                 </p>
                 <div className="space-y-4">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center gap-6">
                       <Icons.Chart className="text-brand-gold" size={40} />
                       <div>
                          <span className="block font-black text-brand-gold text-2xl">+280%</span>
                          <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Average Review Growth</span>
                       </div>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center gap-6">
                       <Icons.Users className="text-brand-red" size={40} />
                       <div>
                          <span className="block font-black text-brand-red text-2xl">92%</span>
                          <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Consumers trust local reviews</span>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="lg:w-1/2 w-full">
                 <div className="relative">
                    <div className="absolute inset-0 bg-brand-red/20 blur-[100px] rounded-full"></div>
                    <Card className="relative p-10 bg-white border-0 shadow-2xl rounded-[3rem]">
                       <div className="flex text-brand-gold gap-2 mb-6">
                          {[...Array(5)].map((_, i) => <Icons.Star key={i} size={28} fill="currentColor" />)}
                       </div>
                       <p className="text-gray-700 text-2xl font-serif italic mb-10 leading-relaxed">
                         "The automated reviews changed our business. We went from 20 reviews to 180 in just 4 months. Now, when we quote high-ticket jobs, the clients already trust us because they read our reviews."
                       </p>
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                          <div>
                             <span className="block font-black text-brand-navy">Jim Masterson</span>
                             <span className="text-sm text-gray-500 font-bold">Masterson Roofing & Siding</span>
                          </div>
                       </div>
                    </Card>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-brand-navy mb-6">Your Competitors Are Collecting Reviews. Are You?</h2>
            <p className="text-xl text-gray-600 mb-10">Stop leaving your reputation to chance. Build a trust engine that scales your business.</p>
            <Button size="lg" onClick={openBookDemo}>Audit My Reputation</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Services Overview Page (Framework) ---
export const ServicesPage: React.FC = () => {
  const { openBookDemo } = useModals();

  const corePillars = [
    {
      title: "Local Market Dominance (SEO)",
      path: "/google-business-profile",
      problem: "Your business is invisible to 90% of local searchers.",
      strategy: "We optimize your GMB and website to claim the #1 spot in the 'Map Pack' for your most profitable keywords.",
      outcome: "Sustainable, organic, high-intent phone calls every single month.",
      icon: Icons.Map
    },
    {
      title: "Conversion-First Web Systems",
      path: "/website-and-lead-capture",
      problem: "Your current site is just a digital business card, not a sales tool.",
      strategy: "We build ultra-fast, mobile-first websites and funnels designed specifically to capture and qualify leads.",
      outcome: "3x to 5x more lead submissions from your existing website traffic.",
      icon: Icons.Layout
    },
    {
      title: "Automated Trust Engines",
      path: "/reputation-management",
      problem: "Competitors with more reviews are stealing your easy jobs.",
      strategy: "Our software automatically requests, collects, and publishes 5-star reviews from every happy customer you serve.",
      outcome: "A dominant online reputation that makes you the only logical choice.",
      icon: Icons.Star
    },
    {
      title: "AI Speed-to-Lead Suite",
      path: "/ai-automation",
      problem: "You lose 50% of your leads because you can't answer the phone in time.",
      strategy: "AI text-back, web-chat, and voice agents engage callers instantly 24/7/365.",
      outcome: "Zero lost opportunities. Every caller is engaged within seconds.",
      icon: Icons.Zap
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="bg-brand-navy py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <Icons.Chart className="w-full h-full scale-150 rotate-12" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-7xl font-black mb-6">Our Growth Framework</h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            We don't sell 'marketing tasks.' We implement a complete revenue engine tailored for local service businesses.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="The Four Core Pillars" 
            subtitle="To dominate your local market, you need a system that handles Visibility, Conversion, Reputation, and Response."
          />
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {corePillars.map((pillar, i) => (
              <NavLink key={i} to={pillar.path} className="group flex flex-col bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-red mb-8 group-hover:bg-brand-red group-hover:text-white transition-colors duration-500">
                  <pillar.icon size={32} />
                </div>
                <h3 className="text-2xl font-extrabold text-brand-navy mb-8">{pillar.title}</h3>
                
                <div className="space-y-6 flex-1">
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest text-brand-red mb-1">The Problem</span>
                    <p className="text-gray-600 leading-relaxed">{pillar.problem}</p>
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest text-brand-navy mb-1">The Strategy</span>
                    <p className="text-gray-600 leading-relaxed">{pillar.strategy}</p>
                  </div>
                  <div className="bg-brand-light p-4 rounded-xl border-l-4 border-brand-red">
                    <span className="block text-[10px] font-black uppercase tracking-widest text-brand-navy mb-1">Business Outcome</span>
                    <p className="text-brand-navy font-bold">{pillar.outcome}</p>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-brand-navy mb-6">Stop Doing Random Acts of Marketing.</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Build a system that works as hard as you do on the job site. Let's map out your growth blueprint today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Button size="lg" onClick={openBookDemo}>Start Your Free Audit</Button>
               <NavLink to="/pricing">
                 <Button variant="outline" size="lg">Compare Packages</Button>
               </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Industries Page ---
export const IndustriesPage: React.FC = () => {
  const { openBookDemo } = useModals();
  const blueprints = [
    {
      title: "Home Remodeling",
      icon: <Icons.Hammer size={32} />,
      goal: "High-Ticket Qualification",
      weapon: "AI Lead Filtering",
      kpi: "30% Fewer Tire-Kickers",
      desc: "Stop wasting time on people who 'just want a quote.' Our systems qualify homeowners based on budget and timeline before they ever reach your inbox."
    },
    {
      title: "Roofing & Siding",
      icon: <Icons.Shield size={32} />,
      goal: "Storm-Ready Capture",
      weapon: "Local Map Dominance",
      kpi: "2x Storm Lead Velocity",
      desc: "In the roofing world, the first responder wins. We optimize your Google Business Profile to be the immediate choice for hail and storm damage repair."
    },
    {
      title: "HVAC Services",
      icon: <Icons.Zap size={32} />,
      goal: "Off-Season Stability",
      weapon: "Database Reactivation",
      kpi: "Filled Shoulder Seasons",
      desc: "Don't let your business die in the spring and fall. We build automated nurture systems that reactivate your existing customer base for maintenance."
    },
    {
      title: "Plumbing Pros",
      icon: <Icons.Phone size={32} />,
      goal: "Emergency Job Capture",
      weapon: "Missed Call Text-Back",
      kpi: "Zero Leads Lost to Voicemail",
      desc: "Emergency plumbing is all about speed. If you miss a call while under a sink, our system texts the lead back instantly to keep them from calling your competitor."
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Industries We Serve" subtitle="We speak your language. We don't just 'market'—we build growth systems for your specific trade." />
        
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {blueprints.map((item, i) => (
            <div key={i} className="flex flex-col bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow overflow-hidden group">
               <div className="p-10 flex-1">
                  <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-brand-red transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-extrabold text-brand-navy mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-50">
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Growth Goal</span>
                      <span className="font-bold text-brand-navy">{item.goal}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-50">
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Secret Weapon</span>
                      <span className="font-bold text-brand-navy">{item.weapon}</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Target KPI</span>
                      <span className="font-bold text-green-600">{item.kpi}</span>
                    </div>
                  </div>
               </div>
               <div className="px-10 py-6 bg-brand-light">
                  <Button variant="ghost" fullWidth onClick={openBookDemo} className="group-hover:text-brand-red">
                    See the {item.title} Framework <Icons.ArrowRight size={18} className="ml-2" />
                  </Button>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Results Page ---
export const ResultsPage: React.FC = () => {
  const { openBookDemo } = useModals();

  const caseStudies = [
    {
      industry: "Roofing & Siding • Texas",
      timeframe: "180 Days",
      title: "From 12 to 38 Quality Leads per Month",
      quote: "We were invisible on Google Maps and spending way too much on HomeAdvisor leads. Local Boss built us an asset we actually own.",
      metrics: [
        { label: "Call Growth", value: "+216%" },
        { label: "New Reviews", value: "34" },
        { label: "Est. Revenue", value: "$145k+" }
      ]
    },
    {
      industry: "HVAC Services • Florida",
      timeframe: "90 Days",
      title: "Stabilizing Schedule in Record Time",
      quote: "The missed-call text back was a game charger for us. Now, those people get a text instantly and we book them before they can call the next guy.",
      metrics: [
        { label: "Booking Rate", value: "+42%" },
        { label: "Lead Capture", value: "88%" },
        { label: "GMB Views", value: "+130%" }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20">
       <div className="container mx-auto px-4">
         <SectionHeading 
            title="Real Results from Real Pros" 
            subtitle="No vanity metrics. Just steady, trackable revenue growth for local businesses." 
         />
         <div className="grid gap-12">
            {caseStudies.map((study, idx) => (
               <div key={idx} className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-500">
                  <div className="md:w-5/12 bg-brand-navy p-10 flex flex-col justify-center text-white">
                     <div className="mb-8">
                        <span className="text-brand-gold text-sm font-bold uppercase tracking-widest block mb-2">{study.industry}</span>
                        <h3 className="text-3xl font-bold leading-tight">{study.title}</h3>
                     </div>
                     <div className="grid grid-cols-1 gap-4">
                        {study.metrics.map((m, i) => (
                           <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex justify-between items-center">
                              <span className="text-gray-400 text-sm">{m.label}</span>
                              <span className="text-xl font-black text-brand-gold">{m.value}</span>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="p-10 md:w-7/12 flex flex-col justify-center bg-gray-50/50">
                     <p className="text-gray-700 text-xl italic leading-relaxed font-serif mb-8">"{study.quote}"</p>
                     <Button variant="secondary" onClick={openBookDemo}>View Strategy Breakdown</Button>
                  </div>
               </div>
            ))}
         </div>
       </div>
    </div>
  );
};

// --- Pricing Page ---
export const PricingPage: React.FC = () => {
  const { openBookDemo } = useModals();
  const plans = [
    { name: "Starter", subtitle: "For new businesses", features: ["Fast Website", "Google Business Profile Setup", "Missed Call Text-Back", "Review Management"] },
    { name: "Growth", subtitle: "Most Popular", features: ["Everything in Starter", "Local SEO Campaign", "Content Marketing", "AI Chat Widget", "Lead Nurturing"] },
    { name: "Dominance", subtitle: "For market leaders", features: ["Everything in Growth", "Aggressive SEO", "AI Voice Agent", "Paid Ads Management", "Priority Support"] }
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading title="Simple, Transparent Pricing" subtitle="Invest in a system that pays for itself." />
        <div className="grid md:grid-cols-3 gap-8">
           {plans.map((plan, i) => (
             <div key={i} className={`bg-white rounded-2xl shadow-lg p-8 relative flex flex-col ${i === 1 ? 'border-2 border-brand-red transform md:-translate-y-4' : 'border border-gray-100'}`}>
                {i === 1 && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white px-4 py-1 rounded-full text-sm font-bold">Best Value</div>}
                <h3 className="text-2xl font-bold text-brand-navy mb-2">{plan.name}</h3>
                <p className="text-gray-500 mb-6">{plan.subtitle}</p>
                <div className="text-3xl font-bold mb-6">Let's Talk</div> 
                <ul className="space-y-4 mb-8 flex-1">
                   {plan.features.map((f, j) => (
                     <li key={j} className="flex items-start text-sm text-gray-700">
                        <Icons.Check className="text-brand-red mr-2 shrink-0" size={16} />
                        {f}
                     </li>
                   ))}
                </ul>
                <Button variant={i === 1 ? 'primary' : 'outline'} fullWidth onClick={openBookDemo}>Schedule Pricing Call</Button>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

// --- About Page ---
export const AboutPage: React.FC = () => {
  const { openBookDemo } = useModals();

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <Icons.Shield className="w-full h-full scale-150 rotate-12" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-red/20 text-brand-red border border-brand-red/30 text-xs font-black uppercase tracking-widest mb-6">
            Our Mission
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight max-w-5xl mx-auto">
            Putting Local Pros Back In The <span className="text-brand-red">Driver's Seat</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-300 mb-10 leading-relaxed">
            Local Boss Marketing was founded with one goal: To give local contractors the same AI-powered growth engines used by billion-dollar franchises.
          </p>
          <Button size="lg" onClick={openBookDemo} className="bg-brand-red">Join The Boss Movement</Button>
        </div>
      </section>

      {/* The Origin Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="p-2 bg-brand-light rounded-[3rem] shadow-inner">
                <img src="https://picsum.photos/800/800?office" alt="Our Team" className="rounded-[2.8rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black text-brand-navy mb-8 leading-tight">The <span className="text-brand-red">Problem</span> We Solved</h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  For years, we watched local plumbers, roofers, and remodelers get taken advantage of by "marketing agencies" that sold vague promises and vanity metrics like "impressions" and "clicks."
                </p>
                <p>
                  But you can't deposit impressions in the bank. You need <strong>booked jobs.</strong>
                </p>
                <p>
                  We saw contractors missing half their calls because they were actually on the job site. We saw them losing easy sales because they didn't have enough reviews. We saw them paying for leads that were shared with five other competitors.
                </p>
                <p className="font-bold text-brand-navy text-2xl">
                  We knew there was a better way.
                </p>
                <p>
                  Local Boss was built to bridge the gap between high-level technology and the hard-working local pro. We don't just "do marketing"—we build revenue engines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="The Boss Values" 
            subtitle="The principles that guide every decision we make for our clients." 
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Results Over Fluff", 
                desc: "We don't report on 'likes.' We report on ROI, cost-per-lead, and booked revenue.", 
                icon: Icons.Chart 
              },
              { 
                title: "Radical Transparency", 
                desc: "You will always know exactly where your marketing dollars are going and how they are performing.", 
                icon: Icons.Shield 
              },
              { 
                title: "Speed Is Everything", 
                desc: "In the local world, the first to respond wins. We build systems that make you the fastest.", 
                icon: Icons.Zap 
              }
            ].map((value, i) => (
              <Card key={i} className="p-10 border-0 shadow-xl rounded-[2.5rem] bg-white group hover:bg-brand-navy transition-all duration-500">
                <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-red mb-8 group-hover:bg-brand-red group-hover:text-white transition-colors duration-500">
                  <value.icon size={32} />
                </div>
                <h4 className="text-2xl font-black text-brand-navy mb-4 group-hover:text-white">{value.title}</h4>
                <p className="text-gray-600 group-hover:text-blue-100 leading-relaxed">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="bg-brand-navy rounded-[4rem] p-12 md:p-20 text-white relative">
              <div className="absolute bottom-0 right-0 w-full h-full opacity-5 pointer-events-none">
                 <Icons.Zap size={400} className="translate-x-1/2 translate-y-1/2 rotate-12" />
              </div>
              <div className="relative z-10 max-w-3xl">
                 <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">How We <span className="text-brand-red">Actually</span> Work</h2>
                 <div className="space-y-12">
                    {[
                      { 
                        title: "Exclusive Territory", 
                        desc: "We only work with ONE of each trade per service area. We don't play both sides. If we work with you, our only goal is to make you #1." 
                      },
                      { 
                        title: "Hands-Off Automation", 
                        desc: "Our systems are built so you can focus on the job. We handle the follow-ups, the reviews, and the optimization automatically." 
                      },
                      { 
                        title: "Owner-To-Owner", 
                        desc: "You won't be shuffled off to a junior account manager. You'll deal with experts who understand the stakes of running a small business." 
                      }
                    ].map((step, i) => (
                      <div key={i} className="flex gap-8">
                        <div className="shrink-0 w-12 h-12 rounded-full border-2 border-brand-red flex items-center justify-center text-brand-red font-black">
                           {i + 1}
                        </div>
                        <div>
                           <h4 className="text-2xl font-black mb-2">{step.title}</h4>
                           <p className="text-blue-100/70 text-lg leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                 </div>
                 <div className="mt-16">
                    <Button size="lg" onClick={openBookDemo} className="bg-brand-red shadow-2xl">Audit My Current Strategy</Button>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Final Team CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-8">Ready To Scale?</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              We aren't just another agency. We are your outsourced growth department. Let's see if we're a fit for your territory.
            </p>
            <Button size="lg" onClick={openBookDemo}>Meet The Team & Discuss Your Goals</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Blog Page ---
export const BlogPage: React.FC = () => {
  const posts = [
    { title: "How Contractors Can Turn Missed Calls into Booked Jobs", cat: "Automation", date: "Oct 12, 2023" },
    { title: "Google Business Profile Tips for Home Remodelers", cat: "SEO", date: "Sep 28, 2023" },
    { title: "AI Chatbots: Hype or Game Changer?", cat: "Technology", date: "Sep 15, 2023" },
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading title="The Local Boss Blog" subtitle="Tips & Strategies for Local Growth" />
        <div className="grid md:grid-cols-3 gap-8">
           {posts.map((post, i) => (
             <Card key={i} className="overflow-hidden">
                <div className="h-48 bg-gray-300 w-full"></div>
                <div className="p-6">
                   <h3 className="text-xl font-bold text-brand-navy mb-3">{post.title}</h3>
                   <a href="#" className="text-brand-navy font-bold text-sm underline">Read More</a>
                </div>
             </Card>
           ))}
        </div>
      </div>
    </div>
  );
};

// --- Contact Page ---
export const ContactPage: React.FC = () => {
    const { openAIVoice } = useModals();
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
           <div>
              <h1 className="text-4xl font-bold text-brand-navy mb-6">Get In Touch</h1>
              <p className="text-lg text-gray-600 mb-8">Ready to dominate your local market? Fill out the form or give us a call.</p>
              <div className="bg-brand-navy text-white p-8 rounded-2xl">
                 <h3 className="text-xl font-bold mb-2">Try our AI Agent</h3>
                 <p className="text-gray-300 mb-4">Skip the form and talk to our AI right now.</p>
                 <Button variant="primary" onClick={openAIVoice} className="w-full justify-center">Talk to AI</Button>
              </div>
           </div>
           <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Send a Message</h3>
              <form className="space-y-4">
                 <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-gray-50 border rounded-lg" />
                 <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-gray-50 border rounded-lg" />
                 <Button type="submit" fullWidth size="lg">Send Message</Button>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
};
