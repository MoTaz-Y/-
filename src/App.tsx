/* الملف الرئيسي للتطبيق - يربط كل الصفحات والسياق */
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/context/AuthContext";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      {/* الصفحة الرئيسية */}
      <Route path="/" component={Home} />
      {/* صفحة تسجيل الدخول */}
      <Route path="/login" component={Login} />
      {/* صفحة إنشاء الحساب */}
      <Route path="/register" component={Register} />
      {/* صفحة 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    /* AuthProvider يوفر سياق المصادقة لكل التطبيق */
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {/* dir="rtl" لضبط الاتجاه عربي في كل الموقع */}
          <div dir="rtl" className="antialiased">
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <Router />
            </WouterRouter>
            <Toaster />
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
