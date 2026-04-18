
'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Edit3, Smartphone, Shield, Zap, Globe, CircleDot } from 'lucide-react';
import { cn } from '@/lib/utils';

const getIcon = (name: string, className: string) => {
  switch (name?.toLowerCase()) {
    case 'barchart': return <BarChart3 className={className} />;
    case 'edit': return <Edit3 className={className} />;
    case 'smartphone': return <Smartphone className={className} />;
    case 'shield': return <Shield className={className} />;
    case 'zap': return <Zap className={className} />;
    case 'globe': return <Globe className={className} />;
    default: return <CircleDot className={className} />;
  }
};

export default function ServicesCoreFeatures() {
  const global = {"accent_color":"#3b82f6","button_style":"glass","button_radius":"md","primary_color":"#0f172a","button_padding":"standard","font_pairing_id":"architectural","font_family_body":"Syne","font_family_heading":"Syne"};
  const content = {"h1":"Premium Chicago Medicinal Greens, Elevated Wellness","description":"Chicago-crafted holistic solutions delivering premium quality and consistent experiences for elevated well-being.","email":"hello@ayurveda.com","phone":"9870067889","stats":[{"label":"Quality Assurance","value":"99%"},{"label":"Industry Experience","value":"10Y+"},{"label":"Client Satisfaction","value":"98%"}],"h1_line1":"Elevating Wellness Through","h1_accent":"Premium Cannabis Solutions","image_url":"https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","video_url":"","badge_text":"Trusted by Chicago's Wellness Community","brand_name":"Chicago Greens","hero_image":"","cta_primary":"Explore Products","center_image":"https://plus.unsplash.com/premium_photo-1675127366598-f6c344e5233b?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","cta_secondary":"Learn More","NAV_INDUSTRIAL":{"brand_name":"Chicago MedGreens","cta_primary":"Get Started"},"stats_highlight":{"label":"Patients Served","value":"10K+","description":"Compassionate care since 2015"},"appointment_type":"Custom Form","FOOTER_INDUSTRIAL":{"terms_url":"#","brand_name":"Testing client 1","github_url":"","twitter_url":"","linkedin_url":"","privacy_policy_url":"#"},"HERO_FULL_IMAGE_STATS":{"h1":"Premium Chicago Medicinal Solutions","stats":[{"label":"Quality Assurance","value":"99%"},{"label":"Clinical Expertise","value":"10Y+"},{"label":"Client Satisfaction","value":"98%"}],"image_url":"https://images.unsplash.com/photo-1602276506752-cec706667215?ixlib=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3840&q=80","cta_primary":"Explore Products","description":"Delivering curated medicinal excellence from Chicago, engineered for optimal well-being and precision care.","cta_secondary":"Learn More"},"SERVICES_CORE_FEATURES":{"h2":"Advanced Therapeutic Systems","features":[{"icon":"BarChart","title":"Bioactive Cultivation","description":"GMP-certified growth protocols for therapeutic consistency"},{"icon":"Shield","title":"Lab Verification","description":"Third-party tested purity and potency standards"},{"icon":"Smartphone","title":"Discreet Delivery","description":"Secure logistics with real-time tracking"},{"icon":"Edit","title":"Clinical Guidance","description":"Personalized therapeutic regimens"}],"description":"Integrated solutions blending botanical science with clinical-grade precision.","center_image":"https://images.unsplash.com/photo-1588614959060-4d144f28a207?ixlib=rb-4.2.1&auto=format&fit=crop&w=1284&q=80"}};
  const settings = {};
  
  // Theme Logic
  const theme = settings?.theme || 'primary';
  const isCustom = theme === 'custom';
  
  const bgColor = isCustom ? settings?.custom_bg : 
                  theme === 'dark' ? '#111827' : 
                  theme === 'white' ? '#ffffff' :
                  theme === 'light' ? '#f3f4f6' :
                  (global.primary_color || '#072e23');

  const isLightBg = theme === 'white' || theme === 'light';
  const textColor = isCustom ? settings?.custom_text : (isLightBg ? '#111827' : '#ffffff');
  const descColor = isLightBg ? 'rgba(11, 11, 11, 0.7)' : 'rgba(255, 255, 255, 0.8)';
  const cardBg = isLightBg ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.04)';
  const cardBorder = isLightBg ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.1)';
  
  const animPreset = settings?.animation || 'slide-up';
  
  const densityPadding = settings?.layout_density === 'compact' ? 'p-8 md:p-10' : 
                        settings?.layout_density === 'spacious' ? 'p-12 md:p-24' : 
                        'p-8 md:p-16 lg:p-20';

  const defaultFeatures = [
    { title: "Real-time analytics", description: "Gain actionable insights with our real-time analytics feature", icon: "BarChart" },
    { title: "Customizable reports", description: "Streamline your financial processes with automated workflows", icon: "Edit" },
    { title: "Mobile accessibility", description: "Manage your finances on the go with our mobile-friendly platform", icon: "Smartphone" },
    { title: "Enhanced security", description: "Protect your sensitive financial data with state-of-the-art security", icon: "Shield" }
  ];

  const features = (content?.features && content.features.length >= 4) ? content.features : defaultFeatures;

  const containerVariants = {
    hidden: { opacity: 0, y: animPreset === 'slide-up' ? 40 : 0, scale: animPreset === 'zoom' ? 0.95 : 1 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-[#fafafa] py-16 md:py-24 px-4 md:px-8 flex justify-center overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={cn(`w-full max-w-[1400px] rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden ${densityPadding}`)}
        style={{ backgroundColor: bgColor }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6" style={{ fontFamily: global.font_family_heading, color: textColor }}>
            {content?.h2 || "Core features that set us apart from the competition"}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: global.font_family_body, color: descColor }}>
            {content?.description || "Explore our standout features designed to deliver exceptional performance and value, distinguishing us from the competition."}
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-8 relative z-10">
          
          {/* Left Column (2 Cards) */}
          <div className="flex flex-col gap-6 w-full lg:w-1/3 order-2 lg:order-1">
            {features.slice(0,2).map((feat: any, idx: number) => (
              <motion.div variants={itemVariants} key={idx} className="flex-1 border rounded-[2.5rem] p-10 transition-colors shadow-sm" style={{ backgroundColor: cardBg, borderColor: cardBorder }}>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-10 md:mb-16 shadow-lg">
                  {getIcon(feat.icon, "w-6 h-6 text-orange-600")}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold" style={{ fontFamily: global.font_family_heading, color: textColor }}>{feat.title}</h3>
                  <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: global.font_family_body, color: descColor }}>
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <motion.div variants={itemVariants} className="w-full lg:w-1/3 min-h-[400px] lg:h-auto order-1 lg:order-2">
             <img 
               src={content?.center_image || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1200"}
               alt="Core Features"
               className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl"
             />
          </motion.div>

          {/* Right Column (2 Cards) */}
          <div className="flex flex-col gap-6 w-full lg:w-1/3 order-3">
            {features.slice(2,4).map((feat: any, idx: number) => (
              <motion.div variants={itemVariants} key={idx} className="flex-1 border rounded-[2.5rem] p-10 transition-colors shadow-sm" style={{ backgroundColor: cardBg, borderColor: cardBorder }}>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-10 md:mb-16 shadow-lg">
                  {getIcon(feat.icon, "w-6 h-6 text-orange-600")}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold" style={{ fontFamily: global.font_family_heading, color: textColor }}>{feat.title}</h3>
                  <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: global.font_family_body, color: descColor }}>
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
