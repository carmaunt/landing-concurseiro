import React from 'react';
import { trackClick } from '@/lib/analytics';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { FaGooglePlay } from 'react-icons/fa';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  ctaId: string;
  ctaLocation: string;
  variant?: 'primary' | 'white' | 'outline';
  size?: 'default' | 'lg' | 'sm';
  showIcon?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  ctaId,
  ctaLocation,
  variant = 'primary',
  size = 'default',
  showIcon = false,
  className,
  children,
  ...props
}) => {
  const handleClick = () => {
    trackClick(ctaId, ctaLocation);
  };

  const getUrlWithUtm = () => {
    const url = new URL(siteConfig.urls.playStore);
    url.searchParams.set('utm_source', 'meta');
    url.searchParams.set('utm_medium', 'paid_social');
    url.searchParams.set('utm_campaign', 'landing_concurseiro');
    url.searchParams.set('utm_content', ctaId);
    return url.toString();
  };

  const baseStyles = "inline-flex items-center justify-center font-semibold transition-transform active:scale-95 duration-200 rounded-xl min-h-[44px]";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:brightness-110 shadow-lg shadow-primary/20",
    white: "bg-white text-primary hover:bg-gray-50 shadow-lg shadow-black/10",
    outline: "border-2 border-primary text-primary hover:bg-primary/5",
  };

  const sizes = {
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    sm: "px-4 py-2 text-sm",
  };

  return (
    <a
      href={getUrlWithUtm()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      data-testid={`cta-${ctaId}`}
      {...props as any}
    >
      {showIcon && <FaGooglePlay className="mr-2 h-5 w-5" />}
      {children}
    </a>
  );
};
