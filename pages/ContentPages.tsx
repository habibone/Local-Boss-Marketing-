
import React, { useState } from 'react';
import { SectionHeading, Card, Button, Icons } from '../components/UI.tsx';
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
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days’ notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
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

  const faqs = [
    {
      q: "How long does it take to see results?",
      a: "While some technical fixes happen instantly, most GMB rankings take 60-90 days of consistent signal building (reviews, geotagged photos, and citations) to move into the 'Top 3 Map Pack'."
    },
    {
      q: "What if I work from home and don't have a storefront?",
      a: "That is called a 'Service Area Business.' We specialize in optimizing these profiles so you still show up for local searches without revealing your home address."
    },
    {
      q: "Why isn't my business showing up even when I'm standing in my office?",
      a: "This is usually due to 'relevance' or 'prominence' issues. Google doesn't think your profile is active enough or authoritative enough compared to competitors who are posting daily updates."
    },
    {
      q: "Does Local Boss Marketing handle the review responses?",
      a: "Yes. Part of our growth framework includes professionally responding to every review using keyword-optimized language that helps boost your ranking signals."
    }
  ];

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <Icons.Map className="w-full h-full text-white scale-150 rotate-12" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-2/3 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-red/20 text-brand-red border border-brand-red/30 text-xs font-black uppercase tracking-widest mb-6">
                Google Business Profile Mastery
              </div>
              <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
                Own the <span className="text-brand-red">Map Pack</span>.<br />Own Your City.
              </h1>
              <p className="max-w-2xl text-xl text-gray-300 mb-10 leading-relaxed">
                70% of local service clicks go to the first 3 results on Google Maps. If you aren't there, you're invisible. We use a proprietary ranking framework to push your business to the top.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" onClick={openBookDemo} className="bg-brand-red">
                  Check My Ranking Today
                </Button>
                <a href="tel:+16072351747" className="group">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-navy">
                    Talk to a Maps Expert
                  </Button>
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 hidden lg:block">
               <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-sm relative">
                  <div className="absolute -top-6 -right-6 bg-brand-gold text-brand-navy font-black p-4 rounded-2xl shadow-2xl rotate-12">
                    #1 RANKED
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 w-3/4 bg-white/20 rounded"></div>
                    <div className="h-4 w-1/2 bg-white/10 rounded"></div>
                    <div className="flex gap-1 text-brand-gold">
                      {[...Array(5)].map((_, i) => <Icons.Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <div className="pt-4 grid grid-cols-2 gap-2">
                       <div className="h-20 bg-white/5 rounded-xl border border-white/5"></div>
                       <div className="h-20 bg-white/5 rounded-xl border border-white/5"></div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-brand-light border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Mobile Intent", val: "88%", desc: "of mobile searches lead to a call within 24h" },
              { label: "The 3-Pack", val: "70%", desc: "of clicks stay inside the Map results" },
              { label: "Trust Factor", val: "92%", desc: "trust local results more than paid ads" },
              { label: "Conversion", val: "3x", desc: "higher ROI than general web SEO" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                 <div className="text-3xl md:text-4xl font-black text-brand-navy mb-1">{stat.val}</div>
                 <div className="text-[10px] font-black uppercase text-brand-red tracking-widest mb-2">{stat.label}</div>
                 <p className="text-xs text-gray-500 font-medium leading-tight">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 3 Pillars of Ranking */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="The Google Ranking Algorithm Decoded" 
            subtitle="Google doesn't rank businesses by accident. They look for three specific signals. We optimize for all of them." 
          />
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              { 
                title: "Proximity", 
                desc: "We ensure you show up exactly where your customers live by optimizing your service areas and building local relevance signals.",
                icon: Icons.Map,
                color: "text-blue-600"
              },
              { 
                title: "Relevance", 
                desc: "We match your profile categories and content to exactly what people are searching for (e.g. 'Emergency Pipe Repair' vs 'Plumber').",
                icon: Icons.Zap,
                color: "text-brand-red"
              },
              { 
                title: "Prominence", 
                desc: "We build your authority through consistent 5-star reviews, high-quality geotagged photos, and local business citations.",
                icon: Icons.Shield,
                color: "text-brand-gold"
              }
            ].map((pillar, i) => (
              <Card key={i} className="p-10 border-0 bg-brand-light rounded-[2.5rem] shadow-inner text-center group hover:bg-brand-navy transition-all duration-500">
                <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform ${pillar.color}`}>
                  <pillar.icon size={32} />
                </div>
                <h4 className="text-2xl font-black text-brand-navy mb-4 group-hover:text-white">{pillar.title}</h4>
                <p className="text-gray-600 group-hover:text-blue-100 leading-relaxed">{pillar.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Ranking Comparison */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black text-brand-navy mb-8 leading-tight">Don't Get Buried on <span className="text-brand-red">Page 2</span></h2>
              <div className="space-y-8">
                 <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600"><Icons.Check size={18} /></div>
                    <p className="text-lg text-gray-700 font-medium">Businesses in the Map Pack see <span className="font-bold text-brand-navy">400% more calls</span> than those just below them.</p>
                 </div>
                 <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600"><Icons.Check size={18} /></div>
                    <p className="text-lg text-gray-700 font-medium">Over 50% of GMB interactions are <span className="font-bold text-brand-navy">direct phone calls</span> from the search result.</p>
                 </div>
                 <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600"><Icons.Check size={18} /></div>
                    <p className="text-lg text-gray-700 font-medium">Local reviews are the <span className="font-bold text-brand-navy">#1 conversion factor</span> for service businesses in 2024.</p>
                 </div>
              </div>
              <div className="mt-12">
                 <Button size="lg" onClick={openBookDemo}>Show Me How I Rank</Button>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden">
                <div className="mb-6 pb-6 border-b border-gray-100">
                   <div className="flex items-center gap-3 mb-2">
                      <Icons.Map className="text-brand-red" size={20} />
                      <span className="font-black text-brand-navy uppercase tracking-tighter text-sm">Google Search Result Mockup</span>
                   </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-brand-navy p-6 rounded-2xl shadow-xl border-l-8 border-brand-red">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                           <div className="w-5 h-5 bg-brand-red rounded flex items-center justify-center text-[10px] text-white font-bold">1</div>
                           <h4 className="font-black text-white text-lg">Your Business</h4>
                        </div>
                        <div className="flex text-brand-gold gap-1 text-xs">
                          {[...Array(5)].map((_, i) => <Icons.Star key={i} size={12} fill="currentColor" />)}
                          <span className="text-blue-200 ml-1">4.9 (248 reviews)</span>
                        </div>
                      </div>
                      <div className="bg-green-500 text-white text-[10px] px-2 py-1 rounded font-black">OPEN NOW</div>
                    </div>
                    <div className="mt-4 flex gap-2">
                       <div className="flex-1 h-8 bg-white/10 rounded-lg flex items-center justify-center text-[10px] font-bold text-white"><Icons.Phone size={12} className="mr-1" /> Call</div>
                       <div className="flex-1 h-8 bg-white/10 rounded-lg flex items-center justify-center text-[10px] font-bold text-white"><Icons.Map size={12} className="mr-1" /> Directions</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 opacity-60 grayscale">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-5 h-5 bg-gray-300 rounded flex items-center justify-center text-[10px] text-gray-500 font-bold">2</div>
                        <h4 className="font-bold text-gray-500">Your Competitor</h4>
                    </div>
                    <div className="flex text-gray-300 gap-1 text-xs">
                        {[...Array(4)].map((_, i) => <Icons.Star key={i} size={12} fill="currentColor" />)}
                        <span className="ml-1">4.1 (12 reviews)</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 opacity-40 grayscale">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-5 h-5 bg-gray-300 rounded flex items-center justify-center text-[10px] text-gray-500 font-bold">3</div>
                        <h4 className="font-bold text-gray-500">Another Competitor</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The LBM GMB Framework */}
      <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading 
            title="The Local Boss Marketing GMB Framework" 
            subtitle="Our 100-point optimization checklist ensures no stone is left unturned." 
            light 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Profile Audit", d: "Correcting NAP (Name, Address, Phone) consistency across the entire web." },
              { t: "Keyword Injection", d: "Embedding high-intent local keywords into your services and description." },
              { t: "Content Velocity", d: "Weekly posts and geotagged photos to prove to Google you are active." },
              { t: "Review Strategy", d: "Automated loops that request and respond to 5-star customer feedback." }
            ].map((step, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm group hover:border-brand-red transition-all">
                <div className="text-4xl font-black text-brand-red mb-6 opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                <h4 className="text-xl font-bold mb-4">{step.t}</h4>
                <p className="text-blue-100/70 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
           <SectionHeading title="Common Maps Questions" subtitle="Everything you need to know about dominating local search." />
           <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-brand-light p-8 rounded-2xl border border-gray-100">
                   <h4 className="text-xl font-black text-brand-navy mb-4 flex items-start gap-3">
                      <span className="text-brand-red">Q:</span> {faq.q}
                   </h4>
                   <p className="text-gray-600 leading-relaxed pl-7 border-l-2 border-brand-navy/10">
                      {faq.a}
                   </p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-light text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-brand-navy mb-6">Your Competitors Are On The Map. Are You?</h2>
            <p className="text-xl text-gray-600 mb-10">Stop losing easy jobs to businesses with better profiles. Claim your #1 spot and start winning today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={openBookDemo} className="bg-brand-red">Audit My GMB Profile Now</Button>
              <NavLink to="/contact">
                <Button variant="outline" size="lg">Send Us a Message</Button>
              </NavLink>
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
                    <span className="text-sm font-black text-brand-red uppercase">Local Boss Marketing Site</span>
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
                      <span className="text-xs text-red-200 font-bold uppercase tracking-wider">LBM Funnel Conv.</span>
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
  const { openBookDemo } = useModals();

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
                    "Hey! This is the Local Boss Marketing Plumbing AI. We just missed your call. I'm so sorry! Can you tell me your address so I can check our schedule?"
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
                     <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center text-brand-gold">
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
                          {[...Array(5)].map((芽, i) => <Icons.Star key={i} size={28} fill="currentColor" />)}
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
    },
    {
      company: "Rapid HVAC Pros",
      location: "Jacksonville, FL",
      industry: "HVAC",
      img: "https://picsum.photos/800/600?hvac",
      problem: "Dead schedule during 'shoulder seasons' (Spring/Fall). Zero customer retention strategy.",
      solution: "AI Database Reactivation campaign messaging 2,000 past customers for maintenance check-ups.",
      resultTitle: "$85k Revenue in 48 Hours",
      metrics: [
        { l: "Booked Jobs", v: "114", change: "Immediate" },
        { l: "ROI", v: "1,200%", change: "Record High" },
        { l: "Market Share", v: "#1 Local", change: "GMB Rank" }
      ],
      quote: "We filled our entire fall schedule in two days using their AI messaging system. It's like having a faucet for revenue."
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

      {/* Proven Framework */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading 
            title="The Local Boss Marketing Framework" 
            subtitle="We don't guess. We follow a strict protocol that has worked for hundreds of local service businesses." 
            light 
          />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { t: "Deep Audit", d: "We analyze your GMB, competition, and site performance to find immediate wins." },
              { t: "Infrastructure", d: "We build your high-conversion funnels and AI text-back systems in 7 days." },
              { t: "Visibility Surge", d: "Aggressive SEO and Reputation campaigns push you to #1 on Maps." },
              { t: "Scale Engine", d: "Ongoing optimization and database reactivation keep the schedule full year-round." }
            ].map((step, i) => (
              <div key={i} className="relative group">
                 <div className="text-6xl font-black text-white/5 absolute -top-10 left-1/2 -translate-x-1/2 group-hover:text-brand-red/20 transition-colors">0{i+1}</div>
                 <div className="relative z-10">
                    <h4 className="text-xl font-black mb-4">{step.t}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.d}</p>
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
               <div className="mt-8 flex items-center justify-center gap-6 opacity-60">
                  <div className="flex items-center gap-2">
                     <Icons.Check className="text-green-600" size={16} />
                     <span className="text-xs font-black uppercase text-brand-navy">No Long Term Contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <Icons.Check className="text-green-600" size={16} />
                     <span className="text-xs font-black uppercase text-brand-navy">Exclusive Leads Only</span>
                  </div>
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
      title: "Storm-Response Roofing",
      id: "roofing",
      img: "https://picsum.photos/800/800?roofing",
      icon: <Icons.Shield size={40} />,
      hook: "Be the first name they see when the hail hits.",
      challenge: "Losing storm leads to larger franchises with huge ad budgets.",
      solution: "Hyper-local GMB dominance and 'Storm Alert' SMS automation to capture neighborhood interest instantly.",
      kpi: "2x Lead Capture Velocity",
      weapon: "GMB Map Pack Domination"
    },
    {
      title: "Full-Calendar HVAC",
      id: "hvac",
      img: "https://picsum.photos/800/800?air",
      icon: <Icons.Zap size={40} />,
      hook: "Kill the 'Shoulder Season' slump forever.",
      challenge: "The feast-or-famine cycle between extreme weather seasons.",
      solution: "Database reactivation and membership-model automation that keeps your maintenance schedule full 12 months a year.",
      kpi: "Full Off-Season Schedule",
      weapon: "Database Reactivation"
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

  const secondaryTrades = [
    "Electrical Contractors", "Landscaping & Hardscaping", "Solar Installers", "Painting Pros", 
    "Flooring Specialists", "Commercial Cleaning", "Fencing & Decking", "Pest Control Services",
    "Pressure Washing", "Window Installation", "Tree Services", "Junk Removal"
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
                      
                      <div className="grid grid-cols-2 gap-6">
                         <div className="bg-brand-light p-6 rounded-2xl border border-gray-100">
                            <span className="block text-[10px] font-black uppercase tracking-widest text-brand-navy mb-1">Target Outcome</span>
                            <span className="text-lg font-black text-brand-navy">{item.kpi}</span>
                         </div>
                         <div className="bg-brand-navy p-6 rounded-2xl">
                            <span className="block text-[10px] font-black uppercase tracking-widest text-brand-gold mb-1">Primary Weapon</span>
                            <span className="text-lg font-black text-white">{item.weapon}</span>
                         </div>
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

      {/* Expanded Industry List */}
      <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <Icons.Shield size={600} className="absolute -left-40 -bottom-40 rotate-12" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-6">Also Dominating These Sectors</h2>
            <p className="text-xl text-gray-400">Our core framework applies to any high-ticket local service business. We adapt the psychology to your specific customer.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {secondaryTrades.map((trade, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-brand-red/20 hover:border-brand-red transition-all duration-300 group">
                 <div className="flex items-center justify-between mb-4">
                    <Icons.Check className="text-brand-red opacity-50 group-hover:opacity-100" size={16} />
                 </div>
                 <h4 className="text-lg font-bold">{trade}</h4>
                 <div className="h-1 w-12 bg-white/10 mt-3 group-hover:bg-brand-red transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Growth Call */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
           <Card className="max-w-4xl mx-auto p-12 md:p-20 bg-brand-light border-0 shadow-2xl rounded-[3rem] overflow-hidden relative">
              <div className="relative z-10">
                 <h2 className="text-4xl font-black text-brand-navy mb-6 leading-tight">Don't See Your Trade listed?</h2>
                 <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                   If you run a local service business with projects over $1,000, our systems will work for you. Let's build a custom growth blueprint for your specific goals.
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" onClick={openBookDemo}>Map Out My Custom Blueprint</Button>
                    <a href="tel:+16072351747">
                       <Button variant="outline" size="lg">Talk to a Trade Expert</Button>
                    </a>
                 </div>
              </div>
           </Card>
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
                  Local Boss Marketing was built to bridge the gap between high-level technology and the hard-working local pro. We don't just "do marketing"—we build revenue engines.
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
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
           <div>
              <h1 className="text-4xl font-bold text-brand-navy mb-6">Get In Touch</h1>
              <p className="text-lg text-gray-600 mb-8">Ready to dominate your local market? Fill out the form or give us a call.</p>
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
