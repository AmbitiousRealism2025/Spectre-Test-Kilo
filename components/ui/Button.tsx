import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  href?: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  children,
  className = '',
  ariaLabel,
  disabled = false,
  isLoading = false,
}) => {
  const baseClasses = 'btn-base font-medium transition-all duration-300 ease-in-out';
  const variantClasses = variant === 'primary'
    ? 'btn-primary'
    : 'btn-secondary';

  const disabledClasses = disabled || isLoading ? 'opacity-50 cursor-not-allowed' : '';

  const buttonClasses = `${baseClasses} ${variantClasses} ${disabledClasses} ${className}`.trim();

  // When disabled or loading with an href, render a button instead of a Link
  // This ensures proper accessibility semantics for non-interactive states
  if (href && !(disabled || isLoading)) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      type="button"
      disabled={disabled || isLoading}
      aria-label={ariaLabel}
      aria-busy={isLoading}
    >
      {children}
    </button>
  );
};