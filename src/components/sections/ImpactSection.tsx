import { motion } from "framer-motion";
import { LineChart, Coins, Zap, ShieldAlert } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const IMPACTS = [
  {
    title: "تحسين اتخاذ القرار",
    description: "يوفر رؤى مبنية على بيانات دقيقة، مما يقلل من التخمين ويساعد الإدارة العليا على اتخاذ قرارات استراتيجية صائبة.",
    icon: LineChart,
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    title: "تقليل التكاليف",
    description: "اختبار الأنظمة افتراضياً قبل بنائها مادياً يقلل من الهدر المالي ويحسن تخصيص الموارد بشكل كبير.",
    icon: Coins,
    gradient: "from-emerald-600 to-teal-400"
  },
  {
    title: "زيادة الكفاءة",
    description: "مراقبة الأداء المستمرة تساعد في تحديد الاختناقات الإدارية والتشغيلية وتحسين العمليات فوراً.",
    icon: Zap,
    gradient: "from-amber-500 to-orange-400"
  },
  {
    title: "التنبؤ بالمشكلات",
    description: "القدرة على توقع الأعطال والأزمات قبل وقوعها (الصيانة التنبؤية)، مما يضمن استمرارية الأعمال.",
    icon: ShieldAlert,
    gradient: "from-rose-500 to-red-500"
  }
];

export function ImpactSection() {
  return (
    <section id="impact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-2 bg-primary mb-6 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                التأثير على الأداء الإداري
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                لم تعد التوأمة الرقمية مجرد أداة هندسية، بل أصبحت ركيزة أساسية في الإدارة الحديثة، حيث تحول البيانات إلى أصول استراتيجية ملموسة.
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-border">
                <p className="font-semibold text-slate-800 text-lg leading-relaxed">
                  "التوأمة الرقمية تنقل الإدارة من رد الفعل العشوائي إلى التنبؤ الاستراتيجي المستند للبيانات."
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {IMPACTS.map((impact, index) => (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden group border-border/60 hover:border-transparent hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className={`h-2 w-full bg-gradient-to-r ${impact.gradient}`}></div>
                    <div className="p-8">
                      <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${impact.gradient} bg-opacity-10 shadow-inner`}>
                        <impact.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{impact.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{impact.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
