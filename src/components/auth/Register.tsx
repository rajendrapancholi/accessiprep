'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { RegisterFormData, registerSchema } from '@/lib/validations/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/utils/utils';
import { Eye, EyeOff } from 'lucide-react';

const Register: React.FC = () => {
  const [error, setError] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: RegisterFormData) => {
    setError('');
    try {
      console.log('Validated Register Data:', data);
      // await
    } catch (error) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md bg-card text-card-foreground border border-border rounded-xl shadow-sm p-8">
        {/* Header */}
        <div className="space-y-1.5 text-center mb-6">
          <h1 className="text-2xl font-bold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your details below to create your account
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive text-destructive text-sm font-medium">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-foreground"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              required
              placeholder="Rajendra Pancholi"
              {...register('fullName')}
              className={cn(
                'w-full px-3.5 py-2 text-sm rounded-lg bg-background border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition',
                errors.fullName
                  ? 'border-destructive focus:ring-destructive'
                  : 'border-input focus:ring-ring',
              )}
            />
            {errors.fullName && (
              <p className="text-xs text-destructive">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="name@example.com"
              {...register('email')}
              className={cn(
                'w-full px-3.5 py-2 text-sm rounded-lg bg-background border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition',
                errors.email
                  ? 'border-destructive focus:ring-destructive'
                  : 'border-input focus:ring-ring',
              )}
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-foreground"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                {...register('password')}
                className={cn(
                  'w-full pl-3.5 pr-10 py-2 text-sm rounded-lg bg-background border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition',
                  errors.password
                    ? 'border-destructive focus:ring-destructive'
                    : 'border-input focus:ring-ring',
                )}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-destructive">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="space-y-1.5">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-foreground"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="••••••••"
                {...register('confirmPassword')}
                className={cn(
                  'w-full pl-3.5 pr-10 py-2 text-sm rounded-lg bg-background border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition',
                  errors.confirmPassword
                    ? 'border-destructive focus:ring-destructive'
                    : 'border-input focus:ring-ring',
                )}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                aria-label={
                  showConfirmPassword
                    ? 'Hide confirm password'
                    : 'Show confirm password'
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition cursor-pointer"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-xs text-destructive">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-2.5 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed transition cursor-pointer"
          >
            {isSubmitting ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        {/* Footer / Login Link */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-medium text-foreground underline underline-offset-4 hover:text-ring transition"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
