import { Share2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white/80 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <Share2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-display font-bold text-2xl text-white">
                التوأمة <span className="text-primary">الرقمية</span>
              </h2>
            </div>
            <p className="text-sm text-center md:text-start max-w-xs text-white/60">
              مشروع أكاديمي يستكشف تأثير التوأمة الرقمية على الأداء الإداري بالتطبيق على شركة فودافون.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <h3 className="font-display font-bold text-lg text-white mb-2">روابط سريعة</h3>
            <div className="flex gap-4 text-sm">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})} className="hover:text-primary transition-colors">الرئيسية</button>
              <a href="#about" className="hover:text-primary transition-colors">عن الموضوع</a>
              <a href="#case-study" className="hover:text-primary transition-colors">دراسة الحالة</a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-white/60">
            <p>صُنع بشغف للتكنولوجيا والإدارة</p>
            <p className="flex items-center gap-1 mt-2">
              &copy; {new Date().getFullYear()} جميع الحقوق محفوظة <Heart className="w-4 h-4 text-red-500 fill-current inline" />
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
