import React, { ReactNode, HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string;
  className?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, ...rest }) => {
  return (
    <section id={id} className={`relative py-16 md:py-24 lg:py-32 ${className}`} {...rest}>
      {children}
    </section>
  );
};

export default Section;