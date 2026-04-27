import { motion } from "framer-motion";
import { ArrowLeft, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
          alt="Digital Twin Concept" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium text-primary-foreground">مستقبل الإدارة الحديثة</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-white leading-tight mb-6">
              التوأمة <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">الرقمية</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-white/90 mb-6">
              تعزيز الأداء الإداري باستخدام التكنولوجيا
            </h2>
            
            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-2xl font-sans">
              تعتبر التوأمة الرقمية جسراً حيوياً بين العالم المادي والرقمي، تتيح لنا محاكاة الواقع وتحليله بدقة لاتخاذ قرارات إدارية استباقية وأكثر كفاءة، مما يعيد تشكيل مستقبل المؤسسات.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="rounded-full px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-1"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                استكشف المزيد
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 py-6 text-lg font-semibold text-white border-white/20 bg-white/5 hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="w-5 h-5 ml-2 text-primary" />
                كيف تعمل؟
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -right-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDuration: '7s' }}></div>
    </section>
  );
}
