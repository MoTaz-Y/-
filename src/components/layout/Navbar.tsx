/* شريط التنقل الرئيسي مع نظام المصادقة */
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Menu, X, Share2, LogIn, LogOut, UserCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

const NAV_LINKS = [
  { name: "الرئيسية", href: "#home" },
  { name: "عن الموضوع", href: "#about" },
  { name: "كيف تعمل", href: "#how-it-works" },
  { name: "التأثير الإداري", href: "#impact" },
  { name: "دراسة حالة: فودافون", href: "#case-study" },
  { name: "التوعية", href: "#awareness" },
  { name: "تواصل معنا", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { user, logout, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = section;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    setLocation("/");
    setTimeout(() => {
      const element = document.getElementById(id.substring(1));
      if (element) {
        window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
      }
    }, 50);
  };

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm border-border/50 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* الشعار */}
          <div
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => scrollTo("#home")}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <Share2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1
                className={cn(
                  "font-display font-bold text-xl tracking-tight transition-colors",
                  isScrolled ? "text-foreground" : "text-white"
                )}
              >
                التوأمة <span className="text-primary">الرقمية</span>
              </h1>
            </div>
          </div>

          {/* روابط الديسكتوب */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  activeSection === link.href.substring(1)
                    ? "bg-primary/10 text-primary"
                    : isScrolled
                    ? "text-muted-foreground hover:bg-muted hover:text-foreground"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                )}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* أزرار المصادقة - ديسكتوب */}
          <div className="hidden md:flex items-center gap-2">
            {isAuthenticated ? (
              /* مستخدم مسجل دخوله */
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm",
                    isScrolled ? "text-foreground" : "text-white"
                  )}
                >
                  <UserCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium max-w-[120px] truncate">{user?.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200",
                    isScrolled
                      ? "border-border text-muted-foreground hover:bg-red-50 hover:text-red-600 hover:border-red-300"
                      : "border-white/30 text-white/80 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <LogOut className="w-4 h-4" />
                  تسجيل الخروج
                </button>
              </div>
            ) : (
              /* مستخدم غير مسجل */
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLocation("/login")}
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200",
                    isScrolled
                      ? "border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                      : "border-white/30 text-white/80 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <LogIn className="w-4 h-4" />
                  تسجيل الدخول
                </button>
                <button
                  onClick={() => setLocation("/register")}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold bg-primary text-white hover:opacity-90 transition-all shadow-md"
                >
                  إنشاء حساب
                </button>
              </div>
            )}
          </div>

          {/* زر القائمة الموبايل */}
          <div className="md:hidden flex items-center gap-2">
            {isAuthenticated && (
              <UserCircle className={cn("w-6 h-6 text-primary")} />
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn("p-2 rounded-md", isScrolled ? "text-foreground" : "text-white")}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* القائمة الموبايل */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background border-b border-border/50 shadow-xl overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-4 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className={cn(
                "px-4 py-3 rounded-xl text-start font-medium transition-colors",
                activeSection === link.href.substring(1)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {link.name}
            </button>
          ))}

          {/* خط فاصل */}
          <div className="border-t border-border/50 my-1" />

          {/* أزرار المصادقة في الموبايل */}
          {isAuthenticated ? (
            <>
              <div className="px-4 py-2 flex items-center gap-2 text-sm text-muted-foreground">
                <UserCircle className="w-4 h-4 text-primary" />
                <span className="font-medium">{user?.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-3 rounded-xl text-start font-medium text-red-500 hover:bg-red-50 transition-colors flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                تسجيل الخروج
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => { setIsMobileMenuOpen(false); setLocation("/login"); }}
                className="px-4 py-3 rounded-xl text-start font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors flex items-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                تسجيل الدخول
              </button>
              <button
                onClick={() => { setIsMobileMenuOpen(false); setLocation("/register"); }}
                className="px-4 py-3 rounded-xl text-start font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                إنشاء حساب جديد
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
