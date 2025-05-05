import React, { ReactNode } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 700,
}) => {
  const { ref, isVisible } = useScrollAnimation();

  // Base styles
  let animationClass = 'opacity-0 ';

  // Direction-specific transform
  switch (direction) {
    case 'up':
      animationClass += 'translate-y-10 ';
      break;
    case 'down':
      animationClass += '-translate-y-10 ';
      break;
    case 'left':
      animationClass += 'translate-x-10 ';
      break;
    case 'right':
      animationClass += '-translate-x-10 ';
      break;
    default:
      animationClass += 'translate-y-10 ';
  }

  const visibleClass = 'opacity-100 translate-y-0 translate-x-0';

  return (
    <div
      ref={ref}
      className={`${className} transition-all ${isVisible ? visibleClass : animationClass}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;