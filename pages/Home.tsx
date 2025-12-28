
import React from 'react';
import { Button, Icons, Card, SectionHeading } from '../components/UI.tsx';
import { useModals } from '../components/Layout.tsx';
import { NavLink } from 'react-router-dom';

const HomePage: React.FC = () => {
  const { openBookDemo } = useModals();

  const blueprints = [
    {
      title: "Home Remodeling",
      icon: <Icons.Hammer size={24} />,
      goal: "High-Ticket Qualification",
      weapon: "AI Lead Filtering",
      kpi: "30% Fewer Tire-Kickers",
      desc: "We build systems that filter out window shoppers and deliver homeowners ready to sign $50k+ contracts."
    },
    {
      title: "Roofing & Siding",
      icon: <Icons.Shield size={24} />,
      goal: "Storm-Ready Capture",
      weapon: "Local Map Dominance",
      kpi: "2x Storm Lead Velocity",
      desc: "When the hail hits, you need to be the first name they see. We optimize your GMB for maximum neighborhood visibility."
    },
    {
      title: "HVAC Services",
      icon: <Icons.Zap size={24} />,
      goal: "Off-Season Stability",
      weapon: "Database Reactivation",
      kpi: "Filled Shoulder Seasons",
      desc: "Stop the seasonal roller coaster. We use automated nurture sequences to fill your maintenance schedule year-round."
    },
    {
      title: "Plumbing Pros",
      icon: <Icons.Phone size={24} />,
      goal: "Emergency Job Capture",
      weapon: "Missed Call Text-Back",
      kpi: "Zero Leads Lost to Voicemail",
      desc: "Emergency callers book the first person who answers. If you can't pick up, our AI texts them instantly to secure the job."
    }
  ];

  const secondaryTrades = [
    "Electrical", "Landscaping", "Solar", "Painting", 
    "Flooring", "Cleaning", "Fencing", "Pest Control"
  ];

  return (
    <div>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-light">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-red/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-navy/5 blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-red mr-2 animate-pulse"></span>
                Now accepting new contractors
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-brand-navy leading-tight mb-6">
                Local Customers Are Searching — <span className="text-brand-red">Your Competitors Are Answering</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                If your business isn’t showing up, responding fast, and following up automatically, those leads are going somewhere else.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button size="lg" onClick={openBookDemo} className="w-full sm:w-auto">
                  Get Exclusive Leads
                </Button>
                <a href="tel:+16072351747" className="w-full sm:w-auto">
                   <Button variant="outline" size="lg" fullWidth>Call Now</Button>
                </a>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img 
                   src="https://picsum.photos/800/600" 
                   alt="Dashboard Analytics" 
                   className="rounded-xl w-full h-auto object-cover" 
                />
                <div className="absolute -left-6 top-10 bg-white p-4 rounded-lg shadow-xl border border-gray-50 flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Icons.Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">New Lead</p>
                    <p className="font-bold text-brand-navy">Kitchen Remodel</p>
                  </div>
                </div>
                <div className="absolute -right-6 bottom-20 bg-white p-4 rounded-lg shadow-xl border border-gray-50 flex items-center space-x-3">
                   <div className="bg-brand-gold/20 p-2 rounded-full">
                    <Icons.Star className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Reputation</p>
                    <p className="font-bold text-brand-navy">5 New Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3-STEP SYSTEM SECTION --- */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 order-2 lg:order-1">
              <div className="mb-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight mb-4">
                  A Simple 3-Step System To <span className="text-brand-red">Explode Your Growth</span>
                </h2>
                <div className="h-1.5 w-24 bg-brand-red rounded-full"></div>
              </div>

              <div className="space-y-12">
                {[
                  {
                    num: "01",
                    title: "We Build Your Engine",
                    desc: "We launch your high-converting website, set up the AI automations, and optimize your Google profile."
                  },
                  {
                    num: "02",
                    title: "We Drive The Traffic",
                    desc: "Through SEO and reputation management, we flood your business with high-intent local searchers."
                  },
                  {
                    num: "03",
                    title: "You Close The Deals",
                    desc: "Our system filters the leads, books the appointments, and hands you ready-to-buy customers."
                  }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 md:gap-8 group">
                    <div className="text-5xl md:text-6xl font-black text-brand-red/10 group-hover:text-brand-red transition-colors duration-500 tabular-nums">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-brand-navy mb-3">{step.title}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 order-1 lg:order-2 w-full">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-red/10 rounded-[2.5rem] blur-2xl transform translate-x-4 translate-y-4"></div>
                <Card className="relative p-8 md:p-10 border-0 shadow-2xl rounded-[2.5rem] bg-brand-navy overflow-hidden">
                  <div className="absolute top-0 right-0 p-10 opacity-10 text-white">
                    <Icons.Chart size={120} />
                  </div>
                  <div className="relative z-10 text-white">
                    <div className="flex items-center justify-between mb-12">
                      <h4 className="text-xl font-bold tracking-tight">Marketing Dashboard</h4>
                      <div className="bg-brand-red px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">Live View</div>
                    </div>
                    <div className="mb-8">
                      <span className="block text-blue-200 text-xs font-bold uppercase tracking-widest mb-3 opacity-80">New Leads This Month</span>
                      <div className="flex items-end gap-5">
                        <span className="text-6xl md:text-7xl font-black text-brand-gold tracking-tighter drop-shadow-md">2,405</span>
                        <div className="flex items-center text-green-400 font-black mb-3 text-lg">
                          <Icons.ArrowRight size={22} className="-rotate-45 mr-1" />
                          <span>+22%</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-white/10">
                      <div>
                        <span className="block text-blue-100 text-[10px] font-bold uppercase tracking-wider mb-2 opacity-70">Conversion Rate</span>
                        <span className="text-3xl font-black text-white">14.8%</span>
                      </div>
                      <div>
                        <span className="block text-blue-100 text-[10px] font-bold uppercase tracking-wider mb-2 opacity-70">CPA (Average)</span>
                        <span className="text-3xl font-black text-white">$12.50</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SNAPSHOT --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Everything You Need to Win Locally" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { title: "Smart Websites", desc: "Sites built to convert, not just look pretty." },
               { title: "Missed Call Text-Back", desc: "Never lose a lead to voicemail again." },
               { title: "SEO & Google Maps", desc: "Rank #1 in your service area." },
               { title: "Reputation Management", desc: "Get more 5-star reviews automatically." },
               { title: "AI Voice Agents", desc: "A receptionist that never sleeps." },
               { title: "Lead Nurturing", desc: "Email & SMS campaigns that close deals." },
             ].map((svc, i) => (
               <Card key={i} className="p-6 hover:-translate-y-1 transition-transform border border-gray-100">
                 <div className="flex items-start justify-between mb-4">
                   <h3 className="text-lg font-bold text-brand-navy">{svc.title}</h3>
                   <Icons.Check className="text-brand-red w-5 h-5" />
                 </div>
                 <p className="text-gray-600 mb-4">{svc.desc}</p>
                 <NavLink to="/services" className="text-sm font-semibold text-brand-navy hover:text-brand-red flex items-center">
                   Learn More <Icons.ArrowRight size={14} className="ml-1" />
                 </NavLink>
               </Card>
             ))}
          </div>
          <div className="text-center mt-12">
            <Button onClick={openBookDemo}>Explore All Services</Button>
          </div>
        </div>
      </section>

      {/* --- BLUEPRINT SECTION (INDUSTRIES WE SERVE) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Industries We Serve" 
            subtitle="We don't do 'general' marketing. We build specialized growth blueprints for these specific trades." 
          />
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {blueprints.map((item, i) => (
              <div key={i} className="group relative bg-brand-navy rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:translate-y-[-4px] shadow-xl">
                <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-white/10 transition-colors">
                  <div className="scale-[4]">{item.icon}</div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-brand-red rounded-xl text-white shadow-lg">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                  
                  <p className="text-blue-100/70 mb-8 leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/10 pt-8">
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-1">Primary Goal</span>
                      <span className="text-sm text-white font-medium">{item.goal}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-1">Secret Weapon</span>
                      <span className="text-sm text-white font-medium">{item.weapon}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-1">Target KPI</span>
                      <span className="text-sm text-white font-medium">{item.kpi}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-brand-light rounded-[2.5rem] p-12 text-center border border-gray-100">
            <h4 className="text-xl font-bold text-brand-navy mb-8">Also Dominating These Local Markets:</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {secondaryTrades.map((trade, i) => (
                <NavLink key={i} to="/industries" className="px-6 py-3 bg-white border border-gray-200 rounded-2xl font-bold text-gray-700 hover:border-brand-red hover:text-brand-red transition-all shadow-sm">
                  {trade}
                </NavLink>
              ))}
            </div>
            <div className="mt-10">
              <NavLink to="/contact" className="inline-flex items-center text-brand-red font-bold hover:underline">
                Don't see your trade? Let's talk about custom systems <Icons.ArrowRight size={18} className="ml-2" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-20 bg-brand-light">
         <div className="container mx-auto px-4">
            <SectionHeading title="What Clients Say" />
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { quote: "Our phone is finally ringing. The missed-call text back feature alone paid for the service in the first week.", author: "Mike T.", company: "Titan Roofing" },
                 { quote: "I used to waste so much money on Angi leads. Now I own my own traffic and the leads are exclusive to me.", author: "Sarah L.", company: "Modern Kitchens" },
                 { quote: "The team at Local Boss Marketing actually understands contractors. No fluff, just booked jobs.", author: "David R.", company: "Rapid HVAC" }
               ].map((test, i) => (
                 <Card key={i} className="p-8 border-0">
                    <div className="flex text-brand-gold mb-4">
                       {[...Array(5)].map((芽, j) => <Icons.Star key={j} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-gray-600 mb-6 italic">"{test.quote}"</p>
                    <div>
                       <p className="font-bold text-brand-navy">{test.author}</p>
                       <p className="text-sm text-gray-500">{test.company}</p>
                    </div>
                 </Card>
               ))}
            </div>
         </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-brand-navy text-white text-center">
         <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Ready to Scale with Local Boss Marketing?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
               Stop letting competitors take your jobs. Let's build a system that fills your calendar.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Button onClick={openBookDemo} size="lg" className="bg-brand-red hover:bg-white hover:text-brand-red">Book Demo Call</Button>
               <a href="tel:+16072351747">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-navy">Call Now</Button>
               </a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default HomePage;
