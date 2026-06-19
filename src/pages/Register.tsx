/* صفحة إنشاء حساب جديد */
import { useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/context/AuthContext';
import { Share2, Eye, EyeOff, UserPlus, CheckCircle2 } from 'lucide-react';

export default function Register() {
  const { register } = useAuth();
  const [, setLocation] = useLocation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  /* التحقق من قوة كلمة المرور */
  const passwordStrength = () => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.length >= 10) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    return strength;
  };

  const strengthColors = [
    '',
    'bg-red-500',
    'bg-orange-500',
    'bg-yellow-500',
    'bg-green-500',
  ];
  const strengthLabels = ['', 'ضعيفة', 'مقبولة', 'جيدة', 'قوية'];
  const strength = passwordStrength();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('كلمتا المرور غير متطابقتين');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const result = register(name, email, password);
      setLoading(false);
      if (result.success) {
        setSuccess(result.message);
        setTimeout(() => setLocation('/'), 1500);
      } else {
        setError(result.message);
      }
    }, 700);
  };

  return (
    <div
      dir='rtl'
      className='min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#0d2137] to-[#0a1f1a] px-4 py-10'
    >
      <div className='w-full max-w-md'>
        {/* الشعار */}
        <div className='text-center mb-8'>
          <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00b86b] to-[#0066cc] shadow-2xl mb-4'>
            <Share2 className='w-8 h-8 text-white' />
          </div>
          <h1 className='text-3xl font-bold text-white'>
            التوأمة <span className='text-[#00b86b]'>الرقمية</span>
          </h1>
          <p className='text-gray-400 mt-1 text-sm'>إنشاء حساب جديد</p>
        </div>

        <div className='bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl'>
          <h2 className='text-xl font-bold text-white mb-6 text-center'>
            إنشاء حساب
          </h2>

          <form onSubmit={handleSubmit} className='space-y-5'>
            {/* الاسم */}
            <div>
              <label className='block text-sm font-medium text-gray-300 mb-2'>
                الاسم الكامل
              </label>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='أدخل اسمك الكامل'
                className='w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00b86b] focus:border-transparent transition-all'
              />
            </div>

            {/* البريد الإلكتروني */}
            <div>
              <label className='block text-sm font-medium text-gray-300 mb-2'>
                البريد الإلكتروني
              </label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='example@email.com'
                className='w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00b86b] focus:border-transparent transition-all'
                dir='ltr'
              />
            </div>

            {/* كلمة المرور */}
            <div>
              <label className='block text-sm font-medium text-gray-300 mb-2'>
                كلمة المرور
              </label>
              <div className='relative'>
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='6 أحرف على الأقل'
                  className='w-full px-4 py-3 pl-12 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00b86b] focus:border-transparent transition-all'
                />
                <button
                  type='button'
                  onClick={() => setShowPass(!showPass)}
                  className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors'
                >
                  {showPass ? (
                    <EyeOff className='w-5 h-5' />
                  ) : (
                    <Eye className='w-5 h-5' />
                  )}
                </button>
              </div>
              {/* مؤشر قوة كلمة المرور */}
              {password && (
                <div className='mt-2'>
                  <div className='flex gap-1 mb-1'>
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all ${
                          i <= strength
                            ? strengthColors[strength]
                            : 'bg-white/10'
                        }`}
                      />
                    ))}
                  </div>
                  <p className='text-xs text-gray-400'>
                    قوة كلمة المرور:{' '}
                    <span
                      className={`font-medium ${strength >= 3 ? 'text-green-400' : strength === 2 ? 'text-yellow-400' : 'text-red-400'}`}
                    >
                      {strengthLabels[strength]}
                    </span>
                  </p>
                </div>
              )}
            </div>

            {/* تأكيد كلمة المرور */}
            <div>
              <label className='block text-sm font-medium text-gray-300 mb-2'>
                تأكيد كلمة المرور
              </label>
              <div className='relative'>
                <input
                  type={showConfirm ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder='أعد إدخال كلمة المرور'
                  className='w-full px-4 py-3 pl-12 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00b86b] focus:border-transparent transition-all'
                />
                <button
                  type='button'
                  onClick={() => setShowConfirm(!showConfirm)}
                  className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors'
                >
                  {showConfirm ? (
                    <EyeOff className='w-5 h-5' />
                  ) : (
                    <Eye className='w-5 h-5' />
                  )}
                </button>
                {/* أيقونة التطابق */}
                {confirmPassword && password === confirmPassword && (
                  <CheckCircle2 className='absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-400' />
                )}
              </div>
            </div>

            {/* رسائل الخطأ / النجاح */}
            {error && (
              <div className='flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 text-sm'>
                <span className='w-2 h-2 rounded-full bg-red-400 flex-shrink-0' />
                {error}
              </div>
            )}
            {success && (
              <div className='flex items-center gap-2 px-4 py-3 rounded-xl bg-green-500/15 border border-green-500/30 text-green-400 text-sm'>
                <CheckCircle2 className='w-4 h-4 flex-shrink-0' />
                {success}
              </div>
            )}

            {/* زر الإنشاء */}
            <button
              type='submit'
              disabled={loading}
              className='w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-l from-[#0066cc] to-[#0055aa] text-white font-semibold shadow-lg hover:opacity-90 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed'
            >
              {loading ? (
                <span className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />
              ) : (
                <UserPlus className='w-5 h-5' />
              )}
              {loading ? 'جارٍ إنشاء الحساب...' : 'إنشاء الحساب'}
            </button>
          </form>

          {/* رابط الدخول */}
          <p className='text-center text-gray-400 text-sm mt-6'>
            لديك حساب بالفعل ؟{' '}
            <button
              onClick={() => setLocation('/login')}
              className='text-[#00b86b] hover:text-[#00d47a] font-semibold transition-colors underline-offset-2 hover:underline'
            >
              تسجيل الدخول
            </button>
          </p>

          {/* العودة للرئيسية */}
          <p className='text-center mt-3'>
            <button
              onClick={() => setLocation('/')}
              className='text-gray-500 hover:text-gray-300 text-xs transition-colors'
            >
              ← العودة إلى الصفحة الرئيسية
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
