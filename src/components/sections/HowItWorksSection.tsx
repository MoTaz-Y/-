import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "جمع البيانات (IoT)",
    description: "استخدام الحساسات وأجهزة إنترنت الأشياء لجمع البيانات الدقيقة من النظام المادي في الوقت الفعلي.",
    color: "bg-blue-50 text-blue-600 border-blue-200"
  },
  {
    number: "02",
    title: "معالجة البيانات",
    description: "نقل البيانات عبر شبكات سريعة وتنقيتها وتجهيزها باستخدام خوادم سحابية متقدمة.",
    color: "bg-indigo-50 text-indigo-600 border-indigo-200"
  },
  {
    number: "03",
    title: "إنشاء نموذج رقمي",
    description: "تغذية البيانات للنموذج الافتراضي ليعكس حالة النظام المادي بشكل متطابق تماماً.",
    color: "bg-violet-50 text-violet-600 border-violet-200"
  },
  {
    number: "04",
    title: "اتخاذ القرار",
    description: "تطبيق خوارزميات الذكاء الاصطناعي لتحليل النموذج، التنبؤ بالمستقبل، واتخاذ قرارات إدارية ذكية.",
    color: "bg-emerald-50 text-emerald-600 border-emerald-200"
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-2">آلية العمل</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">كيف تعمل التوأمة الرقمية؟</h3>
            <p className="text-lg text-muted-foreground">
              عملية مستمرة من تدفق المعلومات تبدأ من العالم المادي وتعود إليه في شكل قرارات وتحسينات.
            </p>
          </motion.div>
        </div>

        <div className="relative mt-20">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-violet-200 to-emerald-200 -translate-y-1/2 z-0 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className={`
                  bg-white rounded-2xl p-8 border shadow-xl shadow-black/5
                  hover:-translate-y-2 transition-transform duration-300 h-full
                  ${step.color.split(' ')[2]} /* Use the border color class */
                `}>
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black font-display mb-6
                    ${step.color} shadow-sm mx-auto lg:mx-0
                  `}>
                    {step.number}
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3 text-center lg:text-start">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed text-center lg:text-start">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow to next step (Desktop) */}
                {index < STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -left-6 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center">
                    <div className="bg-white rounded-full p-1 shadow-md text-slate-400">
                      <ArrowLeft className="w-5 h-5" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
