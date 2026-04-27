import { motion } from "framer-motion";
import { Lightbulb, Info, Target } from "lucide-react";

export function AwarenessSection() {
  return (
    <section id="awareness" className="py-24 bg-primary/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">التوعية والتثقيف</h2>
            <p className="text-lg text-muted-foreground">
              لماذا يجب على الشركات والمؤسسات تبني مفهوم التوأمة الرقمية؟
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-border text-center"
          >
            <div className="w-16 h-16 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">ليست مجرد تكنولوجيا</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              التوأمة الرقمية هي أسلوب إدارة جديد. هي تغيير في الثقافة التنظيمية نحو اتخاذ قرارات قائمة على الدليل المطلق والمحاكاة الدقيقة بدلاً من الحدس.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-primary text-white p-8 rounded-3xl shadow-xl shadow-primary/20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
            <div className="w-16 h-16 bg-white/20 text-white rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 relative z-10">ميزة تنافسية</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed relative z-10">
              الشركات التي تتبنى هذا المفهوم ستكون أسرع في الاستجابة لمتغيرات السوق، وأقل عرضة للخسائر المفاجئة، مما يمنحها تفوقاً هائلاً على منافسيها التقليديين.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-border text-center"
          >
            <div className="w-16 h-16 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Info className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">الاستدامة والبيئة</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              تساهم المحاكاة في تقليل الهدر المادي وتجربة أفضل الحلول الصديقة للبيئة افتراضياً، مما يدعم جهود المؤسسات نحو التنمية المستدامة.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
