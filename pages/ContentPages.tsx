
import React, { useState } from 'react';
import { SectionHeading, Card, Button, Icons, Badge } from '../components/UI.tsx';
import { useModals } from '../components/Layout.tsx';
import { NavLink } from 'react-router-dom';

// --- Privacy Policy Page ---
export const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-brand-navy mb-8 border-b pb-4">Privacy Policy</h1>
        <div className="prose prose-blue max-w-none text-gray-700">
          <p className="mb-4">Effective Date: {new Date().toLocaleDateString()}</p>
          <p className="mb-6">
            Local Boss Marketing LLC (“we,” “us,” or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, including our website <a href="https://www.localbossmarketing.com" className="text-brand-red hover:underline">www.localbossmarketing.com</a> (“Service”). This policy is designed to inform users of our Service about how we handle personal information and to ensure compliance with privacy laws and regulations.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We may collect personal information that you voluntarily provide to us when you use our Service, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Contact Information:</strong> Such as your name, email address, and phone number.</li>
            <li><strong>CRM Data:</strong> Information related to your Customer Relationship Management (CRM) system, including contact lists you choose to integrate with our Service.</li>
            <li><strong>Usage Data:</strong> Information on how you use our Service, including features accessed, pages visited, and message logs.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect about you to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Provide, operate, and maintain our Service.</li>
            <li>Improve, personalize, and expand our Service.</li>
            <li>Understand and analyze how you use our Service.</li>
            <li>Develop new products, services, features, and functionality.</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the Service, and for marketing and promotional purposes.</li>
            <li>Send you text messages, notifications, and automated responses for missed calls.</li>
            <li>Find and prevent fraud and other unauthorized activities.</li>
            <li>Manage your subscriptions and deliver relevant marketing communications, if you have opted in.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">3. Data Security</h2>
          <p className="mb-6">
            We implement a variety of security measures to protect your personal information from unauthorized access, use, or disclosure. These measures include encryption, access controls, and secure transmission technologies. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee the absolute security of your information.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">4. Your Data Protection Rights</h2>
          <p className="mb-4">
            Depending on your location and applicable privacy laws, you may have the following data protection rights:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>The right to access, update, or delete the information we have on you.</li>
            <li>The right to correct any inaccuracies in your information (rectification).</li>
            <li>The right to object to the processing of your data.</li>
            <li>The right to restrict the processing of your data.</li>
            <li>The right to receive a copy of the data we hold in a portable format (data portability).</li>
            <li>The right to withdraw consent to the processing of your data at any time.</li>
          </ul>
          <p className="mb-6">If you wish to exercise any of these rights, please contact us at <a href="mailto:support@localbossmarketing.com" className="text-brand-red hover:underline">support@localbossmarketing.com</a>.</p>

          <h2 className="text-xl font-bold mt-8 mb-4">5. Cookies</h2>
          <p className="mb-6">
            Our website uses cookies to enhance user experience, analyze site usage, and offer personalized content and ads. You can adjust your cookie preferences in your browser settings; however, disabling cookies may impact your ability to fully utilize the Service.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">6. Changes to This Privacy Policy</h2>
          <p className="mb-6">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the “Effective Date” above. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">7. Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns regarding this Privacy Policy, please contact us at:
          </p>
          <address className="not-italic bg-gray-50 p-6 rounded-lg border border-gray-100">
            <p className="font-bold text-brand-navy">Local Boss Marketing LLC</p>
            <p>312 W 2nd St #5196</p>
            <p>Casper, 82601 Wyoming, United States</p>
            <p className="mt-2"><strong>Phone:</strong> +1 (607) 235-1747</p>
            <p><strong>Email:</strong> <a href="mailto:support@localbossmarketing.com" className="text-brand-red hover:underline">support@localbossmarketing.com</a></p>
          </address>
        </div>
      </div>
    </div>
  );
};

// --- Terms & Conditions Page ---
export const TermsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-brand-navy mb-8 border-b pb-4">Terms & Conditions</h1>
        <div className="prose prose-blue max-w-none text-gray-700">
          <p className="mb-4 text-sm text-gray-500 italic font-medium">Effective Date: {new Date().toLocaleDateString()}</p>
          <p className="mb-6">
            Welcome to Local Boss Marketing LLC. These Terms & Conditions (“Terms”) govern your access to and use of our website <a href="https://www.localbossmarketing.com" className="text-brand-red hover:underline">www.localbossmarketing.com</a> (“Site”) and the services we provide, including our software and related tools that assist in Website and Sales Funnel creation, Reputation Management, Automatic Text Replies for Missed Calls, Smart Website Chat Tool, Text Messaging with Customers, and Social Media Marketing (“Service”). By accessing or using our Site or Service, you agree to comply with and be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Site or Service.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">1. Acceptable Use Policy</h2>
          <p className="mb-4">
            You agree to use our Site and Service only for lawful purposes and in compliance with all applicable local, state, national, and international laws and regulations regarding the transmission of electronic communications. Specifically, you agree not to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-3">
            <li><strong>Send Unsolicited Messages:</strong> Do not send messages to individuals who have not explicitly opted in to receive messages from you. Consent is required before any messages can be sent.</li>
            <li><strong>Use Purchased Lists:</strong> Do not send messages to contacts obtained from purchased, rented, or third-party lists for unsolicited or cold messaging purposes.</li>
            <li><strong>Engage in Spamming:</strong> Do not send unwanted or repeated messages to recipients. Ensure your communications are targeted, relevant, and welcomed by the recipients.</li>
            <li><strong>Promote Prohibited Substances:</strong> Do not send messages that promote the sale or use of illegal or prohibited substances.</li>
            <li><strong>Message Minors:</strong> Do not send messages to individuals under the age of consent in their respective jurisdiction.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">2. User Responsibilities</h2>
          <ul className="list-disc pl-6 mb-6 space-y-3">
            <li><strong>Automated Opt-Out:</strong> Ensure that your messaging campaigns include a clear, straightforward automated opt-out mechanism for recipients to easily unsubscribe from future communications.</li>
            <li><strong>Compliance with Regulations:</strong> You must comply with all relevant regulations and guidelines related to electronic communications, including SMS, in your country. It is your responsibility to stay informed and adhere to these laws.</li>
            <li><strong>Ethical Conduct:</strong> You agree to conduct your campaigns ethically and responsibly, respecting the privacy and preferences of your recipients.</li>
            <li><strong>Indemnification:</strong> You agree to indemnify, defend, and hold harmless Local Boss Marketing LLC, its affiliates, officers, agents, employees, and partners from any claims, liabilities, damages, and expenses (including, without limitation, reasonable attorneys’ fees) arising from your use of the Service.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">3. Services and Payments</h2>
          <ul className="list-disc pl-6 mb-6 space-y-3">
            <li><strong>Services Provided:</strong> Local Boss Marketing LLC offers various marketing and lead generation services, including but not limited to Website and Sales Funnel creation, Reputation Management, Automatic Text Replies for Missed Calls, Smart Website Chat Tool, Text Messaging with Customers, and Social Media Marketing.</li>
            <li><strong>Subscription and Fees:</strong> By subscribing to our Service, you agree to pay all applicable fees based on the selected service plan. Payment is required in advance and may be subject to automatic renewal based on your chosen subscription plan.</li>
            <li><strong>Non-Refundable Payments:</strong> All payments made to Local Boss Marketing LLC are non-refundable unless otherwise agreed in writing. You are responsible for the payment of all fees due to us under these Terms, and any late payment may result in the suspension or termination of your access to the Service.</li>
            <li><strong>Payment Methods:</strong> We accept major credit cards and other payment methods specified on the Site. You agree to provide accurate and complete payment information and authorize us to charge your payment method for any fees incurred.</li>
            <li><strong>Service Modifications:</strong> We reserve the right to modify our Service offerings, including pricing and payment terms. Any changes to your plan will be communicated to you in advance, and you will have the option to accept the changes or cancel your subscription.</li>
            <li><strong>Failure to Pay:</strong> If you fail to make a payment, we may suspend or terminate your access to the Service without notice. You agree to pay any reasonable collection costs, including attorney fees, incurred by Local Boss Marketing LLC to collect unpaid amounts.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">4. Delivery of Communications</h2>
          <p className="mb-4">
            Please be aware that the delivery of messages, including SMS and email, is subject to the complexities and variabilities of networks and technologies across different carriers and regions. Despite our efforts to ensure reliable and timely delivery, issues such as network disruptions, compatibility differences among carriers, or technical malfunctions can occasionally prevent successful message transmission.
          </p>
          <p className="mb-6">
            By using our Service, you acknowledge these limitations and agree that we are not liable for any delays or failures in the delivery of messages that arise from factors beyond our control.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="mb-6">
            To the maximum extent permitted by law, Local Boss Marketing LLC shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of our Site or Service, even if we have been advised of the possibility of such damages. Your use of our Site and Service is at your own risk.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">6. Termination</h2>
          <p className="mb-6">
            We reserve the right to terminate or suspend your access to our Site or Service immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach these Terms. Upon termination, your right to use the Service will cease immediately.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">7. Changes to This Agreement</h2>
          <p className="mb-6">
            Welcome to Local Boss Marketing LLC. These Terms & Conditions (“Terms”) govern your access to and use of our website <a href="https://www.localbossmarketing.com" className="text-brand-red hover:underline">www.localbossmarketing.com</a> (“Site”) and the services we provide, including our software and related tools that assist in Website and Sales Funnel creation, Reputation Management, Automatic Text Replies for Missed Calls, Smart Website Chat Tool, Text Messaging with Customers, and Social Media Marketing (“Service”). By accessing or using our Site or Service, you agree to comply with and be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Site or Service.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">8. Governing Law</h2>
          <p className="mb-6">
            These Terms and your use of the Site and Service shall be governed by and construed in accordance with the laws of the state of Wyoming, without regard to its conflict of law principles. Any legal action or proceeding related to your access to or use of the Site or Service must be brought in a court located in Wyoming, and you consent to the jurisdiction of such courts.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">9. Contact Information</h2>
          <p className="mb-4">
            If you have any questions or concerns regarding these Terms & Conditions, please contact us at:
          </p>
          <address className="not-italic bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
            <p className="font-bold text-brand-navy">Local Boss Marketing LLC</p>
            <p>312 W 2nd St #5196</p>
            <p>Casper, 82601 Wyoming, United States</p>
            <p className="mt-2"><strong>Phone:</strong> +1 (607) 235-1747</p>
            <p><strong>Email:</strong> <a href="mailto:support@localbossmarketing.com" className="text-brand-red hover:underline">support@localbossmarketing.com</a></p>
          </address>
        </div>
      </div>
    </div>
  );
};

// --- GMB Page ---
export const GMBPage: React.FC = () => {
  const { openBookDemo } = useModals();

  return (
    <div className="pt-24 pb-20 overflow-hidden bg-white">
      {/* Hero */}
      <section className="bg-brand-navy py-32 text-white relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <Icons.Map className="w-full h-full text-white scale-150 rotate-12" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-2/3">
              <Badge variant="red" className="mb-6 shadow-xl shadow-brand-red/10">Google Business Authority</Badge>
              {/* HEADING PRESERVED EXACTLY AS REQUESTED */}
              <h1 className="text-4xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tighter">
                Own the <span className="text-brand-red">Map Pack</span>.<br />Own Your City.
              </h1>
              <p className="max-w-2xl text-xl md:text-2xl text-blue-100/70 mb-12 leading-relaxed">
                70% of local service clicks stay within the first 3 Map results. If you aren't there, you're invisible. We use a proprietary ranking framework to force your business into the "Money Zone."
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Button size="lg" onClick={openBookDemo} className="bg-brand-red px-12 shadow-2xl shadow-brand-red/30">
                  Run My Ranking Audit
                </Button>
                <a href="tel:+16072351747" className="group">
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-brand-navy px-12">
                    Talk to a Maps Expert
                  </Button>
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 hidden lg:block">
               <div className="bg-white/5 border border-white/10 p-8 rounded-[3rem] backdrop-blur-md relative">
                  <div className="absolute -top-6 -right-6 bg-brand-gold text-brand-navy font-black p-5 rounded-2xl shadow-2xl rotate-12 flex items-center gap-2">
                    <Icons.Star size={20} fill="currentColor" />
                    #1 RANKED
                  </div>
                  <div className="space-y-6">
                    <div className="h-4 w-3/4 bg-white/20 rounded-full"></div>
                    <div className="h-4 w-1/2 bg-white/10 rounded-full"></div>
                    <div className="flex gap-1.5 text-brand-gold">
                      {[...Array(5)].map((_, i) => <Icons.Star key={i} size={18} fill="currentColor" />)}
                    </div>
                    <div className="pt-6 grid grid-cols-2 gap-3">
                       <div className="h-24 bg-white/5 rounded-2xl border border-white/5 animate-pulse"></div>
                       <div className="h-24 bg-white/5 rounded-2xl border border-white/5 animate-pulse delay-75"></div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Local Grid Heatmap Section */}
      <section className="py-28 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
               <SectionHeading 
                align="left"
                badge="The Invisible Reality"
                title={<>Your Ranking Changes Every <span className='text-brand-red italic'>Square Mile</span></>}
                subtitle="Google shows different results depending on where the customer is standing. Most businesses rank #1 in their office, but drop to #10 just three miles away. We fix the drop-off."
               />
               <div className="space-y-6 mb-10">
                  {[
                    { t: "Hyper-Local Authority", d: "We extend your ranking 'radius' so you dominate the entire city, not just your street." },
                    { t: "Geofenced Optimization", d: "Targeted geotagging of assets to signal to Google that you service specific high-value neighborhoods." },
                    { t: "Competitor Displacement", d: "Pushing out 'ghost' listings and low-authority competitors from the top 3 spots." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center text-brand-gold shrink-0">
                          <Icons.Map size={20} />
                       </div>
                       <div>
                          <h4 className="font-black text-brand-navy text-lg leading-tight">{item.t}</h4>
                          <p className="text-gray-500 text-sm font-medium">{item.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="lg:w-1/2 w-full relative">
               <div className="bg-white p-10 rounded-[4rem] shadow-2xl border border-gray-100 relative overflow-hidden">
                  <div className="flex justify-between items-center mb-8">
                     <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Local Ranking Heatmap</span>
                     <Badge variant="gold">LIVE SIMULATION</Badge>
                  </div>
                  
                  {/* Heatmap Grid Mockup */}
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className={`aspect-square rounded-2xl flex items-center justify-center relative ${i === 4 ? 'bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.4)]' : 'bg-red-500/10'}`}>
                         <Icons.Map size={24} className={i === 4 ? 'text-white' : 'text-red-500'} />
                         <span className={`absolute -bottom-2 font-black text-[10px] ${i === 4 ? 'text-green-600' : 'text-red-500'}`}>
                           {i === 4 ? '#1' : `#${i+8}`}
                         </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-6 bg-brand-navy rounded-3xl text-center">
                     <p className="text-white font-bold text-sm">This business is <span className="text-brand-red">Invisible</span> everywhere <br /> except their front door.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Pillars Deep-Dive */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="The Google Ranking Algorithm Decoded" 
            subtitle="Google doesn't rank businesses by accident. They use three core metrics to determine who gets the phone calls. We optimize all three." 
          />
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {[
              { 
                title: "Proximity & Radius", 
                desc: "Google prioritizes businesses closest to the searcher. We use advanced service-area optimization to 'stretch' your ranking signal across your entire territory.",
                icon: Icons.Map,
                color: "text-blue-600",
                badge: "GEOGRAPHIC REACH"
              },
              { 
                title: "Relevance & Content", 
                desc: "We align your profile categories, GMB posts, and website LSI keywords so Google knows exactly which high-ticket jobs you are the authority for.",
                icon: Icons.Zap,
                color: "text-brand-red",
                badge: "KEYWORD ALIGNMENT"
              },
              { 
                title: "Prominence & Proof", 
                desc: "This is your authority score. We boost this through review velocity, citation consistency, and backlink authority from local directories.",
                icon: Icons.Shield,
                color: "text-brand-gold",
                badge: "SOCIAL AUTHORITY"
              }
            ].map((pillar, i) => (
              <Card key={i} className="p-12 border-0 bg-brand-light rounded-[3rem] shadow-lg group hover:bg-brand-navy transition-all duration-500 flex flex-col h-full">
                <div className={`w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform ${pillar.color}`}>
                  <pillar.icon size={40} />
                </div>
                <Badge variant="navy" className="mb-4 bg-brand-navy/10 group-hover:bg-white/10 group-hover:text-white">{pillar.badge}</Badge>
                <h4 className="text-2xl font-black text-brand-navy mb-4 group-hover:text-white">{pillar.title}</h4>
                <p className="text-gray-600 group-hover:text-blue-100 leading-relaxed font-medium flex-1">{pillar.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI & Lead Cost Comparison */}
      <section className="py-28 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
             <Badge variant="white" className="mb-6">The Profit Math</Badge>
             <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
                Organic Calls vs. <br />
                <span className="text-brand-gold italic">Shared Leads</span>
             </h2>
             <p className="text-xl text-blue-100/70 max-w-2xl mx-auto">
                Stop paying for leads that are sold to 5 other contractors. Build an asset you own that rings your phone exclusively.
             </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
             <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-md">
                <h4 className="text-2xl font-black mb-8 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white"><Icons.X size={16} /></div>
                   Lead Aggregators (Angi/LSA)
                </h4>
                <ul className="space-y-6">
                   {[
                     { l: "Lead Cost", v: "$50 - $150 per lead" },
                     { l: "Competition", v: "Shared with 3-5 others" },
                     { l: "Ownership", v: "You pay forever" },
                     { l: "Profitability", v: "Low margins" }
                   ].map((item, i) => (
                     <li key={i} className="flex justify-between border-b border-white/10 pb-4">
                        <span className="text-gray-400 font-bold">{item.l}</span>
                        <span className="font-black text-red-400">{item.v}</span>
                     </li>
                   ))}
                </ul>
             </div>
             
             <div className="p-10 bg-brand-red rounded-[3rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                   <Icons.Zap size={160} />
                </div>
                <h4 className="text-2xl font-black mb-8 flex items-center gap-3 relative z-10">
                   <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-red"><Icons.Check size={16} /></div>
                   LBM GMB Dominance
                </h4>
                <ul className="space-y-6 relative z-10">
                   {[
                     { l: "Lead Cost", v: "$0.00 (Organic)" },
                     { l: "Competition", v: "100% Exclusive Calls" },
                     { l: "Ownership", v: "You own the territory" },
                     { l: "Profitability", v: "Highest margins" }
                   ].map((item, i) => (
                     <li key={i} className="flex justify-between border-b border-white/20 pb-4">
                        <span className="text-red-100 font-bold">{item.l}</span>
                        <span className="font-black text-white">{item.v}</span>
                     </li>
                   ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* The 12-Step Implementation Vault */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="The GMB Dominance Framework" 
            subtitle="We don't just 'optimize' your profile. We implement a surgical 12-step growth engine."
          />
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 max-w-5xl mx-auto">
            {[
              { t: "NAP Audit", d: "Scanning 100+ directories to ensure Name, Address, and Phone consistency (Critical for Trust)." },
              { t: "EXIF Metadata Injection", d: "Injecting geographic coordinates into your business photos to signal local relevance." },
              { t: "Competitor Spam Purge", d: "Reporting and removing fake competitor listings that are stealing your local traffic." },
              { t: "Review Velocity Management", d: "Automated systems to ensure a steady stream of keywords-rich 5-star reviews." },
              { t: "Category Siloing", d: "Correctly nesting your primary and secondary categories to capture high-intent searches." },
              { t: "LSI Post Engine", d: "Weekly keyword-optimized posts that signal to Google your profile is hyper-active." }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="text-4xl font-black text-brand-navy/10 group-hover:text-brand-red transition-colors duration-300">0{i+1}</div>
                <div>
                   <h5 className="text-xl font-black text-brand-navy mb-2">{step.t}</h5>
                   <p className="text-gray-500 font-medium text-sm leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final High-Impact CTA */}
      <section className="py-28 bg-brand-light">
        <div className="container mx-auto px-4 text-center">
           <div className="max-w-5xl mx-auto bg-brand-navy p-12 md:p-32 rounded-[5rem] shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-1000">
               <Icons.Map size={300} />
             </div>
             <div className="relative z-10">
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
                   Your City Is <span className="text-brand-red italic">Waiting.</span> <br />
                   Claim Your Spot.
                </h2>
                <p className="text-xl md:text-2xl text-blue-100/70 mb-12 max-w-3xl mx-auto leading-relaxed">
                  We only work with ONE contractor per trade per area. If your competitor claims the top spot first, we can't help you knock them off. 
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                   <Button size="lg" onClick={openBookDemo} className="bg-brand-red px-20 shadow-2xl shadow-brand-red/30 transform hover:scale-105">
                     Check My Territory Availability
                   </Button>
                </div>
                <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-10 opacity-40">
                   <div className="flex items-center gap-2">
                     <Icons.Check size={20} className="text-brand-gold" />
                     <span className="text-xs font-black uppercase tracking-widest text-white">Full Citation Audit Included</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <Icons.Check size={20} className="text-brand-gold" />
                     <span className="text-xs font-black uppercase tracking-widest text-white">Real-Time ROI Tracking</span>
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
    <div className="pt-24 pb-20 overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="bg-brand-navy py-32 text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge variant="red" className="mb-6 shadow-xl shadow-brand-red/10">Engineered for Conversion</Badge>
          {/* HEADING PRESERVED EXACTLY AS REQUESTED */}
          <h1 className="text-4xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tighter max-w-5xl mx-auto">
            Stop Losing <span className="text-brand-red italic">90%</span> <br className="hidden md:block" />
            Of Your Website Visitors
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-blue-100/70 mb-12 leading-relaxed font-medium">
            Most local agency websites are "digital brochures"—pretty to look at, but useless for sales. We build <span className="text-white font-black underline decoration-brand-red decoration-4">Revenue Engines</span> that capture leads while you sleep.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button size="lg" onClick={openBookDemo} className="bg-brand-red px-12 shadow-2xl shadow-brand-red/30">
              Build My Revenue Engine
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-brand-navy px-12">
              Audit My Current Site
            </Button>
          </div>
        </div>
      </section>

      {/* The 3-Second Window */}
      <section className="py-28 bg-brand-light overflow-hidden border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <SectionHeading 
                align="left"
                badge="The 3-Second Rule"
                title={<>The Window Of <span className="text-brand-red">Opportunity</span> Is Closing</>}
                subtitle="In the local world, speed is the only advantage. If your site takes 4 seconds to load, half your potential customers are already clicking on your competitor's link."
              />
              <div className="space-y-8">
                 {[
                   { t: "Frictionless Capture Quizzes", d: "Standard forms are lead-killers. We use multi-step 'Smart Quizzes' that feel like a conversation and convert 3x better by qualifying the lead instantly." },
                   { t: "Mobile-Dominant UI", d: "92% of local searches happen on a phone. We build 'Thumb-Friendly' layouts that place the call button exactly where the user's hand is." },
                   { t: "Persuasive Direct-Response Copy", d: "We don't write generic descriptions. We write psychological sales scripts that target customer pain points and trigger the 'Call Now' response." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 items-start p-8 bg-white rounded-[2.5rem] shadow-xl border border-gray-100 group hover:-translate-y-1 transition-transform">
                     <div className="w-14 h-14 rounded-2xl bg-brand-navy flex items-center justify-center text-brand-gold shrink-0 shadow-lg">
                        <Icons.Zap size={28} />
                     </div>
                     <div>
                       <h4 className="text-xl font-black text-brand-navy mb-2 leading-tight">{item.t}</h4>
                       <p className="text-gray-500 font-medium leading-relaxed">{item.d}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full relative">
               <div className="absolute -inset-10 bg-brand-navy/5 rounded-[5rem] -z-10 rotate-3"></div>
               <div className="bg-white p-10 rounded-[4rem] shadow-2xl border border-gray-100 relative overflow-hidden">
                  <div className="mb-10 border-b border-gray-100 pb-8 flex items-center justify-between">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                     </div>
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">LBM Speed-Core Live</span>
                     </div>
                  </div>
                  
                  <div className="space-y-16">
                     <div className="relative">
                        <div className="flex justify-between items-end mb-4">
                           <div>
                              <span className="block text-[11px] font-black text-gray-400 uppercase tracking-tighter mb-1">Generic Contractor Template</span>
                              <span className="text-3xl font-black text-brand-navy">4.2s Load Time</span>
                           </div>
                           <Badge variant="red" className="px-3">CRITICAL</Badge>
                        </div>
                        <div className="h-4 bg-gray-100 rounded-full w-full overflow-hidden shadow-inner">
                           <div className="h-full bg-brand-red w-[78%] animate-pulse"></div>
                        </div>
                        <div className="mt-4 flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest">
                           <span>Bounce Rate: 64%</span>
                           <span>Lead Loss: High</span>
                        </div>
                     </div>

                     <div className="relative">
                        <div className="flex justify-between items-end mb-4">
                           <div>
                              <span className="block text-[11px] font-black text-brand-red uppercase tracking-tighter mb-1">LBM Revenue Engine</span>
                              <span className="text-3xl font-black text-brand-navy">0.7s Load Time</span>
                           </div>
                           <Badge variant="gold" className="px-3">ELITE</Badge>
                        </div>
                        <div className="h-4 bg-brand-light rounded-full w-full overflow-hidden shadow-inner">
                           <div className="h-full bg-green-500 w-[99%] shadow-[0_0_20px_rgba(34,197,94,0.6)]"></div>
                        </div>
                        <div className="mt-4 flex justify-between text-[10px] font-black text-green-600 uppercase tracking-widest">
                           <span>Bounce Rate: 8%</span>
                           <span>Lead Loss: Zero</span>
                        </div>
                     </div>
                  </div>
                  
                  <div className="mt-12 p-6 bg-brand-navy rounded-3xl text-center">
                     <p className="text-white font-bold text-sm">We don't build sites to look "nice". <br /> We build sites to <span className="text-brand-gold italic">DOMINATE</span>.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anatomy of a Winner Section */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={<>The Anatomy of a <span className="text-brand-red">Booked Job</span></>}
            subtitle="Every pixel on our sites is placed with intent. We use consumer psychology to guide visitors from 'just looking' to 'hire me'."
          />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
             <div className="order-2 lg:order-1 relative">
                <div className="bg-brand-navy rounded-[3rem] p-4 shadow-2xl relative overflow-hidden">
                   <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[3/4] relative">
                      {/* Fake Website Mockup */}
                      <div className="h-14 bg-brand-navy flex items-center px-6 gap-3">
                         <div className="w-8 h-8 rounded bg-brand-gold"></div>
                         <div className="h-2 w-24 bg-white/20 rounded"></div>
                      </div>
                      <div className="p-8">
                         <div className="h-4 w-3/4 bg-gray-200 rounded mb-4"></div>
                         <div className="h-10 w-full bg-brand-red rounded-xl mb-12 flex items-center justify-center text-white text-xs font-black uppercase">Click To Call</div>
                         
                         <div className="space-y-4 mb-10">
                            <div className="h-2 w-full bg-gray-100 rounded"></div>
                            <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                            <div className="h-2 w-4/6 bg-gray-100 rounded"></div>
                         </div>
                         
                         <div className="bg-brand-light p-6 rounded-2xl border border-gray-200">
                            <div className="flex gap-2 text-brand-gold mb-3">
                               {[...Array(5)].map((_, i) => <Icons.Star key={i} size={12} fill="currentColor" />)}
                            </div>
                            <div className="h-2 w-1/2 bg-gray-300 rounded"></div>
                         </div>
                      </div>
                      {/* Annotations */}
                      <div className="absolute top-[10%] -right-10 bg-white p-4 rounded-2xl shadow-xl border-l-4 border-brand-red animate-bounce max-w-[150px]">
                         <span className="text-[10px] font-black text-brand-navy uppercase block mb-1">Conversion Point</span>
                         <p className="text-[9px] text-gray-500 leading-tight">Sticky Click-to-Call follows the user everywhere.</p>
                      </div>
                      <div className="absolute bottom-[20%] -left-10 bg-white p-4 rounded-2xl shadow-xl border-l-4 border-brand-gold max-w-[150px]">
                         <span className="text-[10px] font-black text-brand-navy uppercase block mb-1">Trust Signal</span>
                         <p className="text-[9px] text-gray-500 leading-tight">Dynamic local reviews stacked at the point of action.</p>
                      </div>
                   </div>
                </div>
             </div>
             
             <div className="order-1 lg:order-2 space-y-12">
                <div className="space-y-4">
                   <h3 className="text-3xl font-black text-brand-navy">Built-In Trust Stacking</h3>
                   <p className="text-gray-600 font-medium text-lg leading-relaxed">Customers in 2024 don't trust claims. They trust proof. We integrate your Google and Facebook reviews directly into the sales path, updating in real-time as you win more business.</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   <div className="space-y-3">
                      <Icons.Shield className="text-brand-red" size={32} />
                      <h4 className="font-black text-brand-navy uppercase tracking-tighter">Authority Badge</h4>
                      <p className="text-sm text-gray-500">We design custom trade badges (e.g., "5-Star Local Pro") that establish your territory dominance.</p>
                   </div>
                   <div className="space-y-3">
                      <Icons.Users className="text-brand-red" size={32} />
                      <h4 className="font-black text-brand-navy uppercase tracking-tighter">Human Element</h4>
                      <p className="text-sm text-gray-500">Professional photography optimization that shows the faces behind the brand, building instant rapport.</p>
                   </div>
                </div>
                
                <div className="pt-8 border-t border-gray-100">
                   <div className="flex flex-wrap gap-4 items-center">
                      <span className="text-xs font-black uppercase text-gray-400 tracking-widest mr-4">Integrates With Your Tech:</span>
                      <div className="px-4 py-2 bg-brand-light rounded-xl font-black text-gray-400 text-xs grayscale hover:grayscale-0 transition-all">ServiceTitan</div>
                      <div className="px-4 py-2 bg-brand-light rounded-xl font-black text-gray-400 text-xs grayscale hover:grayscale-0 transition-all">Jobber</div>
                      <div className="px-4 py-2 bg-brand-light rounded-xl font-black text-gray-400 text-xs grayscale hover:grayscale-0 transition-all">Housecall Pro</div>
                   </div>
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
  const { openBookDemo } = useModals();

  return (
    <div className="pt-24 pb-20 overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="bg-brand-navy py-32 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#E5393515_0%,transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge variant="gold" className="mb-6 shadow-xl shadow-brand-gold/10">The 24/7 AI Workforce</Badge>
          {/* HEADING PRESERVED EXACTLY AS REQUESTED */}
          <h1 className="text-4xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tighter max-w-5xl mx-auto">
            Scale Your Service <br className="hidden md:block" />
            <span className="text-brand-gold">Without Hiring</span> A Soul
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-blue-100/70 mb-12 leading-relaxed">
            Every missed call is a missed mortgage payment. Our AI systems engage your leads instantly, qualify them on autopilot, and fill your calendar—even at 3 AM.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button size="lg" onClick={openBookDemo} className="bg-brand-red px-12 shadow-2xl shadow-brand-red/30">
              Get My AI Agent
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-brand-navy px-12">
              Calculate Lost Revenue
            </Button>
          </div>
        </div>
      </section>

      {/* The Speed-to-Lead Deep Dive */}
      <section className="py-28 bg-white border-b border-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <SectionHeading 
                align="left"
                badge="The Technical Advantage"
                title={<>The Science of <span className='text-brand-red italic'>Speed-to-Lead</span></>}
                subtitle="78% of customers buy from the company that responds first. If your AI isn't answering the call, your competitor is."
              />
              <div className="space-y-10">
                 {[
                   { 
                     t: "Missed-Call Text Back 2.0", 
                     d: "Standard text-backs are just apologies. Ours are logic-engines. They detect the intent of the call and trigger a custom booking sequence based on the urgency of the job.",
                     icon: <Icons.MessageCircle />
                   },
                   { 
                     t: "Natural Language Voice AI", 
                     d: "Our voice agents don't sound like robots. They use advanced NLP (Natural Language Processing) to handle common objections and schedule jobs directly into your CRM.",
                     icon: <Icons.Mic />
                   },
                   { 
                     t: "Multilingual Engagement", 
                     d: "Capture leads in the language your customer speaks. Our AI handles Spanish, French, and English fluently to broaden your market reach.",
                     icon: <Icons.Layout />
                   }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 items-start">
                     <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center text-brand-red shrink-0 shadow-sm border border-brand-red/10">
                        {item.icon}
                     </div>
                     <div>
                       <h4 className="text-xl font-black text-brand-navy mb-2 leading-tight">{item.t}</h4>
                       <p className="text-gray-500 font-medium leading-relaxed text-sm">{item.d}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full relative">
               <div className="absolute -inset-10 bg-brand-light rounded-[5rem] -z-10 rotate-3"></div>
               <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-gray-100 relative overflow-hidden">
                  <div className="mb-10 border-b border-gray-50 pb-8 flex items-center justify-between">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-brand-red animate-pulse"></div>
                        <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">AI Decision Engine Live</span>
                     </div>
                     <Badge variant="navy">LOW LATENCY</Badge>
                  </div>
                  
                  {/* Decision Tree Simulation */}
                  <div className="space-y-6">
                     <div className="p-4 bg-brand-navy rounded-2xl text-white text-xs font-bold border-l-4 border-brand-gold ml-0 max-w-[80%]">
                        Inbound Call: 12:44:01 PM (Unanswered)
                     </div>
                     <div className="w-px h-6 bg-gray-200 mx-8"></div>
                     <div className="p-4 bg-brand-red rounded-2xl text-white text-xs font-bold border-l-4 border-white ml-8 max-w-[80%]">
                        Action: Trigger Missed-Call Text Back (12:44:03 PM)
                     </div>
                     <div className="w-px h-6 bg-gray-200 mx-16"></div>
                     <div className="p-4 bg-white border border-gray-200 rounded-2xl text-gray-600 text-xs font-bold ml-16 max-w-[80%]">
                        "Hey! It's Joe from ABC HVAC. Sorry I missed you. Is this an AC emergency?"
                     </div>
                     <div className="w-px h-6 bg-gray-200 mx-24"></div>
                     <div className="p-4 bg-green-500 rounded-2xl text-white text-xs font-bold border-l-4 border-white ml-24 max-w-[80%]">
                        Customer: "YES! Unit is smoking." → AI QUALIFIED AS URGENT
                     </div>
                  </div>
                  
                  <div className="mt-12 p-6 bg-brand-navy rounded-3xl text-center">
                     <p className="text-white font-black text-sm uppercase tracking-tighter">Total Response Time: <span className="text-brand-gold">1.8 Seconds</span></p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Database Reactivation Framework */}
      <section className="py-28 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <Badge variant="white" className="mb-6">The Profit Engine</Badge>
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
              Database Reactivation: <br />
              <span className="text-brand-gold italic">The Revenue Faucet</span>
            </h2>
            <p className="text-xl text-blue-100/70 max-w-2xl mx-auto">
              You're sitting on a goldmine of past customers and leads. Our AI campaigns mine that data to fill your schedule during slow seasons without a cent in ad spend.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
             {[
               { t: "Deep Sync", d: "We pull all past leads from your CRM into our secure AI sandbox.", icon: <Icons.Zap /> },
               { t: "Intent Filtering", d: "AI analyzes past job history to target only high-likelihood repeat customers.", icon: <Icons.Shield /> },
               { t: "Nurture Loops", d: "Automated, non-spammy SMS sequences that re-start conversations.", icon: <Icons.MessageCircle /> },
               { t: "Auto-Booking", d: "Interested leads are qualified and pushed directly back into your schedule.", icon: <Icons.Calendar /> }
             ].map((item, i) => (
               <Card key={i} className="bg-white/5 border border-white/10 p-10 group hover:bg-brand-red/10 transition-colors duration-500 rounded-[3rem] relative flex flex-col h-full">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-navy font-black shadow-xl group-hover:scale-110 transition-transform">
                    {i+1}
                  </div>
                  <div className="text-brand-gold mb-6 group-hover:text-white transition-colors">{item.icon}</div>
                  <h4 className="text-xl font-black mb-4">{item.t}</h4>
                  <p className="text-sm text-blue-100/60 leading-relaxed font-medium flex-1">{item.d}</p>
               </Card>
             ))}
          </div>
          
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mx-auto">
             {[
               { l: "Setup Time", v: "24 Hours" },
               { l: "Average ROI", v: "1,200%+" },
               { l: "Lead Cost", v: "$0.00" },
               { l: "Efficiency", v: "100%" }
             ].map((stat, i) => (
               <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md text-center">
                  <span className="block text-3xl font-black text-brand-gold mb-1">{stat.v}</span>
                  <span className="text-[10px] uppercase font-black text-gray-400 tracking-widest">{stat.l}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CRM Technical Integrations */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={<>Plugs Into Your <span className="text-brand-red">Existing Workflow</span></>}
            subtitle="Our AI doesn't work in a vacuum. It integrates directly with the software you already use to run your crews."
          />
          
          <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto opacity-60">
             {["ServiceTitan", "Jobber", "Housecall Pro", "QuickBooks", "Zapier", "FieldEdge", "Google Calendar"].map((tech) => (
               <div key={tech} className="px-10 py-6 bg-brand-light rounded-3xl border border-gray-100 font-black text-brand-navy/30 text-2xl grayscale hover:grayscale-0 hover:text-brand-red hover:bg-white transition-all cursor-default shadow-sm hover:shadow-xl">
                  {tech}
               </div>
             ))}
          </div>
          
          <div className="mt-28 grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
             <div className="relative group">
                <div className="absolute -inset-4 bg-brand-red/5 rounded-[3rem] blur-2xl group-hover:bg-brand-red/10 transition-colors"></div>
                <div className="relative bg-white border border-gray-100 p-12 rounded-[2.5rem] shadow-xl">
                   <h4 className="text-2xl font-black text-brand-navy mb-8 flex items-center gap-3">
                      <Icons.Shield className="text-brand-red" size={24} />
                      Zero Data Entry Manuals
                   </h4>
                   <p className="text-gray-600 font-medium leading-relaxed mb-8">
                      When our AI books an appointment, it creates the customer profile, attaches the call transcript, and notes the job type directly in your CRM. Your dispatcher only has to hit "Confirm."
                   </p>
                   <div className="flex gap-4">
                      <Badge variant="navy">BI-DIRECTIONAL SYNC</Badge>
                      <Badge variant="gold">256-BIT ENCRYPTION</Badge>
                   </div>
                </div>
             </div>
             
             <div className="space-y-12">
                <div className="space-y-4">
                   <h3 className="text-3xl font-black text-brand-navy">Scaling Human Talent</h3>
                   <p className="text-gray-600 font-medium text-lg leading-relaxed">
                      Stop using your highest-paid employees to answer basic questions or chase cold leads. Our AI handles 90% of the "noise," freeing your team to focus on production and profit.
                   </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   <div className="space-y-3">
                      <Icons.Zap className="text-brand-red" size={32} />
                      <h4 className="font-black text-brand-navy uppercase tracking-tighter">Scale at 3 AM</h4>
                      <p className="text-sm text-gray-500 font-medium">Handle a burst of 100 emergency calls simultaneously without crashing or hiring temp staff.</p>
                   </div>
                   <div className="space-y-3">
                      <Icons.Bot className="text-brand-red" size={32} />
                      <h4 className="font-black text-brand-navy uppercase tracking-tighter">Perfect Recall</h4>
                      <p className="text-sm text-gray-500 font-medium">AI remembers every detail from every conversation, ensuring nothing falls through the cracks.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="py-28 bg-brand-light relative">
        <div className="container mx-auto px-4 text-center">
           <div className="max-w-4xl mx-auto bg-white p-12 md:p-32 rounded-[5rem] shadow-2xl relative overflow-hidden border border-gray-100 group">
             <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-1000">
               <Icons.Bot size={300} />
             </div>
             <div className="relative z-10">
                <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-8 leading-tight tracking-tighter">
                  Stop Being The <br />
                  <span className="text-brand-red italic">Answering Service.</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                  You didn't start your business to answer phones all day. Let's install the workforce that never sleeps, never complains, and always closes the deal.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                   <Button size="lg" onClick={openBookDemo} className="bg-brand-navy text-white px-16 shadow-2xl hover:bg-slate-800 transform hover:scale-105">
                     Book My AI Strategy Audit
                   </Button>
                </div>
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
    <div className="pt-24 pb-20 overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="bg-brand-navy py-32 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#E5393520_0%,transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge variant="gold" className="mb-6 shadow-xl shadow-brand-gold/10">Reputation Management 2.0</Badge>
          {/* HEADING PRESERVED EXACTLY AS REQUESTED */}
          <h1 className="text-4xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tighter max-w-5xl mx-auto">
            Winning The Job Before <br className="hidden md:block" />
            <span className="text-brand-gold">The Phone Even Rings</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-blue-100/70 mb-12 leading-relaxed font-medium">
            In the local service industry, your 5-star rating isn't a "nice to have"—it's an economic force. We build the <span className="text-white font-black underline decoration-brand-red decoration-4">Automated Trust Engine</span> that makes you the only logical choice in your city.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button size="lg" onClick={openBookDemo} className="bg-brand-red px-12 shadow-2xl shadow-brand-red/30">
              Automate My Reviews
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-brand-navy px-12">
              See The Trust Audit
            </Button>
          </div>
        </div>
      </section>

      {/* The Choice Section (Simulation) */}
      <section className="py-28 bg-brand-light border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <SectionHeading 
                align="left"
                badge="The Consumer Choice"
                title={<>The Invisible Cost of a <span className="text-brand-red italic">Weak</span> Online Profile</>}
                subtitle="Customers make a decision in 0.5 seconds. If you don't have the 'Badge of Authority,' you're donating your leads to your competitor every single morning."
              />
              <div className="bg-white p-8 rounded-[2.5rem] border-l-8 border-brand-red shadow-xl mb-10">
                <p className="text-xl font-bold text-brand-navy italic mb-4">"Wait, I have great reviews!"</p>
                <p className="text-gray-600 leading-relaxed">
                  Having 10 reviews when your rival has 250 makes you look like a hobbyist. In the customer's mind, <span className="text-brand-navy font-black">Quantity = Reliability.</span> We close that gap on autopilot.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-10 rounded-[4rem] shadow-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full -mr-16 -mt-16"></div>
                <div className="space-y-8">
                  {/* Competitor Listing */}
                  <div className="p-8 bg-brand-navy rounded-[2rem] border border-white/10 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-black text-white text-xl">Top Rated Competitor</h4>
                      <Badge variant="gold" className="text-[9px]">MARKET LEADER</Badge>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex text-brand-gold">
                        {[...Array(5)].map((_, i) => <Icons.Star key={i} size={16} fill="currentColor" />)}
                      </div>
                      <span className="text-sm font-black text-white">4.9 <span className="text-white/40 ml-1">(482 Reviews)</span></span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full w-full">
                       <div className="h-full bg-brand-gold w-full rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Visual Gap */}
                  <div className="flex items-center justify-center py-2 relative">
                    <div className="h-px bg-gray-100 flex-1"></div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                       <div className="bg-brand-red text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg animate-pulse uppercase tracking-widest">The Profit Gap</div>
                    </div>
                    <div className="h-px bg-gray-100 flex-1"></div>
                  </div>

                  {/* Your Business Listing */}
                  <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 opacity-60 grayscale hover:grayscale-0 transition-all cursor-not-allowed">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-gray-500 text-xl">Your Business Today</h4>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex text-gray-300">
                        {[...Array(4)].map((_, i) => <Icons.Star key={i} size={16} fill="currentColor" />)}
                        <Icons.Star size={16} />
                      </div>
                      <span className="text-sm font-bold text-gray-400">4.1 <span className="text-gray-400/40 ml-1">(14 Reviews)</span></span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full w-full overflow-hidden">
                       <div className="h-full bg-brand-red w-[25%] rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 text-center">
                  <p className="text-brand-red font-black text-sm uppercase tracking-tighter">94% of users will call the top result immediately.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4-Pillar Trust Cycle */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={<>The Automated <span className="text-brand-red italic">Trust Cycle</span></>}
            subtitle="Most contractors fail at reviews because they forget to ask. Our system never forgets, never hesitates, and never misses a happy customer."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { 
                t: "CRM-Sync Trigger", 
                d: "The moment you finish a job in ServiceTitan, Housecall Pro, or Jobber, the system pings the customer with a personalized text.",
                icon: <Icons.Zap />,
                color: "bg-blue-600"
              },
              { 
                t: "Intelligent Filtering", 
                d: "Happy clients go to Google. Unhappy ones are routed to a private feedback form for immediate resolution before they can post publicly.",
                icon: <Icons.Shield />,
                color: "bg-brand-navy"
              },
              { 
                t: "Review Syndication", 
                d: "New 5-star reviews are instantly published as live 'Trust Notifications' on your website to close new visitors.",
                icon: <Icons.Layout />,
                color: "bg-brand-gold"
              },
              { 
                t: "Ranking Feedback", 
                d: "Google sees the 'Review Velocity' and pushes you to the top of the Map Pack, bringing you even more business.",
                icon: <Icons.Chart />,
                color: "bg-brand-red"
              }
            ].map((step, i) => (
              <Card key={i} className="group hover:-translate-y-2 transition-all p-10 border-0 shadow-2xl relative overflow-hidden bg-brand-light flex flex-col h-full">
                <div className="absolute -right-4 -top-4 text-9xl font-black text-white/40 group-hover:text-brand-red/5 transition-colors">{i+1}</div>
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform relative z-10`}>
                  {step.icon}
                </div>
                <h4 className="text-2xl font-black text-brand-navy mb-4 leading-tight relative z-10">{step.t}</h4>
                <p className="text-sm text-gray-600 font-medium leading-relaxed relative z-10 flex-1">{step.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI & Authority Section */}
      <section className="py-28 bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20 max-w-7xl mx-auto">
            <div className="lg:w-1/2">
               <Badge variant="white" className="mb-8">Economic Authority</Badge>
               <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
                  Convert Trust <br />
                  Into <span className="text-brand-gold italic">Deposits.</span>
               </h2>
               <p className="text-xl text-blue-100/70 mb-10 leading-relaxed">
                  Moving from a 3.8 to a 4.8 star rating on Google isn't about vanity—it's about volume. Businesses with a 4.5+ rating experience an average <span className="text-white font-black underline decoration-brand-red decoration-4">revenue boost of 44%</span> within 90 days.
               </p>
               <div className="space-y-6">
                  {[
                    "Review velocity is the #1 organic signal for GMB ranking.",
                    "92% of local leads read your reviews before clicking 'Call'.",
                    "Automated loops increase response rates by 340% over manual asking."
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4 items-center">
                       <div className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center shrink-0">
                          <Icons.Check className="text-brand-navy" size={14} />
                       </div>
                       <span className="font-bold text-blue-100/90">{text}</span>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
               <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-xl group hover:bg-brand-red/10 transition-colors">
                     <div className="text-brand-gold mb-4 group-hover:scale-110 transition-transform"><Icons.Star size={40} fill="currentColor" /></div>
                     <div className="text-4xl font-black mb-1">+240%</div>
                     <div className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Review Growth</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-xl group hover:bg-brand-red/10 transition-colors">
                     <div className="text-brand-red mb-4 group-hover:scale-110 transition-transform"><Icons.Zap size={40} /></div>
                     <div className="text-4xl font-black mb-1">-90%</div>
                     <div className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Manual Effort</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-xl group hover:bg-brand-red/10 transition-colors">
                     <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform"><Icons.Shield size={40} /></div>
                     <div className="text-4xl font-black mb-1">99.2%</div>
                     <div className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Positive Sentiment</div>
                  </div>
                  <div className="bg-brand-red p-10 rounded-[3rem] shadow-2xl shadow-brand-red/20 transform hover:-rotate-2 transition-transform">
                     <div className="text-white mb-4"><Icons.Chart size={40} /></div>
                     <div className="text-4xl font-black mb-1">1.5x</div>
                     <div className="text-[10px] uppercase font-black text-red-100 tracking-widest">Lead Close Rate</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 1-Star Firewall Section */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading 
            title={<>The <span className="text-brand-red">1-Star</span> Firewall</>}
            subtitle="Bad days happen to good businesses. Our system captures negative feedback before it hits Google, giving you a chance to make it right and save your reputation."
          />
          
          <div className="relative p-10 lg:p-20 bg-brand-light rounded-[5rem] shadow-inner border border-gray-100 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3 flex justify-center">
               <div className="w-56 h-56 rounded-full bg-white flex items-center justify-center text-brand-red relative shadow-2xl group">
                  <div className="absolute inset-0 border-8 border-brand-red/10 rounded-full animate-[ping_3s_ease-in-out_infinite]"></div>
                  <div className="absolute inset-0 border-4 border-brand-red border-dashed rounded-full animate-[spin_20s_linear_infinite]"></div>
                  <Icons.Shield size={96} className="relative z-10 group-hover:scale-110 transition-transform duration-500" />
               </div>
            </div>
            
            <div className="lg:w-2/3">
               <h4 className="text-3xl font-black text-brand-navy mb-6">Service Recovery Protocol</h4>
               <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
                  When a customer clicks 1, 2, or 3 stars on your automated text, they aren't taken to Google. Instead, they land on a <span className="text-brand-red font-black">Private Feedback Portal</span> that pings your cell phone immediately.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  {[
                    { t: "Instant Alerts", d: "Resolve the issue while the customer is still hot." },
                    { t: "Private Recovery", d: "Kill the bad review before it stains your record." },
                    { t: "Sentiment Defense", d: "Maintain a flawless 4.8+ public star rating." },
                    { t: "Direct Support", d: "Show customers you care about their experience." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-green-500 shadow-sm shrink-0">
                          <Icons.Check size={20} />
                       </div>
                       <div>
                          <h5 className="font-black text-brand-navy text-sm uppercase mb-1 tracking-tighter">{item.t}</h5>
                          <p className="text-xs text-gray-500 leading-tight">{item.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
               <div className="p-6 bg-brand-navy rounded-3xl text-white inline-block">
                  <p className="text-sm font-bold flex items-center gap-3">
                     <Icons.Zap size={16} className="text-brand-gold" />
                     Your 5-star reputation is your moat. Let's build the wall.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final High-Impact CTA */}
      <section className="py-28 bg-brand-light relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto bg-white p-12 md:p-32 rounded-[5rem] shadow-2xl relative overflow-hidden border border-gray-100 group">
             <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-1000">
               <Icons.Star size={300} />
             </div>
             <div className="relative z-10">
                <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-8 leading-tight tracking-tighter">
                  Stop Stacking Calls. <br />
                  Start Stacking <span className="text-brand-red italic">Trust.</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Your business is elite. Your online reputation should reflect that. Let's build the engine that proves your authority to every single customer in your city.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                   <Button size="lg" onClick={openBookDemo} className="bg-brand-red px-20 shadow-2xl shadow-brand-red/30 transform hover:scale-105">
                     Claim My Trust Engine
                   </Button>
                </div>
                <div className="mt-16 flex items-center justify-center gap-10 opacity-40">
                   <div className="flex items-center gap-2">
                     <Icons.Check size={20} className="text-green-600" />
                     <span className="text-xs font-black uppercase tracking-widest text-brand-navy">Google & FB Integrated</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <Icons.Check size={20} className="text-green-600" />
                     <span className="text-xs font-black uppercase tracking-widest text-brand-navy">CRM Auto-Triggers</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- How it Works Page ---
export const HowItWorksPage: React.FC = () => {
  const { openBookDemo } = useModals();

  const steps = [
    {
      title: "Smart Website Deployment",
      desc: "We build or update your website to be a lead machine. It looks great on phones, loads fast, and tells customers exactly how to hire you. No confusing fluff.",
      scenario: "A customer searches 'Plumber near me' at 9 PM. Your site loads instantly and offers a quick 'Get a Quote' button.",
      icon: <Icons.Layout />,
      color: "bg-blue-600"
    },
    {
      title: "Automated Instant Replies",
      desc: "If you're on a ladder or under a car, you can't answer the phone. Our system detects the missed call and sends an immediate friendly text to keep them from calling the next guy.",
      scenario: "You miss a call while working. The system texts: 'Hey, it's Mark from Doe Plumbing. Sorry I missed you! Can I help with a quote?' Customer replies: 'Yes, leaky sink!'",
      icon: <Icons.Phone />,
      color: "bg-brand-red"
    },
    {
      title: "Smart Lead Capture",
      desc: "Our chat assistant and forms collect names, numbers, and exactly what they need. No more messy voicemails or scribbled notes on napkins.",
      scenario: "The customer types their info into your site. You get a text notification immediately with their details.",
      icon: <Icons.MessageCircle />,
      color: "bg-brand-gold"
    },
    {
      title: "Automatic Follow-Up",
      desc: "People get busy and forget. Our system sends a gentle reminder if they haven't booked yet, keeping your business top-of-mind without you lifting a finger.",
      scenario: "The system sends a follow-up text 2 hours later if they haven't booked: 'Still need help with that sink? Just let me know!'",
      icon: <Icons.Bot />,
      color: "bg-brand-navy"
    },
    {
      title: "You Close the Deal",
      desc: "You only spend time talking to people who are qualified and ready to hire you. Your calendar stays full, and your phone stops being a distraction.",
      scenario: "You check your phone between jobs, see the qualified lead, and call them back to finalize the booking. Deal done.",
      icon: <Icons.Zap />,
      color: "bg-green-600"
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#E5393520_0%,transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Badge variant="red" className="mb-6">Simplified Growth</Badge>
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">
            Simple Steps to <br />
            <span className="text-brand-red italic">More Customers.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-blue-100/70">
            We handle the technical setup. You handle the new business. Here is how we get you results from day one.
          </p>
        </div>
      </section>

      {/* Steps List */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-20">
            {steps.map((step, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-12 items-start group`}>
                <div className="shrink-0 w-full lg:w-1/3">
                  <div className={`w-16 h-16 ${step.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform`}>
                    {step.icon}
                  </div>
                  <h3 className="text-3xl font-black text-brand-navy mb-4">
                    <span className="text-brand-red block text-sm font-black uppercase tracking-widest mb-2 opacity-50">Step 0{i + 1}</span>
                    {step.title}
                  </h3>
                </div>
                <div className="flex-1">
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                  <div className="bg-brand-light p-8 rounded-[2.5rem] border-l-8 border-brand-navy shadow-inner relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                       <Icons.MessageCircle size={100} />
                    </div>
                    <span className="block text-[10px] font-black uppercase tracking-widest text-brand-red mb-3">Real-World Scenario</span>
                    <p className="text-lg font-bold text-brand-navy leading-relaxed relative z-10">
                      "{step.scenario}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Grid */}
      <section className="py-24 bg-brand-light border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { t: "No Long Contracts", d: "We earn your business every single month with results.", icon: "📜" },
              { t: "Simple Setup", d: "We do all the heavy lifting. No technical skills required.", icon: "⚡" },
              { t: "You Stay In Control", d: "It's your business. We just make the website work for you.", icon: "👑" }
            ].map((val, i) => (
              <Card key={i} className="text-center p-12 hover:-translate-y-2 transition-transform duration-500 border-0 shadow-xl">
                <div className="text-6xl mb-6">{val.icon}</div>
                <h4 className="text-2xl font-black text-brand-navy mb-4">{val.t}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{val.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
           <div className="max-w-4xl mx-auto bg-brand-navy p-12 md:p-24 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-5">
               <Icons.Zap size={250} />
             </div>
             <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to see it <br /> <span className="text-brand-gold italic">in action?</span></h2>
             <Button size="lg" onClick={openBookDemo} className="bg-brand-red px-16 shadow-2xl shadow-brand-red/20 transform hover:scale-105">
               Watch the 2-Minute Demo
             </Button>
           </div>
        </div>
      </section>
    </div>
  );
};

// --- Results Page ---
export const ResultsPage: React.FC = () => {
  const { openBookDemo } = useModals();

  const aggregateStats = [
    { label: "Revenue Generated", value: "$12M+", icon: Icons.Chart },
    { label: "Leads Delivered", value: "54,200+", icon: Icons.Zap },
    { label: "Client Star Rating", value: "4.9/5", icon: Icons.Star },
    { label: "Market Dominance", value: "92%", icon: Icons.Shield }
  ];

  const caseStudies = [
    {
      company: "Titan Roofing & Restoration",
      location: "San Antonio, TX",
      industry: "Roofing",
      img: "https://picsum.photos/800/600?roof",
      problem: "Heavy reliance on Angi Leads and HomeAdvisor. CPA was over $120 per lead with a 10% close rate.",
      solution: "Implemented GMB Dominance strategy and Automated Review Engine. Launched exclusive storm-ready funnel.",
      resultTitle: "318% Increase in Exclusive Call Volume",
      metrics: [
        { l: "Exclusive Leads", v: "142/mo", change: "+318%" },
        { l: "CPA", v: "$24.50", change: "-79%" },
        { l: "Monthly Revenue", v: "$280k+", change: "New Record" }
      ],
      quote: "We've stopped paying for shared leads entirely. Local Boss Marketing built us an asset we own and it rings our phone every single day."
    },
    {
      company: "Modern Kitchens & Baths",
      location: "Denver, CO",
      industry: "Remodeling",
      img: "https://picsum.photos/800/600?kitchen",
      problem: "Getting 'tire-kickers' who weren't ready for $40k+ projects. Spending hours on unqualified quotes.",
      solution: "Built a conversion-first 'High-Ticket' funnel with built-in AI qualification and scheduling.",
      resultTitle: "92% Higher Lead Qualification Rate",
      metrics: [
        { l: "Lead Quality", v: "92%", change: "+240%" },
        { l: "Time Saved/wk", v: "15 hrs", change: "Automation" },
        { l: "Contract Value", v: "$58k Avg", change: "+22%" }
      ],
      quote: "Now I only go on quotes for homeowners who are actually ready to sign. The AI filters out the window shoppers for me."
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <Icons.Chart className="w-full h-full scale-150 -rotate-12 translate-x-1/3" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-red/20 text-brand-red border border-brand-red/30 text-xs font-black uppercase tracking-widest mb-6">
            Case Studies & Proof
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
            The Numbers <span className="text-brand-red">Don't Lie</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-12">
            We don't do 'pretty reports.' We deliver measurable revenue growth that helps you scale your crew and dominate your city.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {aggregateStats.map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                 <div className="text-brand-gold mb-3 flex justify-center"><stat.icon size={24} /></div>
                 <div className="text-2xl md:text-3xl font-black mb-1">{stat.value}</div>
                 <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {caseStudies.map((study, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                   <div className="relative group">
                      <div className="absolute -inset-4 bg-brand-red/5 rounded-[3rem] blur-2xl group-hover:bg-brand-red/10 transition-colors"></div>
                      <div className="relative bg-white p-3 rounded-[3rem] shadow-2xl border border-gray-100">
                         <img src={study.img} alt={study.company} className="rounded-[2.5rem] w-full h-[400px] object-cover" />
                         <div className="absolute bottom-10 left-10 right-10 bg-brand-navy/90 backdrop-blur-md p-6 rounded-2xl text-white border border-white/10 shadow-2xl">
                            <div className="flex items-center justify-between mb-2">
                               <span className="text-xs font-black uppercase tracking-widest text-brand-gold">{study.industry}</span>
                               <span className="text-[10px] font-bold text-gray-400">{study.location}</span>
                            </div>
                            <h3 className="text-xl font-black">{study.company}</h3>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="lg:w-1/2">
                   <h2 className="text-3xl md:text-5xl font-black text-brand-navy mb-8 leading-tight">
                      {study.resultTitle}
                   </h2>
                   
                   <div className="space-y-8 mb-12">
                      <div className="flex gap-6">
                         <div className="shrink-0 w-10 h-10 bg-brand-light rounded-full flex items-center justify-center text-brand-red font-black">?</div>
                         <div>
                            <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-black mb-1">The Problem</span>
                            <p className="text-gray-600 font-medium">{study.problem}</p>
                         </div>
                      </div>
                      <div className="flex gap-6">
                         <div className="shrink-0 w-10 h-10 bg-brand-navy rounded-full flex items-center justify-center text-white font-black">✓</div>
                         <div>
                            <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-black mb-1">The Strategy</span>
                            <p className="text-gray-600 font-medium">{study.solution}</p>
                         </div>
                      </div>
                   </div>

                   <div className="grid grid-cols-3 gap-4 mb-10">
                      {study.metrics.map((m, i) => (
                        <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                           <div className="text-brand-navy font-black text-xl mb-1">{m.v}</div>
                           <div className="text-[9px] uppercase tracking-tighter text-gray-500 font-black mb-1">{m.l}</div>
                           <div className="text-[10px] text-green-600 font-black flex items-center">
                              <Icons.ArrowRight size={10} className="-rotate-45 mr-1" /> {m.change}
                           </div>
                        </div>
                      ))}
                   </div>

                   <div className="bg-brand-light p-8 rounded-2xl border-l-4 border-brand-red relative italic text-gray-700 leading-relaxed font-serif">
                      <Icons.Star className="absolute -top-4 -left-4 text-brand-gold fill-current" size={32} />
                      "{study.quote}"
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Results CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-12 md:p-20 bg-brand-light border-0 shadow-2xl rounded-[3rem] overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <Icons.Shield size={160} />
            </div>
            <div className="relative z-10">
               <h2 className="text-4xl font-black text-brand-navy mb-6 leading-tight">Your Territory Is Either <span className="text-brand-red">Open</span> Or It's <span className="text-brand-red">Taken</span>.</h2>
               <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                 We only work with ONE contractor per trade per area. Once your territory is claimed by a competitor, we can't help you dominate them.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="lg" onClick={openBookDemo}>Check My Territory</Button>
                  <a href="tel:+16072351747">
                     <Button variant="outline" size="lg">Speak to an Expert</Button>
                  </a>
               </div>
            </div>
          </Card>
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

  const coreIndustries = [
    {
      title: "High-Ticket Remodeling",
      id: "remodeling",
      img: "https://picsum.photos/800/800?remodel",
      icon: <Icons.Hammer size={40} />,
      hook: "Qualify homeowners before you even pick up the phone.",
      challenge: "Tire-kickers and low-budget leads wasting your time on expensive quotes.",
      solution: "AI-driven qualification funnels that only book appointments for projects with verified budgets and timelines.",
      kpi: "30% Fewer Unqualified Quotes",
      weapon: "Multi-Step Lead Filtering"
    },
    {
      title: "Emergency-Capture Plumbing",
      id: "plumbing",
      img: "https://picsum.photos/800/800?pipe",
      icon: <Icons.Phone size={40} />,
      hook: "Speed-to-lead is the ONLY thing that matters.",
      challenge: "Missing emergency calls while under a sink, letting the lead call your competitor.",
      solution: "Instant Missed-Call Text-Back and AI Voice Agents that engage and book the job for you 24/7.",
      kpi: "Zero Leads Lost to Voicemail",
      weapon: "Missed Call Text-Back"
    }
  ];

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-brand-navy py-24 text-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <Icons.Layout className="w-full h-full scale-150 rotate-45" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-red/20 text-brand-red border border-brand-red/30 text-xs font-black uppercase tracking-widest mb-6">
            Industry Expertise
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
            The Growth Blueprint For <span className="text-brand-red">Your Trade</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-10 leading-relaxed">
            We don't do "general" marketing. We build specialized, trade-specific systems that solve the unique revenue problems of local contractors.
          </p>
          <Button size="lg" onClick={openBookDemo} className="bg-brand-red shadow-2xl">Check My Territory Availability</Button>
        </div>
      </section>

      {/* Core Blueprints */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {coreIndustries.map((item, idx) => (
              <div key={item.id} className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 relative">
                   <div className="absolute -inset-10 bg-brand-light rounded-[4rem] -z-10 transform rotate-3"></div>
                   <div className="p-2 bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden relative group">
                      <img src={item.img} alt={item.title} className="rounded-[2.5rem] w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                      <div className="absolute top-10 right-10 w-20 h-20 bg-brand-navy text-brand-gold rounded-2xl flex items-center justify-center shadow-2xl">
                         {item.icon}
                      </div>
                   </div>
                </div>
                <div className="lg:w-1/2">
                   <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-4 leading-tight">{item.title}</h2>
                   <p className="text-2xl text-brand-red font-bold mb-8">{item.hook}</p>
                   
                   <div className="space-y-10">
                      <div>
                         <span className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">The Challenge</span>
                         <p className="text-lg text-gray-600 leading-relaxed">{item.challenge}</p>
                      </div>
                      <div>
                         <span className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">The Growth Blueprint</span>
                         <p className="text-lg text-gray-600 leading-relaxed">{item.solution}</p>
                      </div>
                   </div>
                   
                   <div className="mt-12">
                      <Button onClick={openBookDemo} variant="outline" className="group">
                        See {item.title} Case Study <Icons.ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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
          <Button size="lg" onClick={openBookDemo} className="bg-brand-red">Join The LBM Movement</Button>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Local Boss Marketing Values" 
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
        <SectionHeading title="The Local Boss Marketing Blog" subtitle="Tips & Strategies for Local Growth" />
        <div className="grid md:grid-cols-3 gap-8">
           {posts.map((post, i) => (
             <Card key={i} className="overflow-hidden">
                <div className="h-48 bg-gray-300 w-full"></div>
                <div className="p-6">
                   <h3 className="text-xl font-bold text-brand-navy mb-3">{post.title}</h3>
                   <NavLink to="/blog" className="text-brand-navy font-bold text-sm underline">Read More</NavLink>
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
  const contactDetails = [
    {
      icon: <Icons.Phone className="text-brand-red" size={24} />,
      title: "Call Us",
      value: "+1 (607) 235-1747",
      href: "tel:+16072351747",
      desc: "Mon-Fri, 9am - 6pm EST"
    },
    {
      icon: <Icons.MessageCircle className="text-brand-red" size={24} />,
      title: "Email Us",
      value: "support@localbossmarketing.com",
      href: "mailto:support@localbossmarketing.com",
      desc: "We respond within 24 hours"
    },
    {
      icon: <Icons.Map className="text-brand-red" size={24} />,
      title: "Our Headquarters",
      value: "Casper, WY",
      href: "#",
      desc: "312 W 2nd St #5196"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-brand-navy py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Let's Scale Your <span className="text-brand-red">Local Territory</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            Have a question? Ready to dominate your city? We're here to help local contractors win.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 -mt-32 relative z-20 mb-20">
            {contactDetails.map((detail, i) => (
              <a 
                key={i} 
                href={detail.href} 
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                  {detail.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">{detail.title}</h3>
                <p className="text-brand-red font-bold text-lg mb-2">{detail.value}</p>
                <p className="text-gray-500 text-sm font-medium">{detail.desc}</p>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left Column: Form */}
            <div>
              <div className="mb-10">
                <h2 className="text-3xl font-black text-brand-navy mb-4">Send Us a <span className="text-brand-red">Message</span></h2>
                <p className="text-gray-600 font-medium">Tell us about your business and your growth goals. We'll get back to you with a custom strategy.</p>
              </div>
              
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent! We will contact you soon.'); }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-brand-light border-0 focus:ring-2 focus:ring-brand-red rounded-2xl font-medium transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                    <input required type="email" placeholder="john@example.com" className="w-full px-5 py-4 bg-brand-light border-0 focus:ring-2 focus:ring-brand-red rounded-2xl font-medium transition-all" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Phone Number</label>
                    <input type="tel" placeholder="(555) 000-0000" className="w-full px-5 py-4 bg-brand-light border-0 focus:ring-2 focus:ring-brand-red rounded-2xl font-medium transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Company Name</label>
                    <input type="text" placeholder="Elite Roofing LLC" className="w-full px-5 py-4 bg-brand-light border-0 focus:ring-2 focus:ring-brand-red rounded-2xl font-medium transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">How can we help?</label>
                  <textarea rows={4} placeholder="Tell us about your project..." className="w-full px-5 py-4 bg-brand-light border-0 focus:ring-2 focus:ring-brand-red rounded-2xl font-medium transition-all resize-none"></textarea>
                </div>

                <Button type="submit" size="lg" fullWidth className="py-5 shadow-2xl">
                  Request My Free Audit <Icons.ArrowRight size={20} className="ml-2" />
                </Button>
                
                <p className="text-[10px] text-gray-400 text-center uppercase tracking-tighter font-bold">
                  By clicking, you agree to our terms and privacy policy. We never spam.
                </p>
              </form>
            </div>

            {/* Right Column: Visual/Service Area */}
            <div className="relative">
              <div className="absolute -inset-10 bg-brand-light rounded-[4rem] -z-10 rotate-2"></div>
              <Card className="p-10 bg-brand-navy border-0 rounded-[3rem] shadow-2xl relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Icons.Map size={200} />
                </div>
                
                <h3 className="text-2xl font-black mb-8 relative z-10">Servicing Pros <span className="text-brand-gold text-3xl block">Across North America</span></h3>
                
                <ul className="space-y-6 relative z-10">
                  {[
                    "Exclusive territory protection (One pro per area)",
                    "Direct access to your dedicated strategist",
                    "Real-time ROI dashboard tracking every dollar",
                    "Scalable systems for 1-man crews to 50+ fleets"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center shrink-0 mt-1">
                        <Icons.Check size={14} className="text-white" />
                      </div>
                      <span className="text-blue-100 font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
