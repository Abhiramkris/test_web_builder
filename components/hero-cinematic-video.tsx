
'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, MousePointer2 } from 'lucide-react';

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');

export default function CinematicHero() {
  const global = {"accent_color":"#3b82f6","button_style":"glass","button_radius":"md","primary_color":"#0f172a","button_padding":"standard","font_pairing_id":"architectural","font_family_body":"Syne","font_family_heading":"Syne"};
  const content = {"h1":"Premium Chicago Medicinal Greens, Elevated Wellness","description":"Chicago-crafted holistic solutions delivering premium quality and consistent experiences for elevated well-being.","email":"hello@ayurveda.com","phone":"9870067889","stats":[{"label":"Quality Assurance","value":"99%"},{"label":"Industry Experience","value":"10Y+"},{"label":"Client Satisfaction","value":"98%"}],"h1_line1":"Elevating Wellness Through","h1_accent":"Premium Cannabis Solutions","image_url":"https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","video_url":"","badge_text":"Trusted by Chicago's Wellness Community","brand_name":"Chicago Greens","hero_image":"","cta_primary":"Explore Products","center_image":"https://plus.unsplash.com/premium_photo-1675127366598-f6c344e5233b?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","cta_secondary":"Learn More","NAV_INDUSTRIAL":{"brand_name":"Chicago MedGreens","cta_primary":"Get Started"},"stats_highlight":{"label":"Patients Served","value":"10K+","description":"Compassionate care since 2015"},"appointment_type":"Custom Form","FOOTER_INDUSTRIAL":{"terms_url":"#","brand_name":"Testing client 1","github_url":"","twitter_url":"","linkedin_url":"","privacy_policy_url":"#"},"HERO_FULL_IMAGE_STATS":{"h1":"Premium Chicago Medicinal Solutions","stats":[{"label":"Quality Assurance","value":"99%"},{"label":"Clinical Expertise","value":"10Y+"},{"label":"Client Satisfaction","value":"98%"}],"image_url":"https://images.unsplash.com/photo-1602276506752-cec706667215?ixlib=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3840&q=80","cta_primary":"Explore Products","description":"Delivering curated medicinal excellence from Chicago, engineered for optimal well-being and precision care.","cta_secondary":"Learn More"},"SERVICES_CORE_FEATURES":{"h2":"Advanced Therapeutic Systems","features":[{"icon":"BarChart","title":"Bioactive Cultivation","description":"GMP-certified growth protocols for therapeutic consistency"},{"icon":"Shield","title":"Lab Verification","description":"Third-party tested purity and potency standards"},{"icon":"Smartphone","title":"Discreet Delivery","description":"Secure logistics with real-time tracking"},{"icon":"Edit","title":"Clinical Guidance","description":"Personalized therapeutic regimens"}],"description":"Integrated solutions blending botanical science with clinical-grade precision.","center_image":"https://images.unsplash.com/photo-1588614959060-4d144f28a207?ixlib=rb-4.2.1&auto=format&fit=crop&w=1284&q=80"}};
  const settings = {"motion_speed":0,"blur_intensity":0,"hero_text_size":"text-5xl md:text-6xl","text_animation":"none","overlay_opacity":22,"hero_text_margin":"mb-0","container_animation":"none","hero_text_alignment":"text-left","show_scroll_indicator":false};
  
  const blurLevel = settings?.blur_intensity ?? 20;
  const overlayOpacity = (settings?.overlay_opacity ?? 40) / 100;
  const enableBlurDiv = settings?.enable_blur_div ?? true;
  const showContainer = enableBlurDiv && blurLevel > 0;
  const heroTextSize = settings?.hero_text_size ?? 'text-6xl md:text-8xl';
  const heroTextMargin = settings?.hero_text_margin ?? 'mb-8';
  const heroTextAlignment = settings?.hero_text_alignment ?? 'text-center';

  const containerAnimationPreset = settings?.container_animation ?? 'fade-up';
  const textAnimationPreset = settings?.text_animation ?? 'slide-up';

  const containerVariants = {
    'fade-up': { initial: { opacity: 1, y: 40, scale: 0.95 }, animate: { opacity: 1, y: 0, scale: 1 } },
    'scale-up': { initial: { opacity: 1, scale: 0.8 }, animate: { opacity: 1, scale: 1 } },
    'blur-in': { initial: { opacity: 1, filter: 'blur(20px)' }, animate: { opacity: 1, filter: 'blur(0px)' } },
    '3d-flip': { initial: { opacity: 1, rotateX: 60, y: 50 }, animate: { opacity: 1, rotateX: 0, y: 0, transition: { type: 'spring', damping: 20, stiffness: 80 } } },
    'elastic-pop': { initial: { opacity: 1, scale: 0.6 }, animate: { opacity: 1, scale: 1, transition: { type: 'spring', bounce: 0.6, duration: 1 } } },
    'slide-right': { initial: { opacity: 1, x: -80 }, animate: { opacity: 1, x: 0, transition: { type: 'spring', damping: 25, stiffness: 120 } } },
    'none': { initial: { opacity: 1 }, animate: { opacity: 1 } },
  };
  const selectedContainerVariant = containerVariants[containerAnimationPreset as keyof typeof containerVariants] || containerVariants['fade-up'];

  const textVariants = {
    'slide-up': { initial: { opacity: 1, y: 20 }, animate: { opacity: 1, y: 0 } },
    'fade': { initial: { opacity: 1 }, animate: { opacity: 1 } },
    'scale': { initial: { opacity: 1, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
    'spring-up': { initial: { opacity: 1, y: 40 }, animate: { opacity: 1, y: 0, transition: { type: 'spring', mass: 0.5, damping: 10 } } },
    'blur-reveal': { initial: { opacity: 1, filter: 'none', y: 15 }, animate: { opacity: 1, filter: 'blur(0px)', y: 0 } },
    'flip-down': { initial: { opacity: 1, rotateX: -90, transformOrigin: 'top' }, animate: { opacity: 1, rotateX: 0, transformOrigin: 'top' } },
    'none': { initial: { opacity: 1 }, animate: { opacity: 1 } },
  };
  const selectedTextVariant = textVariants[textAnimationPreset as keyof typeof textVariants] || textVariants['slide-up'];

  const staggerContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  };

  const renderAlign = heroTextAlignment === 'text-left' ? 'items-start text-left' :
                      heroTextAlignment === 'text-right' ? 'items-end text-right' :
                      'items-center text-center';

  const flexJustify = heroTextAlignment === 'text-left' ? 'justify-start' :
                      heroTextAlignment === 'text-right' ? 'justify-end' :
                      'justify-center';

  const isMixkit = content?.video_url?.includes('mixkit.co');
  const safeVideoUrl = isMixkit ? "https://res.cloudinary.com/demo/video/upload/v1689360580/c_fill,h_1080,w_1920/samples/sea-turtle.mp4" : (content?.video_url || "https://res.cloudinary.com/demo/video/upload/v1689360580/c_fill,h_1080,w_1920/samples/sea-turtle.mp4");

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-10" />
        <div 
          className="absolute inset-0 bg-black/60 z-10" 
          style={{ opacity: overlayOpacity }}
        />
        <video 
          key={safeVideoUrl}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src={safeVideoUrl} type="video/mp4" />
        </video>
        
        {/* Animated Glows */}
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-blue-500/10 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.15, 0.1],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-purple-500/10 blur-[120px] rounded-full" 
        />
      </div>

      {/* Content Box with Glassmorphism */}
      <motion.div 
        initial={selectedContainerVariant.initial}
        whileInView={selectedContainerVariant.animate}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 max-w-5xl px-6 w-full"
      >
        <div 
          className={cn(
            showContainer ? "p-10 md:p-24 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl" : ""
          )}
          style={showContainer ? { 
              backdropFilter: `blur(${blurLevel}px)`,
              backgroundColor: 'rgba(255, 255, 255, 0.02)'
          } : {}}
        >
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className={cn("flex flex-col gap-10", renderAlign)}
          >

            <motion.h1 
              variants={selectedTextVariant}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={cn("font-black text-white tracking-tighter leading-[0.8] uppercase italic", heroTextSize, heroTextMargin)}
              style={{ fontFamily: global.font_family_heading }}
            >
              {content.h1}
            </motion.h1>

            <motion.p 
              variants={selectedTextVariant}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-xl md:text-2xl text-zinc-400 font-medium max-w-2xl leading-relaxed" 
              style={{ fontFamily: global.font_family_body }}
            >
              {content.description}
            </motion.p>

            <motion.div 
              variants={selectedTextVariant}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={cn("flex flex-wrap items-center gap-6 mt-6", flexJustify)}
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "flex items-center justify-center gap-3 font-black uppercase tracking-[0.2em] shadow-[0_0_50px_rgba(255,255,255,0.1)]",
                  (!global.button_padding || global.button_padding === 'standard') ? 'px-10 py-5 text-[10px]' : global.button_padding === 'compact' ? 'px-8 py-3 text-[9px]' : 'px-14 py-6 text-[12px]',
                  global.button_radius === 'none' ? 'rounded-none' : global.button_radius === 'md' ? 'rounded-xl' : 'rounded-full',
                  global.button_style === 'ghost' ? 'bg-transparent border border-white text-white hover:bg-white hover:text-black' : global.button_style === 'glass' ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20' : 'text-black'
                )}
                style={global.button_style === 'solid' || !global.button_style ? { backgroundColor: global.accent_color || '#ffffff' } : {}}
              >
                {content.cta_primary}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <button 
                className={cn(
                  "flex items-center justify-center gap-3 font-black uppercase tracking-[0.2em] bg-transparent border border-white/20 text-white hover:bg-white/5 transition-all",
                  (!global.button_padding || global.button_padding === 'standard') ? 'px-10 py-5 text-[10px]' : global.button_padding === 'compact' ? 'px-8 py-3 text-[9px]' : 'px-14 py-6 text-[12px]',
                  global.button_radius === 'none' ? 'rounded-none' : global.button_radius === 'md' ? 'rounded-xl' : 'rounded-full'
                )}
              >
                {content.cta_secondary}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Mouse Hint */}
      {settings?.show_scroll_indicator !== false && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
        >
          <div className="w-7 h-12 rounded-full border-2 border-white/30 flex justify-center p-2">
             <motion.div 
               animate={{ y: [0, 12, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="w-1.5 h-1.5 bg-white rounded-full" 
             />
          </div>
        </motion.div>
      )}
    </section>
  );
}
  