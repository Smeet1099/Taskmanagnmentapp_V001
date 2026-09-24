import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import AuthLayout from '@/components/AuthLayout';

export default function ForgotPassword() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your email and we'll send you a reset link."
    >
      {sent ? (
        <div className="space-y-6">
          <div className="flex flex-col items-center text-center py-4">
            <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-500/15 flex items-center justify-center mb-4">
              <CheckCircle className="w-7 h-7 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
              Check your email
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
              We've sent a password reset link to your email address. Please check
              your inbox and follow the instructions.
            </p>
          </div>
          <Link
            to="/login"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sign In
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="email"
                required
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 transition-all text-sm"
                placeholder="you@company.com"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            Send Reset Link
          </button>

          {/* Back to login */}
          <Link
            to="/login"
            className="flex items-center justify-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sign In
          </Link>
        </form>
      )}
    </AuthLayout>
  );
}
