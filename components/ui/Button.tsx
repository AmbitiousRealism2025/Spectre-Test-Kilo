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

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        aria-label={ariaLabel}
        aria-disabled={disabled || isLoading}
        aria-busy={isLoading}
        tabIndex={disabled || isLoading ? -1 : undefined}
        onClick={(e) => {
          if (disabled || isLoading) {
            e.preventDefault();
          }
        }}
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
      aria-disabled={disabled || isLoading}
      aria-busy={isLoading}
    >
      {children}
    </button>
  );
};