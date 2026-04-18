
'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MoveRight } from 'lucide-react';

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');

export default function HeroStats() {
  const global = {"accent_color":"#3b82f6","button_style":"glass","button_radius":"md","primary_color":"#0f172a","button_padding":"standard","font_pairing_id":"architectural","font_family_body":"Syne","font_family_heading":"Syne"};
  const content = {"h1":"Premium Chicago Medicinal Greens, Elevated Wellness","description":"Chicago-crafted holistic solutions delivering premium quality and consistent experiences for elevated well-being.","email":"hello@ayurveda.com","phone":"9870067889","stats":[{"label":"Quality Assurance","value":"99%"},{"label":"Industry Experience","value":"10Y+"},{"label":"Client Satisfaction","value":"98%"}],"h1_line1":"Elevating Wellness Through","h1_accent":"Premium Cannabis Solutions","image_url":"https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","video_url":"","badge_text":"Trusted by Chicago's Wellness Community","brand_name":"Chicago Greens","hero_image":"","cta_primary":"Explore Products","center_image":"https://plus.unsplash.com/premium_photo-1675127366598-f6c344e5233b?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","cta_secondary":"Learn More","NAV_INDUSTRIAL":{"brand_name":"Chicago MedGreens","cta_primary":"Get Started"},"stats_highlight":{"label":"Patients Served","value":"10K+","description":"Compassionate care since 2015"},"appointment_type":"Custom Form","FOOTER_INDUSTRIAL":{"terms_url":"#","brand_name":"Testing client 1","github_url":"","twitter_url":"","linkedin_url":"","privacy_policy_url":"#"},"HERO_FULL_IMAGE_STATS":{"h1":"Premium Chicago Medicinal Solutions","stats":[{"label":"Quality Assurance","value":"99%"},{"label":"Clinical Expertise","value":"10Y+"},{"label":"Client Satisfaction","value":"98%"}],"image_url":"https://images.unsplash.com/photo-1602276506752-cec706667215?ixlib=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3840&q=80","cta_primary":"Explore Products","description":"Delivering curated medicinal excellence from Chicago, engineered for optimal well-being and precision care.","cta_secondary":"Learn More"},"SERVICES_CORE_FEATURES":{"h2":"Advanced Therapeutic Systems","features":[{"icon":"BarChart","title":"Bioactive Cultivation","description":"GMP-certified growth protocols for therapeutic consistency"},{"icon":"Shield","title":"Lab Verification","description":"Third-party tested purity and potency standards"},{"icon":"Smartphone","title":"Discreet Delivery","description":"Secure logistics with real-time tracking"},{"icon":"Edit","title":"Clinical Guidance","description":"Personalized therapeutic regimens"}],"description":"Integrated solutions blending botanical science with clinical-grade precision.","center_image":"https://images.unsplash.com/photo-1588614959060-4d144f28a207?ixlib=rb-4.2.1&auto=format&fit=crop&w=1284&q=80"}};
  const settings = {"0":{"id":"container_animation","value":"scale-up"},"1":{"id":"text_animation","value":"spring-up"},"2":{"id":"hero_text_size","value":"text-6xl md:text-8xl"},"3":{"id":"hero_text_margin","value":"mb-8"},"4":{"id":"hero_text_alignment","value":"text-center"},"5":{"id":"overlay_opacity","value":60},"6":{"id":"show_stats","value":true},"7":{"id":"spacing_top","value":80},"show_stats":true,"spacing_top":160,"hero_text_size":"text-5xl md:text-6xl","text_animation":"fade","overlay_opacity":15,"hero_text_margin":"mb-8","container_animation":"fade-up","hero_text_alignment":"text-left"};
  
  const stats = content.stats || [
    { label: 'Project Success', value: '98%' },
    { label: 'Years Experience', value: '15+' },
    { label: 'Global Clients', value: '250+' }
  ];

  const containerAnimPreset = settings?.container_animation || 'fade-up';
  const textAnimPreset = settings?.text_animation || 'slide-up';
  const textSize = settings?.hero_text_size || "text-6xl md:text-8xl";
  const textAlignment = settings?.hero_text_alignment || "text-left";
  const textMargin = settings?.hero_text_margin || "mb-8";
  const flexAlignment = textAlignment === 'text-center' ? 'items-center' : textAlignment === 'text-right' ? 'items-end' : 'items-start';

  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: containerAnimPreset === 'fade-up' ? 40 : 0, 
      scale: containerAnimPreset === 'scale-up' || containerAnimPreset === 'elastic-pop' ? 0.9 : 1,
      filter: containerAnimPreset === 'blur-in' ? "blur(10px)" : "blur(0px)",
      x: containerAnimPreset === 'slide-right' ? -50 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: "blur(0px)",
      x: 0,
      transition: { 
        duration: 1, 
        staggerChildren: 0.1,
        type: containerAnimPreset === 'elastic-pop' ? "spring" : "tween",
        bounce: 0.5
      } 
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: textAnimPreset === 'slide-up' ? 20 : textAnimPreset === 'spring-up' ? 40 : 0,
      scale: textAnimPreset === 'scale' ? 0.95 : 1,
      filter: textAnimPreset === 'blur-reveal' ? "blur(0px)" : "blur(0px)",
      rotateX: textAnimPreset === 'flip-down' ? 90 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: "blur(0px)",
      rotateX: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        type: textAnimPreset === 'spring-up' ? "spring" : "tween",
        bounce: 0.4 
      } 
    }
  };

  return (
    <section 
      className={cn(
        "relative min-h-[90vh] flex flex-col justify-end overflow-hidden bg-zinc-950",
        flexAlignment
      )}
      style={{ paddingTop: settings?.spacing_top ? settings.spacing_top + 'px' : '80px' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          src={content.image_url || "https://images.unsplash.com/photo-1519067793744-1618217bd501?auto=format&fit=crop&q=80"} 
          className="w-full h-full object-cover grayscale brightness-50"
        />
        <div 
          className="absolute inset-0 bg-zinc-950" 
          style={{ opacity: (settings?.overlay_opacity ?? 50) / 100 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
      </div>

      {/* Main Content */}
      <motion.div 
        variants={containerAnimPreset === 'none' ? {} : containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={cn(
          "relative z-10 px-12 md:px-24 mb-20 max-w-7xl",
          textAlignment
        )}
      >
        <motion.h1 
          variants={textAnimPreset === 'none' ? {} : itemVariants}
          className={`${textSize} ${textMargin} font-black text-white tracking-[1.2px] leading-[0.85] uppercase italic`}
          style={{ fontFamily: global.font_family_heading }}
        >
          {content.h1 || "Precision Logistics."}
        </motion.h1>
        <motion.p 
          variants={textAnimPreset === 'none' ? {} : itemVariants}
          className={cn("text-lg md:text-xl text-zinc-300 font-medium max-w-2xl mb-16 leading-relaxed", textAlignment === 'text-center' ? 'mx-auto' : "")}
        >
          {content.description}
        </motion.p>
        <motion.div variants={textAnimPreset === 'none' ? {} : itemVariants} className={cn("flex flex-wrap items-center gap-10", textAlignment === 'text-center' ? 'justify-center' : textAlignment === 'text-right' ? 'justify-end' : "")}>
           <button className="h-20 px-14 bg-white text-zinc-950 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-2xl hover:opacity-90 transition-all">
              {content.cta_primary}
           </button>
        </motion.div>
      </motion.div>

      {settings?.show_stats !== false && (
        <div className="relative z-10 bg-white/5 backdrop-blur-3xl border-t border-white/10 px-12 md:px-24 py-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
            {stats.slice(0, 3).map((stat: any, i: number) => (
              <div key={i} className="flex flex-col gap-2">
                 <span className="text-4xl md:text-7xl font-black text-white italic">{stat.value}</span>
                 <span className="text-[11px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.3em]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
  