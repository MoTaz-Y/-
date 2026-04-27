import { motion } from "framer-motion";
import { Network, AlertTriangle, Star, CheckCircle2 } from "lucide-react";

const USE_CASES = [
  {
    title: "إدارة الشبكات",
    description: "بناء نموذج رقمي كامل لشبكة أبراج الاتصالات لمراقبة التغطية والضغط وتوزيع الأحمال بكفاءة.",
    icon: Network
  },
  {
    title: "التنبؤ بالأعطال",
    description: "تحليل بيانات الاستهلاك والحرارة لتوقع تعطل السيرفرات أو الأبراج قبل حدوثها وإرسال فرق الصيانة.",
    icon: AlertTriangle
  },
  {
    title: "تحسين تجربة العملاء",
    description: "محاكاة تأثير إطلاق خدمات جديدة أو عروض على الشبكة لضمان عدم تأثر جودة الخدمة المقدمة للعميل.",
    icon: Star
  }
];

const RESULTS = [
  "تقليل وقت انقطاع الخدمة بنسبة تتجاوز 30%.",
  "توفير ملايين الدولارات من تكاليف الصيانة الدورية غير الضرورية.",
  "رفع مستوى رضا العملاء من خلال استقرار الشبكة.",
  "تسريع عملية اتخاذ القرار في الأزمات بناءً على محاكاة دقيقة."
];

export function CaseStudySection() {
  return (
    <section id="case-study" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/vodafone-abstract.png`} 
          alt="Vodafone Network" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block bg-red-600 text-white px-4 py-1.5 rounded-full font-bold text-sm tracking-wider mb-6 shadow-lg shadow-red-600/30">
              تطبيق عملي
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">دراسة حالة: شركة فودافون</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              تعتبر فودافون من الشركات الرائدة عالمياً في قطاع الاتصالات. مع تعقيد شبكاتها (4G/5G) وملايين المستخدمين، تبنت فودافون تقنية التوأمة الرقمية لتعزيز كفاءتها الإدارية والتشغيلية.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Use Cases */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-white mb-8 border-b border-white/10 pb-4">
              مجالات الاستخدام
            </h3>
            {USE_CASES.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-6 hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 bg-red-600/20 text-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <useCase.icon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{useCase.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Results */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold text-white mb-8">
                النتائج الإدارية المتوقعة
              </h3>
              <div className="space-y-5">
                {RESULTS.map((result, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-red-200 flex-shrink-0 mt-1" />
                    <p className="text-lg font-medium text-white/90">{result}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <p className="text-sm text-red-100 font-semibold text-center leading-relaxed">
                  "التوأمة الرقمية مكنت فودافون من رؤية الشبكة ككائن حي يمكن التفاعل معه وإدارته استباقياً بدلاً من انتظار حدوث العطل."
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
