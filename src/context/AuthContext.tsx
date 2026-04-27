/* سياق المصادقة - يدير حالة تسجيل الدخول عبر LocalStorage */
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => { success: boolean; message: string };
  register: (name: string, email: string, password: string) => { success: boolean; message: string };
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

const USERS_KEY = "dt_users";
const CURRENT_USER_KEY = "dt_current_user";

/* استرجاع المستخدمين المسجلين من LocalStorage */
function getStoredUsers(): Array<{ name: string; email: string; password: string }> {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  /* استعادة الجلسة عند تحميل الصفحة */
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CURRENT_USER_KEY);
      if (stored) setUser(JSON.parse(stored));
    } catch {
      /* تجاهل أخطاء JSON */
    }
  }, []);

  /* تسجيل الدخول */
  const login = (email: string, password: string): { success: boolean; message: string } => {
    if (!email.trim() || !password.trim()) {
      return { success: false, message: "يرجى ملء جميع الحقول" };
    }
    const users = getStoredUsers();
    const found = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!found) {
      return { success: false, message: "البريد الإلكتروني أو كلمة المرور غير صحيحة" };
    }
    const loggedIn: User = { name: found.name, email: found.email };
    setUser(loggedIn);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(loggedIn));
    return { success: true, message: `مرحباً ${found.name}!` };
  };

  /* إنشاء حساب جديد */
  const register = (
    name: string,
    email: string,
    password: string
  ): { success: boolean; message: string } => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      return { success: false, message: "يرجى ملء جميع الحقول" };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, message: "صيغة البريد الإلكتروني غير صحيحة" };
    }
    if (password.length < 6) {
      return { success: false, message: "كلمة المرور يجب أن تكون 6 أحرف على الأقل" };
    }
    const users = getStoredUsers();
    if (users.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, message: "هذا البريد الإلكتروني مسجل مسبقاً" };
    }
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    const loggedIn: User = { name, email };
    setUser(loggedIn);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(loggedIn));
    return { success: true, message: `تم إنشاء حسابك بنجاح! مرحباً ${name}` };
  };

  /* تسجيل الخروج */
  const logout = () => {
    setUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

/* hook مساعد للوصول إلى السياق */
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
