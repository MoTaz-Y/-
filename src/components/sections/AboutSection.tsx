import { motion } from "framer-motion";
import { Database, Wifi, Cpu, BrainCircuit, Box, Layers, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const COMPONENTS = [
  {
    title: "البيانات (Data)",
    description: "الوقود الأساسي للتوأمة الرقمية، يتم جمعها من النظام المادي بشكل مستمر.",
    icon: Database,
    color: "from-emerald-500 to-emerald-700"
  },
  {
    title: "الحساسات (IoT)",
    description: "الأجهزة المادية التي ترصد التغيرات وتنقلها في الوقت الفعلي للنموذج الرقمي.",
    icon: Wifi,
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "المحاكاة (Simulation)",
    description: "بيئة افتراضية تفاعلية تعكس النظام المادي بدقة وتسمح بتجربة السيناريوهات.",
    icon: Cpu,
    color: "from-indigo-500 to-indigo-700"
  },
  {
    title: "الذكاء الاصطناعي (AI)",
    description: "لتحليل البيانات الضخمة والتنبؤ بالمستقبل وتقديم توصيات ذكية.",
    icon: BrainCircuit,
    color: "from-violet-500 to-violet-700"
  }
];

const TYPES = [
  { title: "توأمة المكونات", icon: Box, desc: "محاكاة لقطعة أو جزء محدد" },
  { title: "توأمة الأصول", icon: Layers, desc: "محاكاة لآلة أو معدة كاملة" },
  { title: "توأمة النظام", icon: Globe, desc: "محاكاة لبيئة عمل كاملة أو شبكة" }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">تعريف المفهوم</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">ما هي التوأمة الرقمية؟</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              هي إنشاء نموذج افتراضي دقيق لكيان مادي (منتج، عملية، أو نظام) يتم تحديثه باستمرار باستخدام بيانات الوقت الفعلي. تسمح هذه التكنولوجيا للمؤسسات بمراقبة الأداء، واختبار التغييرات، والتنبؤ بالمشكلات قبل حدوثها في الواقع.
            </p>
          </motion.div>
        </div>

        {/* Components Grid */}
        <div className="mb-20">
          <h4 className="text-2xl font-display font-bold text-foreground mb-8 text-center">المكونات الأساسية</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPONENTS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-md`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-display font-bold text-xl mb-3 text-foreground">{item.title}</h5>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Types */}
        <div>
          <h4 className="text-2xl font-display font-bold text-foreground mb-8 text-center">أنواع التوأمة الرقمية</h4>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {TYPES.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex-1 bg-muted/50 rounded-2xl p-6 border border-border/50 flex items-center gap-4 hover:bg-muted transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-sm flex-shrink-0">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h6 className="font-bold text-foreground">{type.title}</h6>
                  <p className="text-sm text-muted-foreground">{type.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
